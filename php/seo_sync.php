<?php

function seo_escape_html_attr($value) {
    return htmlspecialchars((string)$value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function seo_replace_meta_content($html, $metaName, $value) {
    $escapedValue = seo_escape_html_attr($value);
    $pattern = '/<meta\s+name="' . preg_quote($metaName, '/') . '"\s+content="[^"]*"\s*\/?>/i';
    $replacement = '<meta name="' . $metaName . '" content="' . $escapedValue . '" />';
    if (preg_match($pattern, $html)) {
        return preg_replace($pattern, $replacement, $html, 1);
    }
    return preg_replace('/<\/head>/i', "  {$replacement}\n</head>", $html, 1);
}

function seo_replace_property_content($html, $propertyName, $value) {
    $escapedValue = seo_escape_html_attr($value);
    $pattern = '/<meta\s+property="' . preg_quote($propertyName, '/') . '"\s+content="[^"]*"\s*\/?>/i';
    $replacement = '<meta property="' . $propertyName . '" content="' . $escapedValue . '" />';
    if (preg_match($pattern, $html)) {
        return preg_replace($pattern, $replacement, $html, 1);
    }
    return preg_replace('/<\/head>/i', "  {$replacement}\n</head>", $html, 1);
}

function seo_replace_link_href($html, $rel, $value) {
    $escapedValue = seo_escape_html_attr($value);
    $pattern = '/<link\s+rel="' . preg_quote($rel, '/') . '"\s+href="[^"]*"\s*\/?>/i';
    $replacement = '<link rel="' . $rel . '" href="' . $escapedValue . '" />';
    if (preg_match($pattern, $html)) {
        return preg_replace($pattern, $replacement, $html, 1);
    }
    return preg_replace('/<\/head>/i', "  {$replacement}\n</head>", $html, 1);
}

function seo_upsert_marked_block($html, $startMarker, $endMarker, $content, $anchorPattern, $position = 'before') {
    $block = $startMarker . "\n" . $content . "\n" . $endMarker;
    $markerPattern = '/' . preg_quote($startMarker, '/') . '.*?' . preg_quote($endMarker, '/') . '/s';
    if (preg_match($markerPattern, $html)) {
        return preg_replace($markerPattern, $block, $html, 1);
    }

    if ($position === 'after' && preg_match($anchorPattern, $html, $matches)) {
        return preg_replace($anchorPattern, $matches[0] . "\n" . $block, $html, 1);
    }

    return preg_replace($anchorPattern, $block . "\n$0", $html, 1);
}

function sync_seo_into_html($filePath, $seo) {
    if (!file_exists($filePath)) {
        return true;
    }

    $html = file_get_contents($filePath);
    if ($html === false) {
        return false;
    }

    $googleVerification = $seo['googleSiteVerification'] ?? '';
    $bingVerification = $seo['bingSiteVerification'] ?? '';
    $gaId = trim((string)($seo['googleAnalyticsId'] ?? ''));
    $gtmId = trim((string)($seo['googleTagManagerId'] ?? ''));
    $canonicalBase = get_sitemap_base_url($seo);
    $fileName = basename($filePath);
    $isCareers = $fileName === 'careers.html';
    $canonicalUrl = $isCareers ? $canonicalBase . '/careers.html' : $canonicalBase . '/';
    $defaultOgImage = $canonicalBase . '/assets/images/og/amg-og-cover.png';
    $ogImage = trim((string)($seo['ogImage'] ?? ''));
    if ($ogImage === '') {
        $ogImage = $defaultOgImage;
    } elseif (!preg_match('/^https?:\/\//i', $ogImage)) {
        $ogImage = $canonicalBase . '/' . ltrim($ogImage, '/');
    }
    $title = trim((string)($isCareers ? ($seo['careersTitle'] ?? '') : ($seo['homeTitle'] ?? '')));
    if ($title === '') {
        $title = trim((string)($seo['defaultTitle'] ?? ''));
    }
    $description = trim((string)($isCareers ? ($seo['careersDescription'] ?? '') : ($seo['homeDescription'] ?? '')));
    if ($description === '') {
        $description = trim((string)($seo['defaultDescription'] ?? ''));
    }

    $html = seo_replace_meta_content($html, 'google-site-verification', $googleVerification);
    $html = seo_replace_meta_content($html, 'msvalidate.01', $bingVerification);
    $html = seo_replace_property_content($html, 'og:title', $title);
    $html = seo_replace_property_content($html, 'og:description', $description);
    $html = seo_replace_property_content($html, 'og:image', $ogImage);
    $html = seo_replace_property_content($html, 'og:url', $canonicalUrl);
    $html = seo_replace_meta_content($html, 'twitter:title', $title);
    $html = seo_replace_meta_content($html, 'twitter:description', $description);
    $html = seo_replace_meta_content($html, 'twitter:image', $ogImage);
    $html = seo_replace_link_href($html, 'canonical', $canonicalUrl);

    $headParts = [];
    if ($gaId !== '') {
        $escapedGaId = seo_escape_html_attr($gaId);
        $headParts[] = '  <script async src="https://www.googletagmanager.com/gtag/js?id=' . $escapedGaId . '"></script>';
        $headParts[] = '  <script>';
        $headParts[] = '    window.dataLayer = window.dataLayer || [];';
        $headParts[] = '    function gtag(){dataLayer.push(arguments);}';
        $headParts[] = '    gtag(\'js\', new Date());';
        $headParts[] = '    gtag(\'config\', \'' . addslashes($gaId) . '\');';
        $headParts[] = '  </script>';
    }
    if ($gtmId !== '') {
        $headParts[] = '  <script>';
        $headParts[] = '    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'' . addslashes($gtmId) . '\');';
        $headParts[] = '  </script>';
    }
    $headContent = implode("\n", $headParts);
    $html = seo_upsert_marked_block(
        $html,
        '<!-- SEO_MANAGED_HEAD_START -->',
        '<!-- SEO_MANAGED_HEAD_END -->',
        $headContent,
        '/<\/head>/i',
        'before'
    );

    $bodyContent = '';
    if ($gtmId !== '') {
        $escapedGtmId = seo_escape_html_attr($gtmId);
        $bodyContent = '  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=' . $escapedGtmId . '" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    }
    $html = seo_upsert_marked_block(
        $html,
        '<!-- SEO_MANAGED_BODY_START -->',
        '<!-- SEO_MANAGED_BODY_END -->',
        $bodyContent,
        '/<body\b[^>]*>/i',
        'after'
    );

    return file_put_contents($filePath, $html) !== false;
}

function get_sitemap_base_url($seo) {
    $canonicalBase = trim((string)($seo['canonicalBase'] ?? ''));
    if ($canonicalBase !== '') {
        return rtrim($canonicalBase, '/');
    }

    if (!empty($_SERVER['HTTP_HOST'])) {
        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        return $scheme . '://' . $_SERVER['HTTP_HOST'];
    }

    return 'https://amg-main.com';
}

function build_sitemap_xml($rootDir, $baseUrl) {
    $pages = [
        ['file' => 'index.html', 'loc' => $baseUrl . '/', 'priority' => '1.0'],
        ['file' => 'index.html', 'loc' => $baseUrl . '/index.html', 'priority' => '0.9'],
        ['file' => 'careers.html', 'loc' => $baseUrl . '/careers.html', 'priority' => '0.8'],
    ];

    $lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
    foreach ($pages as $page) {
        $filePath = $rootDir . '/' . $page['file'];
        if (!file_exists($filePath)) {
            continue;
        }
        $lastmod = gmdate('Y-m-d', filemtime($filePath) ?: time());
        $lines[] = '  <url>';
        $lines[] = '    <loc>' . htmlspecialchars($page['loc'], ENT_XML1 | ENT_QUOTES, 'UTF-8') . '</loc>';
        $lines[] = '    <lastmod>' . $lastmod . '</lastmod>';
        $lines[] = '    <changefreq>weekly</changefreq>';
        $lines[] = '    <priority>' . $page['priority'] . '</priority>';
        $lines[] = '  </url>';
    }
    $lines[] = '</urlset>';

    return implode("\n", $lines) . "\n";
}

function sync_sitemap_files($rootDir, $seo) {
    $baseUrl = get_sitemap_base_url($seo);
    $sitemapPath = $rootDir . '/sitemap.xml';
    $robotsPath = $rootDir . '/robots.txt';

    $sitemapSaved = file_put_contents($sitemapPath, build_sitemap_xml($rootDir, $baseUrl)) !== false;
    $robotsContent = "User-agent: *\nAllow: /\n\nSitemap: " . $baseUrl . "/sitemap.xml\n";
    $robotsSaved = file_put_contents($robotsPath, $robotsContent) !== false;

    return [
        'sitemapSaved' => $sitemapSaved,
        'robotsSaved' => $robotsSaved,
    ];
}

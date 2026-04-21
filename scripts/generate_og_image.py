import binascii
import math
import os
import struct
import zlib


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LOGO_PATH = os.path.join(ROOT, "assets/images/logo/amg-logo.jpeg")
OUTPUT_DIR = os.path.join(ROOT, "assets/images/og")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "amg-og-cover.png")


def paeth(a, b, c):
    p = a + b - c
    pa = abs(p - a)
    pb = abs(p - b)
    pc = abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def read_png_rgba(path):
    with open(path, "rb") as handle:
        data = handle.read()
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("Expected a PNG source logo")

    pos = 8
    width = height = bit_depth = color_type = interlace = None
    idat = bytearray()

    while pos < len(data):
        length = struct.unpack(">I", data[pos:pos + 4])[0]
        pos += 4
        chunk_type = data[pos:pos + 4]
        pos += 4
        chunk_data = data[pos:pos + length]
        pos += length + 4

        if chunk_type == b"IHDR":
            width, height, bit_depth, color_type, _comp, _filter, interlace = struct.unpack(">IIBBBBB", chunk_data)
        elif chunk_type == b"IDAT":
            idat.extend(chunk_data)
        elif chunk_type == b"IEND":
            break

    if bit_depth != 8 or color_type != 6 or interlace != 0:
        raise ValueError("Unsupported PNG format for logo")

    raw = zlib.decompress(bytes(idat))
    bytes_per_pixel = 4
    stride = width * bytes_per_pixel
    pixels = bytearray(height * stride)
    src = 0
    prev_row = bytearray(stride)

    for y in range(height):
        filter_type = raw[src]
        src += 1
        row = bytearray(raw[src:src + stride])
        src += stride

        if filter_type == 1:
            for i in range(stride):
                left = row[i - bytes_per_pixel] if i >= bytes_per_pixel else 0
                row[i] = (row[i] + left) & 255
        elif filter_type == 2:
            for i in range(stride):
                row[i] = (row[i] + prev_row[i]) & 255
        elif filter_type == 3:
            for i in range(stride):
                left = row[i - bytes_per_pixel] if i >= bytes_per_pixel else 0
                up = prev_row[i]
                row[i] = (row[i] + ((left + up) >> 1)) & 255
        elif filter_type == 4:
            for i in range(stride):
                left = row[i - bytes_per_pixel] if i >= bytes_per_pixel else 0
                up = prev_row[i]
                up_left = prev_row[i - bytes_per_pixel] if i >= bytes_per_pixel else 0
                row[i] = (row[i] + paeth(left, up, up_left)) & 255
        elif filter_type != 0:
            raise ValueError("Unsupported PNG filter")

        pixels[y * stride:(y + 1) * stride] = row
        prev_row = row

    return width, height, pixels


def write_png_rgba(path, width, height, pixels):
    def chunk(chunk_type, payload):
        return (
            struct.pack(">I", len(payload))
            + chunk_type
            + payload
            + struct.pack(">I", binascii.crc32(chunk_type + payload) & 0xFFFFFFFF)
        )

    stride = width * 4
    raw = bytearray()
    for y in range(height):
        raw.append(0)
        raw.extend(pixels[y * stride:(y + 1) * stride])

    png = bytearray(b"\x89PNG\r\n\x1a\n")
    png.extend(chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)))
    png.extend(chunk(b"IDAT", zlib.compress(bytes(raw), 9)))
    png.extend(chunk(b"IEND", b""))

    with open(path, "wb") as handle:
        handle.write(png)


def blend_pixel(dst, idx, src_rgba):
    sr, sg, sb, sa = src_rgba
    if sa <= 0:
        return
    dr, dg, db, da = dst[idx:idx + 4]
    alpha = sa / 255.0
    inv_alpha = 1.0 - alpha
    dst[idx] = int(sr * alpha + dr * inv_alpha)
    dst[idx + 1] = int(sg * alpha + dg * inv_alpha)
    dst[idx + 2] = int(sb * alpha + db * inv_alpha)
    dst[idx + 3] = int(sa + da * inv_alpha)


def fill_rect(pixels, width, x0, y0, x1, y1, color):
    for y in range(y0, y1):
        for x in range(x0, x1):
            idx = (y * width + x) * 4
            pixels[idx:idx + 4] = bytes(color)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    width, height = 1200, 630
    pixels = bytearray(width * height * 4)

    base_start = (15, 15, 15)
    base_end = (43, 43, 43)
    gold = (201, 150, 100)

    for y in range(height):
        for x in range(width):
            t = (0.6 * x / (width - 1)) + (0.4 * y / (height - 1))
            red = int(base_start[0] * (1 - t) + base_end[0] * t)
            green = int(base_start[1] * (1 - t) + base_end[1] * t)
            blue = int(base_start[2] * (1 - t) + base_end[2] * t)

            dx = (x - width * 0.72) / (width * 0.32)
            dy = (y - height * 0.28) / (height * 0.42)
            glow = max(0.0, 1.0 - math.sqrt(dx * dx + dy * dy)) * 0.28

            idx = (y * width + x) * 4
            pixels[idx:idx + 4] = bytes(
                (
                    min(255, int(red + gold[0] * glow)),
                    min(255, int(green + gold[1] * glow)),
                    min(255, int(blue + gold[2] * glow)),
                    255,
                )
            )

    fill_rect(pixels, width, 90, 84, 350, 96, (*gold, 255))
    fill_rect(pixels, width, width - 350, height - 96, width - 90, height - 84, (*gold, 255))

    for y in range(height):
        for x in range(width):
            if x < 3 or x >= width - 3 or y < 3 or y >= height - 3:
                idx = (y * width + x) * 4
                pixels[idx:idx + 4] = bytes((*gold, 255))

    logo_width, logo_height, logo_pixels = read_png_rgba(LOGO_PATH)
    scale = min(250 / logo_width, 250 / logo_height)
    target_width = max(1, int(logo_width * scale))
    target_height = max(1, int(logo_height * scale))
    resized_logo = bytearray(target_width * target_height * 4)

    for y in range(target_height):
        src_y = min(logo_height - 1, int(y / scale))
        for x in range(target_width):
            src_x = min(logo_width - 1, int(x / scale))
            src_idx = (src_y * logo_width + src_x) * 4
            dst_idx = (y * target_width + x) * 4
            resized_logo[dst_idx:dst_idx + 4] = logo_pixels[src_idx:src_idx + 4]

    panel_x, panel_y = 110, 150
    panel_width, panel_height = 330, 330

    for y in range(panel_y, panel_y + panel_height):
        for x in range(panel_x, panel_x + panel_width):
            inset = min(x - panel_x, panel_x + panel_width - 1 - x, y - panel_y, panel_y + panel_height - 1 - y)
            alpha = 220 if inset > 3 else 255
            blend_pixel(pixels, (y * width + x) * 4, (25, 25, 25, alpha))

    for y in range(panel_y, panel_y + panel_height):
        for x in range(panel_x, panel_x + panel_width):
            on_border = (
                x in (panel_x, panel_x + 1, panel_x + panel_width - 2, panel_x + panel_width - 1)
                or y in (panel_y, panel_y + 1, panel_y + panel_height - 2, panel_y + panel_height - 1)
            )
            if on_border:
                idx = (y * width + x) * 4
                pixels[idx:idx + 4] = bytes((*gold, 255))

    offset_x = panel_x + (panel_width - target_width) // 2
    offset_y = panel_y + (panel_height - target_height) // 2

    for y in range(target_height):
        for x in range(target_width):
            src_idx = (y * target_width + x) * 4
            dst_idx = ((offset_y + y) * width + (offset_x + x)) * 4
            blend_pixel(pixels, dst_idx, resized_logo[src_idx:src_idx + 4])

    for i in range(6):
        center_x = 540 + i * 70
        center_y = 440
        radius = 8
        for y in range(center_y - radius, center_y + radius + 1):
            for x in range(center_x - radius, center_x + radius + 1):
                if 0 <= x < width and 0 <= y < height and (x - center_x) ** 2 + (y - center_y) ** 2 <= radius ** 2:
                    blend_pixel(pixels, (y * width + x) * 4, (*gold, 180))

    write_png_rgba(OUTPUT_PATH, width, height, pixels)
    print(OUTPUT_PATH)


if __name__ == "__main__":
    main()

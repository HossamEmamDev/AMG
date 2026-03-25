/* ===== MAIN.JS ===== */
"use strict";

// ── Navbar scroll ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
  updateBackToTop();
  updateActiveNavLink();
});

// ── Hamburger ──
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinksEl.classList.toggle("open");
});

document.querySelectorAll(".has-dropdown > a").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (window.innerWidth <= 960) {
      e.preventDefault();
      a.parentElement.classList.toggle("open-mobile");
    }
  });
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 960) {
      hamburger.classList.remove("active");
      navLinksEl.classList.remove("open");
    }
  });
});

// ── Back to Top ──
const backToTop = document.getElementById("back-to-top");
function updateBackToTop() {
  backToTop.classList.toggle("show", window.scrollY > 400);
}

// ── Active Nav Link ──
function updateActiveNavLink() {
  const scrollPos = window.scrollY + 120;
  document.querySelectorAll("section[id]").forEach((sec) => {
    const link = document.querySelector(`.nav-links a[href="#${sec.id}"]`);
    if (link) {
      link.classList.toggle(
        "active",
        scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight,
      );
    }
  });
}

// ── Modals ──
function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("open");
    document.body.style.overflow = "";
  }
}

document.querySelectorAll(".modal-overlay").forEach((overlay) => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((m) => {
      m.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
    }
  });
});

// ── Counter animation ──
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else el.textContent = Math.floor(start);
  }, 16);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelectorAll(".stat-num[data-count]").forEach((el) => {
          animateCounter(el, parseInt(el.getAttribute("data-count")));
        });
        statsObserver.disconnect();
      }
    });
  },
  { threshold: 0.4 },
);

const heroStats = document.querySelector(".hero-stats");
if (heroStats) statsObserver.observe(heroStats);

// ── View All Projects button ──
const viewAllBtn = document.getElementById("view-all-projects");
if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    if (typeof renderAllProjects === "function") renderAllProjects();
    openModal("all-projects-modal");
  });
}

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
  }
}

function heroContactCTA() {
  scrollToSection("contact");
  document
    .getElementById("contact-form")
    ?.querySelector("input, textarea")
    ?.focus();
}

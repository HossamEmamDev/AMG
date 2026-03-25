/* ===== WHATSAPP FLOAT WIDGET ===== */

(() => {
  "use strict";

  let whatsappNumber = null;

  // Initialize WhatsApp widget
  function initWhatsappWidget() {
    // Get WhatsApp number from localStorage (dashboard settings)
    const settings = JSON.parse(localStorage.getItem("amg_siteSettings") || "{}");
    whatsappNumber = settings.whatsappNumber || "+201124711154"; // Fallback number

    const floatBtn = document.getElementById("whatsapp-float");
    if (!floatBtn) return;

    // Update href with WhatsApp number
    floatBtn.href = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
    floatBtn.title = `Chat with us on WhatsApp: ${whatsappNumber}`;

    // Show widget after a brief delay
    setTimeout(() => {
      floatBtn.classList.add("ready");
      floatBtn.classList.add("pulse");
    }, 500);

    // Remove pulse animation after 5 seconds
    setTimeout(() => {
      floatBtn.classList.remove("pulse");
    }, 5500);

    // Open WhatsApp in new tab on click
    floatBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(
        `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
          "Hi, I'd like to get in touch with AMG Main Contracting."
        )}`,
        "_blank"
      );
    });
  }

  // Listen for language changes and update widget
  const originalToggleLanguage = window.toggleLanguage;
  if (typeof originalToggleLanguage === "function") {
    window.toggleLanguage = function () {
      originalToggleLanguage.call(this);
      updateWhatsappTooltip();
    };
  }

  function updateWhatsappTooltip() {
    const floatBtn = document.getElementById("whatsapp-float");
    if (floatBtn && whatsappNumber) {
      const currentLang = document.documentElement.getAttribute("data-lang") || "en";
      if (currentLang === "ar") {
        floatBtn.setAttribute("aria-label", `تواصل معنا عبر واتساب: ${whatsappNumber}`);
      } else {
        floatBtn.setAttribute("aria-label", `Chat with us on WhatsApp: ${whatsappNumber}`);
      }
    }
  }

  // Update WhatsApp number when settings are synced from dashboard
  window.addEventListener("storage", (e) => {
    if (e.key === "amg_siteSettings") {
      const settings = JSON.parse(e.newValue || "{}");
      if (settings.whatsappNumber) {
        whatsappNumber = settings.whatsappNumber;
        const floatBtn = document.getElementById("whatsapp-float");
        if (floatBtn) {
          floatBtn.href = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
          updateWhatsappTooltip();
        }
      }
    }
  });

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWhatsappWidget);
  } else {
    initWhatsappWidget();
  }
})();

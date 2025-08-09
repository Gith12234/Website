const path = window.location.pathname;

if (path.endsWith("/") || path.endsWith("index.html")) {
  document.body.style.background = "url('images/aNghvgHCxOgH52XaKRMvGq6kE.webp') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
} else if (path.endsWith("about.html")) {
  document.body.style.background = "url('images/aNghvgHCxOgH52XaKRMvGq6kE.webp') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
} else if (path.endsWith("products.html")) {
  document.body.style.background = "url('images/aNghvgHCxOgH52XaKRMvGq6kE.webp') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
} else if (path.endsWith("contact.html")) {
  document.body.style.background = "url('images/contact-us-concept-icons-such-as-mobile-phone-e-mail-address-chat-global-communication-on-dark-blue-background-for-presentation-web-banner-article-business-and-network-connection-and-company-free-vector.jpg') no-repeat center center fixed";
  document.body.style.backgroundSize = "cover";
} else {
  document.body.style.background = "url('images/aNghvgHCxOgH52XaKRMvGq6kE.webp') no-repeat center center fixed"; // Fallback for unknown pages
  document.body.style.backgroundSize = "cover";
}


  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundPosition = "center";
    window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("whatsapp-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const cameFromProducts = document.referrer.includes("products.html");
    const productStored = localStorage.getItem("selectedProduct");
    const alreadyVisited = sessionStorage.getItem("contactPageLoaded");

    // === MAIN LOGIC ===
    if (!cameFromProducts && !alreadyVisited) {
      // Opened contact.html directly (first load)
      localStorage.removeItem("selectedProduct");
    }

    // Mark that the contact page has been visited once
    sessionStorage.setItem("contactPageLoaded", "true");

    // === FORM SUBMIT ===
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const product = localStorage.getItem("selectedProduct");

      let message = `Name: ${name}%0AEmail: ${email}`;
      if (product) {
        message += `%0AMessage: I want to inquire about ${product}`;
      }

      const whatsappURL = `https://wa.me/923348033319?text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  });





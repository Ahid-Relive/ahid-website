const featureTitle = document.getElementById("feature-title");
const featureList = document.getElementById("feature-list");
const featureButtons = document.querySelectorAll("[data-feature]");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const policyTitle = document.getElementById("policy-title");
const policyMeta = document.getElementById("policy-meta");
const policyIntro = document.getElementById("policy-intro");
const policyContainer = document.getElementById("policy-content");
const navWrap = document.querySelector(".nav-wrap");
const navToggle = document.querySelector(".nav-toggle");
const navBackdrop = document.querySelector(".nav-backdrop");

const featureContent = {
  users: {
    title: "Ahid empowers users to discover and connect with trusted brands nearby",
    items: [
      "Discover verified brands near you.",
      "View galleries of products and services.",
      "Explore by category and proximity.",
      "Trust verified marks with confidence.",
    ],
  },
  brands: {
    title: "Ahid helps brands get discovered and build trust with local customers",
    items: [
      "Showcase your business with a trusted profile.",
      "Reach people searching by category and location.",
      "Track engagement and customer interest.",
      "Earn visibility through verification.",
    ],
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderPolicyBlock(block) {
  if (block.type === "subheading") {
    return `<h3>${escapeHtml(block.text)}</h3>`;
  }

  if (block.type === "list") {
    return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  return `<p>${escapeHtml(block.text)}</p>`;
}

function renderPrivacyPolicy() {
  const data = window.AHID_POLICY_DATA;

  if (!policyContainer || !policyTitle || !policyMeta || !policyIntro || !data) {
    return;
  }

  policyTitle.textContent = data.title ?? "Ahid Privacy Policy";
  policyMeta.textContent = `Effective Date: ${data.effectiveDate ?? ""} | Last Updated: ${data.lastUpdated ?? ""}`;
  policyIntro.innerHTML = (data.intro ?? [])
    .map((paragraph) => `<p class="policy-intro">${escapeHtml(paragraph)}</p>`)
    .join("");

  policyContainer.innerHTML = (data.sections ?? [])
    .map((section) => {
      const blocks = (section.blocks ?? []).map(renderPolicyBlock).join("");

      return `
        <section class="policy-section">
          <h2>${escapeHtml(section.heading)}</h2>
          ${blocks}
        </section>
      `;
    })
    .join("");
}

function setFeature(mode) {
  const config = featureContent[mode] ?? featureContent.users;

  featureTitle.textContent = config.title;
  featureList.innerHTML = config.items.map((item) => `<p>${item}</p>`).join("");

  featureButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.feature === mode);
  });
}

function setupFaqAccordion() {
  const faqItems = Array.from(document.querySelectorAll(".faq-list details"));

  if (!faqItems.length) {
    return;
  }

  let foundOpen = false;
  faqItems.forEach((item) => {
    if (item.hasAttribute("open") && !foundOpen) {
      foundOpen = true;
      return;
    }

    item.removeAttribute("open");
  });

  faqItems.forEach((item) => {
    const summary = item.querySelector("summary");
    if (!summary) {
      return;
    }

    summary.addEventListener("click", (event) => {
      event.preventDefault();

      const isOpen = item.hasAttribute("open");

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.removeAttribute("open");
        }
      });

      if (isOpen) {
        item.removeAttribute("open");
      } else {
        item.setAttribute("open", "");
      }
    });
  });
}

function setupMobileNavigation() {
  if (!navWrap || !navToggle) {
    return;
  }

  const navLinks = navWrap.querySelectorAll("nav a");
  const closeMenu = () => {
    navWrap.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("nav-locked");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navWrap.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("nav-locked", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMenu);
  }

  document.addEventListener("click", (event) => {
    if (!navWrap.contains(event.target)) {
      closeMenu();
    }
  });
}

if (featureTitle && featureList && featureButtons.length) {
  featureButtons.forEach((button) => {
    button.addEventListener("click", () => setFeature(button.dataset.feature));
  });
}

if (newsletterForm && newsletterEmail) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = newsletterEmail.value.trim();
    if (!value) {
      newsletterEmail.focus();
      newsletterEmail.setAttribute("aria-invalid", "true");
      return;
    }

    newsletterEmail.removeAttribute("aria-invalid");
    newsletterEmail.value = "";
    window.alert("Thanks. Your email has been captured for the newsletter.");
  });
}

renderPrivacyPolicy();
setupFaqAccordion();
setupMobileNavigation();

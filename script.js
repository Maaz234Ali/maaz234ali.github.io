// Smooth scrolling for internal links
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    e.preventDefault();
    targetEl.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Navbar background on scroll
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (!nav) return;
  const scrolled = window.scrollY > 40;
  nav.style.background = scrolled ? "rgba(15, 23, 42, 0.98)" : "rgba(15, 23, 42, 0.7)";
});

// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Scroll reveal animations
const revealEls = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealEls.forEach((el) => revealObserver.observe(el));

// Typing effect for roles
const typingSpan = document.querySelector(".typing");
const typingData = typingSpan ? typingSpan.getAttribute("data-typing") : null;

if (typingSpan && typingData) {
  const roles = JSON.parse(typingData.replace(/'/g, '"'));
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const typeSpeed = 90;
  const deleteSpeed = 60;
  const delayBetweenWords = 1200;

  const type = () => {
    const current = roles[roleIndex % roles.length];

    if (!deleting) {
      typingSpan.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        setTimeout(() => {
          deleting = true;
        }, delayBetweenWords);
      }
    } else {
      typingSpan.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        roleIndex++;
      }
    }

    const delay = deleting ? deleteSpeed : typeSpeed;
    setTimeout(type, delay);
  };

  type();
}


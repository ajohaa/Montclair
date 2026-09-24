// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const heroVideo = document.querySelector(".hero-video video");
const videoPlay = document.querySelector(".video-play");

if (heroVideo && videoPlay) {
  videoPlay.addEventListener("click", () => heroVideo.play());
  heroVideo.addEventListener("play", () => videoPlay.classList.add("is-hidden"));
  heroVideo.addEventListener("pause", () => videoPlay.classList.remove("is-hidden"));
  heroVideo.addEventListener("ended", () => videoPlay.classList.remove("is-hidden"));
}

// Simple "Why MSU" text carousel (homepage only)
const carousel = document.getElementById("campusCarousel");

if (carousel) {
  const slides = carousel.querySelectorAll(".carousel-slide");
  const dots = carousel.querySelectorAll(".carousel-dots button");
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  let index = 0;

  function goTo(i) {
    slides[index].classList.remove("active");
    dots[index].classList.remove("active");
    index = (i + slides.length) % slides.length;
    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => goTo(i)));
}

// Reveal cards as they scroll into view (spotlight + life-card grids only)
const revealEls = document.querySelectorAll(".reveal");

if (revealEls.length) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
}
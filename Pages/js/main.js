document.addEventListener("DOMContentLoaded", () => {

  // Scroll Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  });

  // Dark Mode Toggle
  const btn = document.querySelector(".theme-toggle");

  if (btn) {

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      btn.textContent = "☀️";
    }

    btn.addEventListener("click", () => {

      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btn.textContent = "☀️";
      } else {
        localStorage.setItem("theme", "light");
        btn.textContent = "🌙";
      }

    });

  }

  // Booking Price Calculator
  const peopleInput = document.getElementById("people");
  const daysInput = document.getElementById("days");
  const totalPrice = document.getElementById("totalPrice");

  if (peopleInput && daysInput) {

    function calculatePrice() {
      const people = peopleInput.value;
      const days = daysInput.value;

      const pricePerDay = 120;
      const total = people * days * pricePerDay;

      totalPrice.textContent = "$" + total;
    }

    peopleInput.addEventListener("input", calculatePrice);
    daysInput.addEventListener("input", calculatePrice);
  }

  // Animated Counters
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;

      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }

    };

    updateCounter();
  });
  const filterButtons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".activities .card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

});

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");

  if (menuToggle) {
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

});
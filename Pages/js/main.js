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

const toggle = document.querySelector(".theme-toggle");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

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
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }

  };

  updateCounter();

});
/**
 * Paradise Island — main.js
 * All site-wide JavaScript in one organised file.
 * Sections:
 *   1. Page Transition
 *   2. Scroll Progress Bar
 *   3. Dark Mode Toggle
 *   4. Animated Counters
 *   5. Scroll Reveal Animation
 *   6. Activity Filter
 *   7. Hero Image Slider
 *   8. Mobile Menu Toggle (About nav)
 *   9. Active Nav Link Highlight (Destination sticky nav)
 *  10. Custom Cursor Glow
 *  11. Booking Price Calculator
 *  12. Booking Success Popup
 */

document.addEventListener("DOMContentLoaded", () => {

  /*
     1. PAGE TRANSITION
  */
  const page = document.querySelector(".page-transition");
  if (page) {
    // Fade in on load
    page.classList.add("loaded");

    // Fade out before navigating away
    document.querySelectorAll("a[href]").forEach(link => {
      const url = link.getAttribute("href");
      if (!url.startsWith("#") && !url.startsWith("mailto") && !url.startsWith("tel")) {
        link.addEventListener("click", e => {
          e.preventDefault();
          page.classList.remove("loaded");
          setTimeout(() => { window.location.href = url; }, 300);
        });
      }
    });
  }


  /*
     2. SCROLL PROGRESS BAR
  */
  const progressBar = document.querySelector(".scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", () => {
      const scrollTop  = document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      progressBar.style.width = ((scrollTop / scrollable) * 100) + "%";
    }, { passive: true });
  }


  /*
     3. DARK MODE TOGGLE
  */
  const themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    // Restore saved preference
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      themeBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }


  /*
     4. ANIMATED COUNTERS
  */
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.textContent = "0";
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    const updateCounter = () => {
      const current = +counter.textContent;
      if (current < target) {
        counter.textContent = Math.ceil(current + increment);
        setTimeout(updateCounter, 30);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    updateCounter();
  });


  /*
     5. SCROLL REVEAL ANIMATION
  */
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    const checkReveal = () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", checkReveal, { passive: true });
    checkReveal(); // Run once on load in case elements are already visible
  }


  /*
     6. ACTIVITY FILTER
  */
  const filterButtons = document.querySelectorAll("[data-filter]");
  const activityCards = document.querySelectorAll(".activities .card");

  if (filterButtons.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        activityCards.forEach(card => {
          card.style.display = (filter === "all" || card.dataset.category === filter)
            ? "block"
            : "none";
        });
      });
    });
  }


  /*
     7. HERO IMAGE SLIDER
  */
  const hero = document.querySelector(".hero");
  if (hero) {
    const images = [
      "Multimedia/tropical-beach.jpg",
      "Multimedia/hero-beach.jpg",
      "Multimedia/snorkeling-tour.jpg"
    ];
    // Preload all slider images
images.forEach(src => { new Image().src = src; });
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      hero.style.background =
        `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${images[index]}') center/cover no-repeat`;
    }, 5000);
  }


  /*
     8. MOBILE MENU TOGGLE (About-style nav)
  */
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    const navLinks = document.querySelector(".nav-links");
    if (navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
      });
    }
  }


  /*
     9. ACTIVE NAV LINK HIGHLIGHT (Destination page)
  */
  const sections     = document.querySelectorAll("section[id], h2[id]");
  const stickyLinks  = document.querySelectorAll(".navbar .nav-link");

  if (sections.length && stickyLinks.length) {
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.getAttribute("id") || "";
        }
      });
      stickyLinks.forEach(link => {
        link.classList.remove("active");
        if (current && link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    }, { passive: true });
  }


  /*
     10. CUSTOM CURSOR GLOW
  */
  const cursor = document.querySelector(".cursor-glow");
  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top  = e.clientY + "px";
    });
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("active"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });
  }


/* 11. BOOKING PRICE CALCULATOR + DATE PICKER */
const checkinInput  = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const peopleInput   = document.getElementById("people");
const daysInput     = document.getElementById("days");
const totalPrice    = document.getElementById("totalPrice");

// Set minimum date to today
if (checkinInput && checkoutInput) {
  const today = new Date().toISOString().split("T")[0];
  checkinInput.min  = today;
  checkoutInput.min = today;

  // When check-in changes, update check-out minimum and recalculate
  checkinInput.addEventListener("change", () => {
    checkoutInput.min = checkinInput.value;

    // If checkout is before checkin, reset it
    if (checkoutInput.value && checkoutInput.value < checkinInput.value) {
      checkoutInput.value = "";
      if (daysInput) daysInput.value = "";
    }
    calculateDays();
  });

  checkoutInput.addEventListener("change", () => {
    calculateDays();
  });
}

function calculateDays() {
  if (!checkinInput?.value || !checkoutInput?.value) return;
  const start = new Date(checkinInput.value);
  const end   = new Date(checkoutInput.value);
  const diff  = Math.round((end - start) / (1000 * 60 * 60 * 24));
  if (daysInput && diff > 0) {
    daysInput.value = diff;
    calculatePrice();
  }
}

if (peopleInput && daysInput && totalPrice) {
  const PRICE_PER_DAY = 120;
  const calculatePrice = () => {
    const people = Math.max(0, +peopleInput.value || 0);
    const days   = Math.max(0, +daysInput.value   || 0);
    totalPrice.textContent = "$" + (people * days * PRICE_PER_DAY).toLocaleString();
  };
  // Make calculatePrice accessible outside this block
  window._calcPrice = calculatePrice;
  peopleInput.addEventListener("input", calculatePrice);
  daysInput.addEventListener("input", calculatePrice);
}

function calculatePrice() {
  if (window._calcPrice) window._calcPrice();
}


  /*
     12. BOOKING SUCCESS POPUP
  */
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    bookingForm.addEventListener("submit", e => {
      e.preventDefault();
      const popup = document.getElementById("bookingPopup");
      if (popup) popup.classList.add("show");
    });
  }

}); // end DOMContentLoaded


/*
   GLOBAL: Close Popup (called from inline onclick)
============================================= */
function closePopup() {
  const popup = document.getElementById("bookingPopup");
  if (popup) popup.classList.remove("show");
}
function closeChatModal() {
  document.getElementById('chatModal').style.display = 'none';
  document.getElementById('chatSuccess').style.display = 'none';
  document.getElementById('chatMsg').value = '';
}
function sendChatMsg() {
  const msg = document.getElementById('chatMsg').value.trim();
  if (!msg) {
    document.getElementById('chatMsg').style.borderColor = 'red';
    return;
  }

  document.getElementById('chatMsg').style.borderColor = '#ddd';
  document.getElementById('chatSendBtn').disabled = true;
  document.getElementById('chatSendBtn').innerText = 'Sending...';

fetch('https://7y0wt49o02.execute-api.us-east-1.amazonaws.com/prod/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: msg })
})
.then(res => res.json())
.then(data => {
  if (data.status === 'success') {
    document.getElementById('chatSuccess').style.display = 'block';
    document.getElementById('chatMsg').value = '';
  }
})
.catch(err => {
  alert('Something went wrong. Please try again.');
  console.error('Chat error:', err);
})
.finally(() => {
  document.getElementById('chatSendBtn').disabled = false;
  document.getElementById('chatSendBtn').innerText = 'Send message';
});
}
/* 16. LIVE WEATHER WIDGET */
async function loadWeather() {
  const icon    = document.getElementById("weatherIcon");
  const temp    = document.getElementById("weatherTemp");
  const desc    = document.getElementById("weatherDesc");
  const humidity = document.getElementById("weatherHumidity");
  const wind    = document.getElementById("weatherWind");
  const feels   = document.getElementById("weatherFeels");

  if (!temp) return; // Only run on pages with the widget

  try {
    // Open-Meteo free API — no API key needed
    // Nassau, Bahamas coordinates: 25.0480° N, 77.3554° W
    const geoRes  = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=25.048&longitude=-77.355&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&wind_speed_unit=kmh&timezone=America%2FNew_York"
    );
    const data    = await geoRes.json();
    const current = data.current;

    const weatherIcons = {
      0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
      45: "🌫️", 48: "🌫️",
      51: "🌦️", 53: "🌦️", 55: "🌧️",
      61: "🌧️", 63: "🌧️", 65: "🌧️",
      71: "🌨️", 73: "🌨️", 75: "❄️",
      80: "🌦️", 81: "🌧️", 82: "⛈️",
      95: "⛈️", 96: "⛈️", 99: "⛈️"
    };

    const weatherDescs = {
      0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
      45: "Foggy", 48: "Icy Fog",
      51: "Light Drizzle", 53: "Drizzle", 55: "Heavy Drizzle",
      61: "Light Rain", 63: "Rain", 65: "Heavy Rain",
      71: "Light Snow", 73: "Snow", 75: "Heavy Snow",
      80: "Rain Showers", 81: "Heavy Showers", 82: "Violent Showers",
      95: "Thunderstorm", 96: "Thunderstorm", 99: "Heavy Thunderstorm"
    };

    const code = current.weather_code;

    if (icon)     icon.textContent     = weatherIcons[code]  || "🌡️";
    if (temp)     temp.textContent     = Math.round(current.temperature_2m) + "°C";
    if (desc)     desc.textContent     = weatherDescs[code]  || "Clear";
    if (humidity) humidity.textContent = current.relative_humidity_2m + "%";
    if (wind)     wind.textContent     = Math.round(current.wind_speed_10m) + " km/h";
    if (feels)    feels.textContent    = Math.round(current.apparent_temperature) + "°C";

  } catch (err) {
    if (temp) temp.textContent = "N/A";
    if (desc) desc.textContent = "Weather unavailable";
    console.error("Weather fetch failed:", err);
  }
}

loadWeather();
/* 17. CURRENCY CONVERTER */
async function loadCurrencyConverter() {
  const spinner      = document.getElementById("converterSpinner");
  const content      = document.getElementById("converterContent");
  const amountInput  = document.getElementById("convertAmount");
  const currencySelect = document.getElementById("convertCurrency");
  const output       = document.getElementById("converterOutput");
  const rateEl       = document.getElementById("converterRate");

  if (!amountInput) return;

  let rates = {};

  try {
    const res  = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await res.json();
    rates = data.rates;

    const convert = () => {
      const amount   = parseFloat(amountInput.value) || 0;
      const currency = currencySelect.value;
      const rate     = rates[currency];
      if (!rate) return;
      const result = (amount * rate).toFixed(2);
      const symbol = new Intl.NumberFormat("en", {
        style: "currency", currency
      }).format(result);
      output.textContent = symbol;
      rateEl.textContent = `1 USD = ${rate.toFixed(4)} ${currency}`;
    };

    amountInput.addEventListener("input", convert);
    currencySelect.addEventListener("change", convert);
    convert();

    // Hide spinner, show content
    if (spinner) spinner.style.display = "none";
    if (content) content.style.display = "block";

    showToast("✅ Live exchange rates loaded!", "success");

  } catch (err) {
    if (spinner) spinner.style.display = "none";
    if (output)  output.textContent  = "Unavailable";
    if (rateEl)  rateEl.textContent  = "Could not fetch live rates";
    if (content) content.style.display = "block";
    showToast("⚠️ Could not load exchange rates", "error");
    console.error("Currency fetch failed:", err);
  }
}

loadCurrencyConverter();
/* 20. ACTIVITY SEARCH BAR */
const searchInput = document.getElementById("activitySearch");
const searchClear = document.getElementById("searchClear");
const searchCards = document.querySelectorAll(".activities .card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();

    // Show/hide clear button
    searchClear.style.display = query ? "flex" : "none";

    searchCards.forEach(card => {
      const title = card.querySelector("h4")?.textContent.toLowerCase() || "";
      const category = card.dataset.category?.toLowerCase() || "";
      const match = title.includes(query) || category.includes(query);

      card.style.display = match ? "block" : "none";
    });

    // Reset filter buttons when searching
    if (query) {
      document.querySelectorAll("[data-filter]").forEach(btn => {
        btn.classList.remove("active");
      });
    }
  });

  searchClear?.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    searchCards.forEach(card => card.style.display = "block");
    document.querySelector("[data-filter='all']")?.classList.add("active");
    searchInput.focus();
  });
}


/* 18. AVAILABILITY CALENDAR */
const bookedDates = [
  "2026-04-05", "2026-04-06", "2026-04-07",
  "2026-04-12", "2026-04-13",
  "2026-04-20", "2026-04-21", "2026-04-22", "2026-04-23",
  "2026-05-01", "2026-05-02",
  "2026-05-10", "2026-05-11", "2026-05-12",
];

let calDate     = new Date();
let selectedDate = null;

function renderCalendar() {
  const title   = document.getElementById("calTitle");
  const daysEl  = document.getElementById("calDays");
  const infoEl  = document.getElementById("calSelected");

  if (!daysEl) return;

  const year  = calDate.getFullYear();
  const month = calDate.getMonth();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  title.textContent = calDate.toLocaleString("default", { month: "long", year: "numeric" });

  const firstDay   = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  daysEl.innerHTML = "";

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.classList.add("cal-day", "empty");
    daysEl.appendChild(empty);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const cellDate = new Date(year, month, d);
    const isPast   = cellDate < today;
    const isBooked = bookedDates.includes(dateStr);
    const isSelected = selectedDate === dateStr;

    const cell = document.createElement("div");
    cell.classList.add("cal-day");
    cell.textContent = d;

    if (isPast)     cell.classList.add("past");
    else if (isBooked) cell.classList.add("booked");
    else            cell.classList.add("available");

    if (isSelected) cell.classList.add("selected");

    if (!isPast && !isBooked) {
      cell.addEventListener("click", () => {
        selectedDate = dateStr;
        if (infoEl) {
          infoEl.textContent = `✅ Selected: ${cellDate.toLocaleDateString("en-IE", {
            weekday: "long", day: "numeric", month: "long", year: "numeric"
          })}`;
        }
        // Sync with booking form date pickers
        const checkin = document.getElementById("checkin");
        if (checkin) checkin.value = dateStr;
        renderCalendar();
      });
    }

    daysEl.appendChild(cell);
  }
}

const calPrev = document.getElementById("calPrev");
const calNext = document.getElementById("calNext");

if (calPrev && calNext) {
  calPrev.addEventListener("click", () => {
    calDate.setMonth(calDate.getMonth() - 1);
    renderCalendar();
  });
  calNext.addEventListener("click", () => {
    calDate.setMonth(calDate.getMonth() + 1);
    renderCalendar();
  });
  renderCalendar();
}
/* 19. TOAST NOTIFICATIONS */
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.classList.add("toast", `toast-${type}`);
  toast.textContent = message;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => toast.classList.add("show"));

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}
# 🌴 Paradise Island

[![CI](https://github.com/Karthiktm28/paradise-island/actions/workflows/docker-build.yml/badge.svg)](https://github.com/Karthiktm28/paradise-island/actions/workflows/docker-build.yml)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://hub.docker.com/r/karthiktm/paradise-island)
[![GitHub stars](https://img.shields.io/github/stars/Karthiktm28/paradise-island?style=social)](https://github.com/Karthiktm28/paradise-island)

A modern static travel website for **Paradise Island, Bahamas** — built with **HTML5 + SCSS**, containerized with **Docker**, and deployed automatically via **CI/CD with GitHub Actions**.

---

## ✨ Features

- 🏝️ Multi-page travel site (Home, Destinations, Booking, Contact, Expenses)
- 🎨 SCSS architecture with variables, components, layout, and theme partials
- 🌙 Dark / Light mode toggle with localStorage persistence
- 📊 Animated counters, scroll reveal, and hero image slider
- 🧾 Dynamic booking price calculator
- 🗺️ Embedded Google Maps and video media
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚡ Page transition animations and scroll progress bar
- 🐳 Dockerized with Nginx for production serving
- 🔁 GitHub Actions CI/CD pipeline for automated Docker Hub publishing

---

## 🗂️ Project Structure

```
paradise-island/
│
├── .github/
│   └── workflows/
│       └── docker-build.yml       # CI/CD pipeline
│
├── Multimedia/                    # Images, video, SVG assets
│   ├── hero-beach.jpg
│   ├── tropical-beach.jpg
│   ├── Paradise-Island-snorkeling-tours-3.jpg
│   ├── snorkeling-tour.jpg
│   ├── up-arrow.png
│   ├── new_cn_logo.svg
│   └── 72442-543260631_medium.mp4
│
├── Pages/                         # All website pages
│   ├── js/
│   │   └── main.js                # All site JavaScript (12 modules)
│   ├── scss/
│   │   ├── style.scss             # Main entry point
│   │   ├── _variables.scss        # Design tokens
│   │   ├── _base.scss             # Reset & typography
│   │   ├── _layout.scss           # Page structure & sections
│   │   ├── _navbar.scss           # Navigation styles
│   │   ├── _components.scss       # Reusable UI components
│   │   └── _theme.scss            # Dark mode overrides
│   ├── About.html                 # Home page
│   ├── Destination.html           # Destinations page
│   ├── Booking.html               # Booking form
│   ├── Form.html                  # Contact form
│   ├── Tableofexpens.html         # Expense details
│   └── style.css                  # Compiled CSS
│
├── .gitignore
├── docker-compose.yml             # Development environment
├── Dockerfile                     # Production image
├── Dockerfile.prod                # Optimised production build
└── README.md
```

---

## 🚀 Live Development Stack

| Tool | Purpose |
|------|---------|
| HTML5 | Page structure and content |
| SCSS | Modular, maintainable styling |
| JavaScript (Vanilla) | Interactivity and animations |
| Docker | Containerised development & production |
| Nginx | Static file server inside container |
| BrowserSync | Live reload during development |
| GitHub Actions | Automated CI/CD pipeline |
| Docker Hub | Container image registry |

---

## 🔁 CI/CD Pipeline

```
Developer
    │
    │  git push
    ▼
GitHub Repository
    │
    │  Triggers GitHub Actions
    ▼
GitHub Actions (CI Pipeline)
    │
    │  Build Docker Image
    ▼
Docker Hub
    │
    │  Image Published
    ▼
Docker Container
    │
    │  Nginx Serves Files
    ▼
Paradise Island Website
```

---

## 🐳 Run with Docker

**Pull and run the production image:**

```bash
docker run -p 8080:80 karthiktm/paradise-island:latest
```

Then open [http://localhost:8080/Pages/About.html](http://localhost:8080/Pages/About.html)

---

## 🛠️ Development Setup

**Clone the repository:**

```bash
git clone https://github.com/Karthiktm28/paradise-island.git
cd paradise-island
```

**Run the development environment with Docker Compose:**

```bash
docker compose up
```

This starts a live-reload server — any file changes are instantly reflected in the browser.

**Compile SCSS manually (if not using Docker):**

```bash
sass Pages/scss/style.scss Pages/style.css --watch
```

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `About.html` | Hero section, animated stats counter |
| Destinations | `Destination.html` | Island overview, activities, map, video |
| Booking | `Booking.html` | Booking form with price calculator |
| Contact | `Form.html` | Contact / login form |
| Expenses | `Tableofexpens.html` | Accommodation cost breakdown table |

---

## 🧩 JavaScript Modules (`main.js`)

| # | Module | Description |
|---|--------|-------------|
| 1 | Page Transition | Fade in/out between pages |
| 2 | Scroll Progress Bar | Fixed top progress indicator |
| 3 | Dark Mode Toggle | Theme switch with localStorage |
| 4 | Animated Counters | Number count-up on load |
| 5 | Scroll Reveal | Elements animate in on scroll |
| 6 | Activity Filter | Filter cards by category |
| 7 | Hero Image Slider | Auto-rotating background images |
| 8 | Mobile Menu Toggle | Hamburger nav for small screens |
| 9 | Active Nav Highlight | Highlights current section in navbar |
| 10 | Custom Cursor Glow | Glowing cursor effect |
| 11 | Price Calculator | Live booking cost calculation |
| 12 | Booking Popup | Success modal on form submit |

---

## 🎨 SCSS Architecture

```
style.scss
├── _variables.scss   → Colors, gradients, sizes, shadows, fonts
├── _base.scss        → CSS reset, typography, global elements
├── _layout.scss      → Hero, stats, footer, media, containers
├── _navbar.scss      → Bootstrap nav + custom flat nav
├── _components.scss  → Buttons, cards, forms, table, popup
└── _theme.scss       → Dark mode overrides for all components
```

---

## 📦 Build for Production

```bash
docker build -f Dockerfile.prod -t paradise-island:prod .
docker run -p 80:80 paradise-island:prod
```

---

## 📝 License

This project is for educational purposes.

---

> Built with 🌊 by [Karthik TM](https://github.com/Karthiktm28)
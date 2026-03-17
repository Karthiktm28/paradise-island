# 🌴 Paradise Island

[![CI](https://github.com/Karthiktm28/paradise-island/actions/workflows/docker-build.yml/badge.svg)](https://github.com/Karthiktm28/paradise-island/actions/workflows/docker-build.yml)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://hub.docker.com/r/karthiktm/paradise-island)
[![AWS Lambda](https://img.shields.io/badge/AWS-Lambda-orange?logo=amazonaws)](https://aws.amazon.com/lambda/)
[![AWS SES](https://img.shields.io/badge/AWS-SES-orange?logo=amazonaws)](https://aws.amazon.com/ses/)
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://karthiktm28.github.io/paradise-island/)

A modern, full-stack travel website for **Paradise Island, Bahamas** — built with **HTML5 + SCSS**, integrated with **AWS serverless services**, containerised with **Docker**, and deployed automatically via **CI/CD with GitHub Actions**.

🔗 **Live Site:** https://karthiktm28.github.io/paradise-island/

---

## ✨ Features

- 🏝️ Multi-page travel site (Home, Destinations, Booking, Contact, Expenses)
- 🎨 SCSS architecture with variables, components, layout, and theme partials
- 🌙 Dark / Light mode toggle
- 📊 Animated counters, scroll reveal, and hero image slider
- 🧾 Dynamic booking price calculator
- 🗺️ Embedded Google Maps and video media
- 📱 Fully responsive — mobile, tablet, and desktop
- ⚡ Page transition animations and scroll progress bar
- 💬 Serverless contact form via AWS Lambda + API Gateway + SES
- 📋 Message storage via Google Sheets (Google Apps Script)
- 🐳 Dockerised with Nginx for production serving
- 🔁 GitHub Actions CI/CD pipeline for automated Docker Hub publishing

---

## ☁️ AWS Serverless Architecture

Messages submitted via the chat popup are processed through a fully serverless AWS pipeline:
```
User submits message (Frontend)
        │
        │  HTTP POST (fetch API)
        ▼
AWS API Gateway
(REST endpoint: POST /contact)
        │
        │  Triggers
        ▼
AWS Lambda Function
(paradiseIslandContact — Node.js 20.x)
        │
        │  SendEmailCommand
        ▼
AWS SES (Simple Email Service)
        │
        │  Delivers email
        ▼
Gmail Inbox (site owner notified)
        │
        ▼
Google Sheets (message stored with timestamp)
```

### AWS Services Used

| Service | Purpose |
|---------|---------|
| AWS Lambda | Serverless function to process form submissions |
| AWS API Gateway | HTTP endpoint to receive POST requests from frontend |
| AWS SES | Sends email notifications to site owner |
| IAM | Role-based permissions for Lambda to access SES |

---

## 💬 Contact Form Flow

1. User types a message in the chat popup on the website
2. JavaScript sends a POST request to the API Gateway endpoint
3. API Gateway triggers the Lambda function
4. Lambda uses AWS SES to send an email notification
5. Message is also saved to Google Sheets via Google Apps Script

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
│
├── Pages/                         # All website pages
│   ├── js/
│   │   └── main.js                # All site JavaScript
│   ├── scss/
│   │   ├── style.scss             # Main entry point
│   │   ├── _variables.scss        # Design tokens
│   │   ├── _base.scss             # Reset & typography
│   │   ├── _layout.scss           # Page structure & sections
│   │   ├── _navbar.scss           # Navigation styles
│   │   ├── _components.scss       # Reusable UI components
│   │   └── _theme.scss            # Dark mode overrides
│   ├── index.html                 # Home / Destinations page
│   ├── About.html                 # About page
│   ├── Booking.html               # Booking form
│   ├── Form.html                  # Contact form
│   ├── Tableofexpenses.html       # Expense details
│   └── style.css                  # Compiled CSS
│
├── index.html                     # Root redirect for GitHub Pages
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
| JavaScript (Vanilla) | Interactivity, animations, API calls |
| AWS Lambda | Serverless backend function |
| AWS API Gateway | REST API endpoint |
| AWS SES | Email delivery service |
| Google Apps Script | Message storage to Google Sheets |
| Docker | Containerised development & production |
| Nginx | Static file server inside container |
| GitHub Actions | Automated CI/CD pipeline |
| Docker Hub | Container image registry |
| GitHub Pages | Free static site hosting |

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
Docker Container (Nginx)
    │
    │  Serves static files
    ▼
Paradise Island Website (Live)
```

---

## 🐳 Run with Docker

**Pull and run the production image:**
```bash
docker run -p 8080:80 karthiktm/paradise-island:latest
```

Then open: http://localhost:8080/Pages/index.html

---

## 🛠️ Development Setup
```bash
git clone https://github.com/Karthiktm28/paradise-island.git
cd paradise-island
docker compose up
```

**Compile SCSS manually:**
```bash
sass Pages/scss/style.scss Pages/style.css --watch
```

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, animated stats, chat popup |
| About | `About.html` | Island info and culture |
| Booking | `Booking.html` | Booking form with price calculator |
| Contact | `Form.html` | Contact form |
| Expenses | `Tableofexpenses.html` | Accommodation cost breakdown |

---

## 🧩 JavaScript Modules

| Module | Description |
|--------|-------------|
| Page Transition | Fade in/out between pages |
| Scroll Progress Bar | Fixed top progress indicator |
| Dark Mode Toggle | Theme switch |
| Animated Counters | Number count-up on load |
| Scroll Reveal | Elements animate in on scroll |
| Hero Image Slider | Auto-rotating background images |
| Mobile Menu Toggle | Hamburger nav for small screens |
| Price Calculator | Live booking cost calculation |
| Booking Popup | Success modal on form submit |
| Chat Popup | AWS-integrated contact form |

---
## Kubernetes Deployment

The application is production-ready with Kubernetes manifests included.

- 3 replica pods for high availability
- ClusterIP service for internal load balancing
- Horizontal Pod Autoscaler (HPA) — scales 2 to 10 pods based on CPU
- Resource requests and limits defined per container

To deploy to a Kubernetes cluster:
kubectl apply -f k8s/
## 📝 License

This project is for educational and portfolio purposes.

---

> Built with 🌊 by [Karthik TM](https://github.com/Karthiktm28) — MSc Cloud Native Computing, TUS Athlone
```

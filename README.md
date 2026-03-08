![CI](https://github.com/Karthiktm28/paradise-island/actions/workflows/docker-build.yml/badge.svg)

![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)

![GitHub stars](https://img.shields.io/github/stars/Karthiktm28/paradise-island?style=social)

# 🌴 Paradise Island

A modern static travel website built with **HTML + SCSS**, containerized using **Docker**, and automated with **CI/CD using GitHub Actions**.

---

## 🚀 Live Development Stack

- HTML5
- SCSS Architecture
- Docker Development Environment
- BrowserSync Live Reload
- Nginx Static Server
- GitHub Actions CI/CD
- Docker Hub Image Publishing

---

## 🔧 Project Architecture
Yes 👍 — you should paste it, but it must be inside a Markdown code block in your README.md. That ensures GitHub renders it correctly as a diagram.

How to Add It

Open your README.md and include it like this:

## 🔧 Project Architecture

```
Developer
   │
   │ git push
   ▼
GitHub Repository
   │
   ▼
GitHub Actions (CI Pipeline)
   │
   │ Build Docker Image
   ▼
Docker Hub
   │
   ▼
Docker Container
   │
   ▼
Nginx Server
   │
   ▼
Paradise Island Website
```
## 📦 Run the Website with Docker

Pull and run the production image:

```bash
docker run -p 8080:80 karthiktm/paradise-island:latest
```
## 🛠 Development Setup

Run the development environment with Docker Compose:

```bash
docker compose up
```
# Contributing to IEEE SB EMSI Marrakesh Website

Welcome! We're excited that you're interested in contributing to our website. This document provides everything you need to know about the project structure, how to set things up locally, and our development workflow.

## 📦 Project Setup

### 1. Prerequisites
- **Node.js**: [LTS version (e.g., v20+)](https://nodejs.org/)
- **Git**: [Version control](https://git-scm.com/)
- **Imagemagick**: (Recommended for asset optimization) [Download here](https://imagemagick.org/script/download.php)

### 2. Getting Started
```bash
# Clone the repository
git clone https://github.com/ieee-student-branch-emsi-marrakesh/ieee-website.git
cd ieee-website

# Install dependencies
npm install

# Run the development server
npm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/).

---

## 🏗️ Project Structure

```text
├── public/                 # Static assets (favicons, fonts, etc.)
│   └── assets/             # Main weight assets (converted to WebP)
├── scripts/                # Utility scripts (like optimize.sh)
├── src/
│   ├── components/         # Reusable UI components
│   ├── data/               # Configuration and content files (TS/JSON)
│   ├── pages/              # Main route components
│   ├── sections/           # Large sections used in HomePage
│   ├── App.tsx             # Main routing and lazy loading
│   └── main.tsx            # Application entry point
├── tailwind.config.ts      # Styling configuration
└── vite.config.ts          # Build configuration
```

---

## ⚡ Development Guidelines

### 🎨 Design System
We use **Tailwind CSS** and **Shadcn UI**. Please stick to the brand colors defined in `tailwind.config.ts`:
- **IEEE Navy**: `#012169`
- **IEEE Gold**: `#FFB81C`
- **IEEE Blue**: `#00629B`

### 🚀 Optimization (CRITICAL)
Before committing any **new images**, you **MUST** run the optimization script. Our website uses WebP format to maintain high speed.

```bash
# Automatically resize and convert new JPG/PNG assets to WebP
npm run optimize
```

- **Don't** upload raw photos (>2MB).
- **Don't** use JPG/PNG in data files; always reference `.webp`.

### 🔄 Contributing Workflow
1.  **Fork** the repository.
2.  **Create a feature branch** (`git checkout -b feature/amazing-feature`).
3.  **Run `npm run optimize`** if you added new images.
4.  **Lint your code** (`npm run lint`).
5.  **Commit your changes** using [Conventional Commits](https://www.conventionalcommits.org/).
6.  **Push to the branch** (`git push origin feature/amazing-feature`).
7.  **Open a Pull Request**.

---

## 📮 Contact & Support
This repository is primarily maintained by and for the **IT Department** of IEEE S.B EMSI Marrakesh. 

If you've been assigned to work on this project, please coordinate with the **IT Section Manager** or **IT Assistant** for any architectural decisions or major feature additions.

---
title: "Setting Up a Modern Dev Environment in 2026"
date: "2026-02-24"
excerpt: "A walkthrough of the tools, editors, and configs I use for day-to-day development work."
tags: ["tooling", "productivity"]
---

# Setting Up a Modern Dev Environment in 2026

Getting your development environment dialed in can make a huge difference in productivity. Here's a look at the setup I've landed on after lots of experimentation.

## Editor

**VS Code** remains my daily driver. Key extensions I can't live without:

- **GitHub Copilot** — AI-powered code completion
- **ESLint** & **Prettier** — consistent code formatting
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **GitLens** — git blame and history at a glance

## Terminal

I'm currently using **Windows Terminal** with **PowerShell 7**. The combination of:

- Custom prompt with **Oh My Posh**
- **Git** integration
- Split panes for multitasking

makes the terminal feel like a first-class tool.

## Version Control

Git with **conventional commits** has been a game-changer for keeping history clean:

```bash
feat: add user authentication
fix: resolve login redirect loop
docs: update API documentation
```

## Node.js & Package Management

- **Node.js 20 LTS** for stability
- **npm** for package management
- **nvm-windows** for switching Node versions when needed

## Key Takeaways

1. **Invest time in your tools** — it pays dividends every day
2. **Automate repetitive tasks** — linting, formatting, testing
3. **Keep it simple** — don't over-engineer your setup
4. **Document your setup** — helps when onboarding or switching machines

What does your dev environment look like? Everyone's setup is different, and there's always something new to discover.

# Temporary Name

> A modern web application built with React.

---

## 📋 Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Contributing](#contributing)
- [License](#license)

---

## About

**Temporary Name** is an interactive digital rulebook for tabletop RPG players, built with React.

The goal of the project is to offer an easy and accessible way to consult the rules of the game,
with plans to expand functionality and evolve into a fully-featured, professional-looking 
companion site — inspired by platforms like D&D Beyond.

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/cmonrel/temporary-name.git
cd temporary-name
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (Vite) or `http://localhost:3000` (Create React App).

To build for production:

```bash
npm run build
# or
yarn build
```

---

## Contributing

Contributions are welcome! Please read the following guidelines before submitting any changes.

### Workflow

All contributions must go through a **Pull Request**. Direct pushes to `main` are not allowed.

1. **Fork** the repository
2. **Create** a new branch from `main` with a descriptive name:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
3. **Make** your changes and commit them following this format:
   ```bash
   git commit -m "type: short description of the change"
   ```
   Common types: `feat`, `fix`, `docs`, `style`, `refactor`

4. **Push** your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against `main` and fill in the description explaining what you changed and why

### Review process

- All pull requests require **at least one approval** from a code owner before merging
- Code owners will be automatically assigned for review based on the files changed
- Please make sure your code is clean and consistent with the existing style before requesting a review

### Reporting issues

Found a bug or have a suggestion? Open an [issue](https://github.com/cmonrel/temporary-name/issues) and describe it as clearly as possible.

> ⚠️ Please make sure your code follows the existing code style and that all changes go through a Pull Request. Direct pushes to `main` are not allowed.

---

## License

This project is licensed under the [MIT License](LICENSE).

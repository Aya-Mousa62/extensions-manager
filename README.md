# Browser Extension Manager UI

A modern, responsive React-based user interface for managing browser extensions. Built with React, Vite, and Tailwind CSS, this project provides an intuitive way to view, filter, and manage browser extensions with support for both light and dark modes.

## Features

- 🎨 **Modern UI Design** - Clean and intuitive interface
- 🌓 **Dark Mode Support** - Seamless theme switching
- 🔍 **Extension Filtering** - Filter extensions by status (All, Active, Inactive)
- 📱 **Responsive Design** - Works on all device sizes
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎯 **Extension Cards** - Visual display of extension information including logo, name, and description

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Aya-Mousa62/Browser-extension-manager-UI.git
cd Browser-extension-manager-UI
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
Browser-extension-manager-UI/
├── public/
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Card-container.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   ├── design/
│   │   ├── fonts/
│   │   └── images/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── data.json
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Components

- **Header** - Application header with title
- **Filters** - Filter buttons to sort extensions by status
- **Card Container** - Container for extension cards
- **Card** - Individual extension card displaying logo, name, description, and status
- **Button** - Reusable button component
- **Footer** - Credits and attribution

## Data Structure

Extensions are managed through `data.json` with the following structure:

```json
{
  "logo": "./assets/images/logo-example.svg",
  "name": "Extension Name",
  "description": "Extension description",
  "isActive": true
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Developer

**Aya Mousa**
- GitHub: [@Aya-Mousa62](https://github.com/Aya-Mousa62)

## License

This project is open source and available under the MIT License.

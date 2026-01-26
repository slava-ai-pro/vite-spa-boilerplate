# Vite SPA Boilerplate

A modern Single Page Application (SPA) boilerplate built with Vite and React TypeScript.

## Features

- Fast development with Vite's HMR (Hot Module Replacement)
- TypeScript for type safety
- React 18 with modern hooks
- ESLint configuration included
- Optimized production builds

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/slava-ai-pro/vite-spa-boilerplate.git

# Navigate to the project directory
cd vite-spa-boilerplate

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
npm run lint
```

## Project Structure

```
vite-spa-boilerplate/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Main application component
│   ├── App.css      # Application styles
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── vite.config.ts   # Vite configuration
├── tsconfig.json    # TypeScript configuration
└── package.json     # Project dependencies
```

## License

MIT

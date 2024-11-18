# 🎨 Modern Figma Plugin boilerplate

A supercharged Figma plugin boilerplate with React, Tailwind CSS, and shadcn/ui components. Built for developers who want to create beautiful, responsive, and accessible Figma plugins with modern web technologies.

## ✨ Features

- 🚀 **React 18** - Latest React features for building interactive UIs
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🎯 **TypeScript** - Type safety and enhanced developer experience
- 🧩 **shadcn/ui** - High-quality, accessible components built on Radix UI
- 🌓 **Dark Mode** - Built-in dark mode support
- 📦 **Webpack** - Optimized build setup for Figma plugins
- 🔥 **Hot Reload** - Fast development with hot module replacement

## 🚀 Quick Start

1. Clone this repository

```bash
git clone https://github.com/tehfailsafe/figma-react-boilerplate.git
cd figma-react-boilerplate
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

4. In Figma desktop app:
   - Go to `Plugins` > `Development` > `Import plugin from manifest...`
   - Choose the `manifest.json` file from this project

## 🛠️ Development

### Project Structure

```
src/
  ├── components/    # React components
  │   └── ui/       # shadcn/ui components
  ├── styles/       # Global styles and Tailwind config
  ├── App.tsx       # Main React component
  ├── ui.tsx        # Plugin UI entry point
  └── code.ts       # Plugin logic
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready plugin
- `npm run watch` - Watch for changes in development

## 🎨 Customization

### Theming

The boilerplate comes with a beautiful default theme, but you can easily customize it:

1. Modify `src/styles/globals.css` for theme variables
2. Update `tailwind.config.js` for Tailwind configuration
3. Use shadcn/ui components from `src/components/ui/`

### Adding New Components

```bash
# Example: Adding a new shadcn/ui component
npx shadcn-ui@latest add button
```

## 📚 Resources

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📝 License

MIT License - feel free to use this boilerplate for your own plugins!

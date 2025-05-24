---
sidebar_position: 1
---

# Introduction

Tailor is a powerful library for creating styled React components with Tailwind CSS in an organized and typed way. It provides a simple and intuitive API for managing component styles, variants, and responsive design while maintaining full TypeScript support.

## Features

- 🎨 **Type-safe styling** with TypeScript
- 🎯 **Smart class merging** for efficient style management
- 📱 **Responsive design** support out of the box
- 🎭 **Dynamic class generation** based on props
- 🎪 **Nested styles** for complex components
- 🎬 **Animation support** for interactive components

## Installation

```bash
npm install @dennerrondinely/tailor
# or
yarn add @dennerrondinely/tailor
# or
pnpm add @dennerrondinely/tailor
```

## Quick Start

Here's a simple example of how to use Tailor to create a styled button component:

```tsx
import { craft } from '@dennerrondinely/tailor';

interface ButtonProps {
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

const StyledButton = craft(Button)({
  base: 'px-4 py-2 rounded font-medium transition-colors',
  dynamic: {
    'bg-blue-500 text-white': (props) => !props.isActive,
    'bg-green-500 text-white': (props) => props.isActive,
    'hover:opacity-90': (props) => !props.disabled,
    'active:scale-95': (props) => !props.disabled,
    'disabled:opacity-50 disabled:cursor-not-allowed': (props) => props.disabled
  },
  responsive: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }
});

// Usage
<StyledButton isActive={true}>Click me</StyledButton>
```

## Why Tailor?

Tailor was created to solve common challenges when working with Tailwind CSS in React applications:

1. **Type Safety**: Get full TypeScript support for your component props and styles
2. **Organization**: Keep your component styles organized and maintainable
3. **Reusability**: Create reusable styled components with consistent behavior
4. **Performance**: Optimize your bundle size with smart class merging
5. **Developer Experience**: Enjoy a great developer experience with intuitive APIs

## Next Steps

- Check out the [API Reference](/docs/api-reference) for detailed documentation
- Learn about [Advanced Usage](/docs/advanced-usage) for complex components
- Explore [Examples](/docs/examples) to see Tailor in action
- Join our [GitHub Discussions](https://github.com/dennerrondinely/tailor/discussions) to share your ideas and get help

---
sidebar_position: 4
---

# Helper Functions

Tailor provides several helper functions to make styling components easier, more powerful, and more maintainable. Below you will find the main helpers, their purpose, and practical usage examples.

## spinThread

Creates animation classes for your components. Perfect for loading states, transitions, and interactive elements.

```tsx
import { spinThread } from '@dennerrondinely/tailor';

// Basic usage
const spin = spinThread({ type: 'spin' }); // 'animate-spin'

// Advanced usage
const custom = spinThread({
  type: 'pulse',
  duration: '1000',
  delay: '200',
  iteration: 'infinite',
  direction: 'reverse',
  timing: 'ease-in-out'
}); // 'animate-pulse duration-1000 delay-200 infinite reverse ease-in-out'

// Usage in a component
const LoadingSpinner = craft('div')({
  base: spinThread({ type: 'spin', duration: '1000' }),
});
```

---

## stitch

Creates nested styles for child elements within your components using Tailwind's nesting pattern. This allows you to style child elements using Tailwind's modifier syntax, group utilities, and arbitrary selectors.

```tsx
import { stitch } from '@dennerrondinely/tailor';

const Article = craft('article')({
  base: 'prose prose-lg max-w-3xl mx-auto',
  nested: stitch({
    h1: 'font-bold text-3xl mb-4',
    p: 'mb-4 text-gray-700',
    'p > a': 'text-blue-500 hover:text-blue-600 underline',
    ul: 'list-disc list-inside mb-4',
    // ... more selectors
  }),
});
```

---

## tailorFit

Creates responsive styles that adapt to different screen sizes.

```tsx
import { tailorFit } from '@dennerrondinely/tailor';

const responsive = tailorFit({
  sm: 'text-sm p-2',
  md: 'text-base p-4',
  lg: 'text-lg p-6',
  xl: 'text-xl p-8',
  '2xl': 'text-2xl p-10'
});

const ResponsiveContainer = craft('div')({
  base: 'bg-white rounded',
  responsive,
});
```

---

## embroider

Creates interactive state styles (hover, active, focus, disabled) for your components.

```tsx
import { embroider } from '@dennerrondinely/tailor';

const interactive = embroider({
  base: 'px-4 py-2 rounded transition-colors',
  hover: 'hover:bg-blue-600',
  active: 'active:bg-blue-700',
  focus: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed'
});

const InteractiveButton = craft('button')({
  ...interactive,
  base: 'bg-blue-500 text-white'
});
```

---

## When to use each helper?

- **spinThread:** For animations and loading states.
- **stitch:** For complex/nested components, articles, SVGs, or when you need to style child elements.
- **tailorFit:** For responsive layouts and components.
- **embroider:** For interactive states (hover, focus, active, disabled) in buttons, inputs, etc.

Check the [official README](https://github.com/dennerrondinely/tailor?tab=readme-ov-file#helper-functions) for more details and advanced usage. 
---
sidebar_position: 1
---

# Basic Components

Learn how to create simple and reusable components with Tailor. We'll start with the most common components you'll need in your applications.

## Button Component

Let's create a simple button component using Tailor helpers for interactive states and responsiveness:

```tsx
import { craft, embroider, tailorFit } from '@dennerrondinely/tailor';

const buttonStyles = embroider({
  base: 'rounded font-medium transition-colors',
  hover: 'hover:bg-blue-600',
  active: 'active:bg-blue-700',
  focus: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
  disabled: 'disabled:opacity-50 disabled:cursor-not-allowed',
});

const responsive = tailorFit({
  sm: 'text-sm px-3 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
});

const Button = craft('button')({
  ...buttonStyles,
  base: 'bg-blue-500 text-white',
  responsive,
});
```

Usage examples:

```tsx
<Button>Click me</Button>
<Button disabled>Disabled</Button>
<Button style={{ width: 200 }}>Custom width</Button>
```

## Card Component

A simple card component for displaying content:

```tsx
import { craft } from '@dennerrondinely/tailor';

const Card = craft('div')({
  base: 'bg-white rounded-lg shadow p-4',
  nested: {
    header: 'border-b pb-3 mb-3',
    h2: 'text-lg font-semibold text-gray-900',
    div: 'text-gray-600',
    footer: 'border-t pt-3 mt-3',
  },
});

// Exemplo de uso (usando "nested"):
<Card style={{ padding: '1rem' }}> 
  <header>
    <h2>Welcome to Tailor</h2>
  </header>
  <div>
    <p>This is a simple card component created with Tailor.</p>
  </div>
  <footer>
    <Button size="small">Learn More</Button>
  </footer>
</Card>
```
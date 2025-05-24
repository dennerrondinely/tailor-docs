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

```typescript
import { craft } from '@tailor/react';

const Card = craft('div', {
  base: 'bg-white rounded-lg shadow',
  variants: {
    padding: {
      none: '',
      small: 'p-3',
      medium: 'p-4',
      large: 'p-6',
    },
  },
  defaults: {
    padding: 'medium',
  },
});

// Card parts
const CardHeader = craft('div', {
  base: 'border-b pb-3 mb-3',
});

const CardTitle = craft('h3', {
  base: 'text-lg font-semibold text-gray-900',
});

const CardContent = craft('div', {
  base: 'text-gray-600',
});

const CardFooter = craft('div', {
  base: 'border-t pt-3 mt-3',
});
```

Usage example:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Welcome to Tailor</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is a simple card component created with Tailor.</p>
  </CardContent>
  <CardFooter>
    <Button size="small">Learn More</Button>
  </CardFooter>
</Card>
```

## Badge Component

A simple badge component for status indicators:

```typescript
import { craft } from '@tailor/react';

const Badge = craft('span', {
  base: 'inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium',
  variants: {
    variant: {
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
    },
  },
  defaults: {
    variant: 'info',
  },
});
```

Usage examples:

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">New</Badge>
```

## Tips for Component Creation

1. **Start Simple**: Begin with basic styles and add complexity as needed
2. **Use Variants**: Group related styles into variants for better organization
3. **Set Defaults**: Provide sensible default values for your components
4. **Keep it Reusable**: Design components to be flexible and reusable

## Next Steps

- Try creating your own components using these examples
- Explore more complex components in the advanced usage guide
- Learn about theming and customization
- Check out the API reference for more options 
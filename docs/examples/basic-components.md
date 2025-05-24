---
sidebar_position: 1
---

# Basic Components

Learn how to create simple and reusable components with Tailor. We'll start with the most common components you'll need in your applications.

## Button Component

Let's create a simple button component with different styles and sizes:

```typescript
import { craft } from '@tailor/react';

const Button = craft('button', {
  // Base styles that apply to all buttons
  base: 'px-4 py-2 rounded font-medium transition-colors',
  
  // Different button styles
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      danger: 'bg-red-500 text-white hover:bg-red-600',
    },
    // Different button sizes
    size: {
      small: 'text-sm px-3 py-1',
      medium: 'text-base px-4 py-2',
      large: 'text-lg px-6 py-3',
    },
  },
  // Default values
  defaults: {
    intent: 'primary',
    size: 'medium',
  },
});
```

Usage examples:

```tsx
// Basic usage with defaults
<Button>Click me</Button>

// Different styles
<Button intent="primary">Primary Button</Button>
<Button intent="secondary">Secondary Button</Button>
<Button intent="danger">Delete</Button>

// Different sizes
<Button size="small">Small Button</Button>
<Button size="medium">Medium Button</Button>
<Button size="large">Large Button</Button>

// Combining props
<Button intent="primary" size="large">
  Large Primary Button
</Button>
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
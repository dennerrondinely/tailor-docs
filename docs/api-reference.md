---
sidebar_position: 2
---

# API Reference

## `craft(Component)`

Creates a styled version of a React component with Tailwind CSS classes.

### Type Definition

```typescript
function craft<P extends object>(
  Component: React.ComponentType<P>
): (config: CraftConfig<P>) => React.ComponentType<P>;
```

### Parameters

- `Component`: A React component to be styled

### Returns

A function that accepts a configuration object and returns a styled version of the component.

## Configuration Object

The configuration object passed to the `craft` function has the following properties:

### `base`

Base classes that are always applied to the component.

```typescript
base: string;
```

Example:
```tsx
const StyledButton = craft(Button)({
  base: 'px-4 py-2 rounded font-medium transition-colors',
  // ...
});
```

### `dynamic`

An object mapping class names to functions that receive props and return boolean values. Classes are applied when their corresponding function returns `true`.

```typescript
dynamic: {
  [className: string]: (props: P) => boolean;
};
```

Example:
```tsx
const StyledButton = craft(Button)({
  dynamic: {
    'bg-blue-500 text-white': (props) => !props.isActive,
    'bg-green-500 text-white': (props) => props.isActive,
    'hover:opacity-90': (props) => !props.disabled,
  },
  // ...
});
```

### `responsive`

An object mapping breakpoint names to class names. Classes are applied based on the current viewport size.

```typescript
responsive: {
  [breakpoint: string]: string;
};
```

Example:
```tsx
const StyledButton = craft(Button)({
  responsive: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
  // ...
});
```

### `nested`

An object mapping selectors to class names for nested elements within the component.

```typescript
nested: {
  [selector: string]: string;
};
```

Example:
```tsx
const StyledCard = craft(Card)({
  nested: {
    h1: 'text-xl font-bold mb-2',
    p: 'text-gray-600',
    div: 'mt-4 pt-4 border-t',
  },
  // ...
});
```

### `animation`

An object mapping animation names to class names for component animations.

```typescript
animation: {
  [animationName: string]: string;
};
```

Example:
```tsx
const StyledButton = craft(Button)({
  animation: {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
  },
  // ...
});
```

## Usage Examples

### Basic Component

```tsx
const StyledButton = craft(Button)({
  base: 'px-4 py-2 rounded font-medium',
  dynamic: {
    'bg-blue-500 text-white': () => true,
    'hover:bg-blue-600': () => true,
  },
});
```

### Component with Variants

```tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const StyledButton = craft(Button)({
  base: 'rounded font-medium transition-colors',
  dynamic: {
    // Variant styles
    'bg-blue-500 text-white hover:bg-blue-600': (props) => props.variant === 'primary',
    'bg-gray-500 text-white hover:bg-gray-600': (props) => props.variant === 'secondary',
    'bg-red-500 text-white hover:bg-red-600': (props) => props.variant === 'danger',
    
    // Size styles
    'px-2 py-1 text-sm': (props) => props.size === 'sm',
    'px-4 py-2 text-base': (props) => props.size === 'md',
    'px-6 py-3 text-lg': (props) => props.size === 'lg',
    
    // Disabled state
    'opacity-50 cursor-not-allowed': (props) => props.disabled,
  },
});
```

### Complex Component with Nested Styles

```tsx
const StyledCard = craft(Card)({
  base: 'bg-white rounded-lg shadow-md p-6',
  dynamic: {
    'border border-gray-200': () => true,
    'hover:shadow-lg': (props) => !props.disabled,
  },
  nested: {
    header: 'mb-4',
    h1: 'text-xl font-bold text-gray-900',
    h3: 'text-sm text-gray-500 mt-1',
    main: 'text-gray-700',
    footer: 'mt-4 pt-4 border-t border-gray-200',
  },
  responsive: {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  },
});
```

## Best Practices

1. **Keep Base Styles Simple**: Use the `base` property for styles that are always applied to the component.

2. **Use Dynamic Classes for Variants**: Use the `dynamic` property to handle component variants and states.

3. **Organize Responsive Styles**: Use the `responsive` property to manage different styles for different viewport sizes.

4. **Structure Nested Elements**: Use the `nested` property to style child elements within your component.

5. **Type Your Props**: Always define proper TypeScript interfaces for your component props to get full type safety.

6. **Reuse Common Styles**: Create utility functions or constants for commonly used style combinations.

7. **Test Your Components**: Ensure your styled components work correctly across different states and viewport sizes. 
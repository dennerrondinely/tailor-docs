---
sidebar_position: 3
---

# Advanced Usage

This guide covers advanced patterns and techniques for using Tailor effectively in your React applications.

## Composing Components

You can compose multiple styled components to create complex UI elements. Here's an example of a form component:

```tsx
interface InputProps {
  error?: boolean;
  disabled?: boolean;
}

const Input = craft('input')({
  base: 'w-full px-4 py-2 rounded border transition-colors',
  dynamic: {
    'border-gray-300 focus:border-blue-500': (props) => !props.error,
    'border-red-500 focus:border-red-600': (props) => props.error,
    'bg-gray-100 cursor-not-allowed': (props) => props.disabled,
  },
});

interface LabelProps {
  required?: boolean;
}

const Label = craft('label')({
  base: 'block text-sm font-medium text-gray-700 mb-1',
  dynamic: {
    'after:content-["*"] after:text-red-500 after:ml-1': (props) => props.required,
  },
});

interface FormFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  error,
  disabled,
  ...props
}) => (
  <div className="mb-4">
    <Label required={required}>{label}</Label>
    <Input error={!!error} disabled={disabled} {...props} />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

// Usage
<FormField
  label="Email"
  required
  type="email"
  error="Please enter a valid email address"
/>
```

## Theme Integration

You can integrate Tailor with your application's theme system. Here's an example using a theme context:

```tsx
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
}

const ThemeContext = React.createContext<Theme>(defaultTheme);

const useTheme = () => React.useContext(ThemeContext);

const ThemedButton = craft(Button)({
  base: 'rounded font-medium transition-colors',
  dynamic: (props) => {
    const theme = useTheme();
    return {
      [`bg-${theme.colors.primary} text-white`]: () => true,
      [`hover:bg-${theme.colors.secondary}`]: () => true,
      [`p-${theme.spacing.md}`]: () => true,
    };
  },
});
```

## Custom Hooks

Create custom hooks to encapsulate common styling logic:

```tsx
interface UseButtonStylesProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const useButtonStyles = ({ variant, size, disabled }: UseButtonStylesProps) => ({
  base: 'rounded font-medium transition-colors',
  dynamic: {
    // Variant styles
    'bg-blue-500 text-white hover:bg-blue-600': () => variant === 'primary',
    'bg-gray-500 text-white hover:bg-gray-600': () => variant === 'secondary',
    'bg-red-500 text-white hover:bg-red-600': () => variant === 'danger',
    
    // Size styles
    'px-2 py-1 text-sm': () => size === 'sm',
    'px-4 py-2 text-base': () => size === 'md',
    'px-6 py-3 text-lg': () => size === 'lg',
    
    // Disabled state
    'opacity-50 cursor-not-allowed': () => disabled,
  },
});

const Button = craft('button')((props) => useButtonStyles(props));
```

## Performance Optimization

### Memoization

Use React's `useMemo` to memoize style configurations:

```tsx
const StyledComponent = React.memo(({ variant, size, ...props }) => {
  const styles = React.useMemo(
    () => ({
      base: 'rounded font-medium',
      dynamic: {
        [`bg-${variant}-500`]: () => true,
        [`text-${size}`]: () => true,
      },
    }),
    [variant, size]
  );

  return <Component styles={styles} {...props} />;
});
```

### Style Deduplication

Tailor automatically deduplicates classes, but you can optimize further by extracting common styles:

```tsx
const commonStyles = {
  base: 'rounded font-medium transition-colors',
  responsive: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  },
};

const PrimaryButton = craft(Button)({
  ...commonStyles,
  dynamic: {
    'bg-blue-500 text-white hover:bg-blue-600': () => true,
  },
});

const SecondaryButton = craft(Button)({
  ...commonStyles,
  dynamic: {
    'bg-gray-500 text-white hover:bg-gray-600': () => true,
  },
});
```

## Testing

### Unit Testing

Test your styled components using Jest and React Testing Library:

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('StyledButton', () => {
  it('applies correct styles based on props', () => {
    const { rerender } = render(<StyledButton>Click me</StyledButton>);
    
    // Check base styles
    expect(screen.getByRole('button')).toHaveClass('rounded font-medium');
    
    // Check variant styles
    rerender(<StyledButton variant="primary">Click me</StyledButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-500');
    
    // Check disabled state
    rerender(<StyledButton disabled>Click me</StyledButton>);
    expect(screen.getByRole('button')).toHaveClass('opacity-50');
  });
  
  it('handles user interactions correctly', async () => {
    const handleClick = jest.fn();
    render(<StyledButton onClick={handleClick}>Click me</StyledButton>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Visual Testing

Use tools like Storybook to test your components visually:

```tsx
// Button.stories.tsx
export default {
  title: 'Components/Button',
  component: StyledButton,
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
```

## Error Handling

Implement proper error boundaries and validation:

```tsx
class StyledComponentErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="p-4 bg-red-100 text-red-700 rounded">Something went wrong</div>;
    }
    return this.props.children;
  }
}

const SafeStyledComponent = (props) => (
  <StyledComponentErrorBoundary>
    <StyledComponent {...props} />
  </StyledComponentErrorBoundary>
);
```

## Accessibility

Ensure your styled components are accessible:

```tsx
const AccessibleButton = craft(Button)({
  base: 'rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  dynamic: {
    'bg-blue-500 text-white hover:bg-blue-600': () => true,
    'aria-disabled:opacity-50 aria-disabled:cursor-not-allowed': (props) => props.disabled,
  },
});

// Usage
<AccessibleButton
  aria-label="Submit form"
  role="button"
  tabIndex={0}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
  Submit
</AccessibleButton>
```

## Migration Guide

If you're migrating from other styling solutions, here are some tips:

1. **From CSS Modules**:
   - Convert CSS classes to Tailwind utility classes
   - Use the `nested` property for complex selectors
   - Replace CSS variables with Tailwind's theme system

2. **From Styled Components**:
   - Replace styled-component syntax with Tailor's `craft` function
   - Convert CSS-in-JS to Tailwind classes
   - Use the `dynamic` property for prop-based styles

3. **From CSS-in-JS Libraries**:
   - Move styles to Tailwind classes
   - Use the `base` property for static styles
   - Leverage the `dynamic` property for conditional styles

Remember to:
- Test thoroughly after migration
- Update your build configuration
- Update your documentation
- Train your team on the new patterns 
// Common style configurations that can be reused across components
export const commonStyles = {
  // Spacing utilities
  spacing: {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
  },
  
  // Typography
  typography: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  },
  
  // Colors
  colors: {
    primary: {
      base: 'bg-blue-500 text-white',
      hover: 'hover:bg-blue-600',
      focus: 'focus:ring-blue-500',
    },
    secondary: {
      base: 'bg-gray-500 text-white',
      hover: 'hover:bg-gray-600',
      focus: 'focus:ring-gray-500',
    },
    danger: {
      base: 'bg-red-500 text-white',
      hover: 'hover:bg-red-600',
      focus: 'focus:ring-red-500',
    },
  },
  
  // States
  states: {
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'relative text-transparent after:absolute after:inset-0 after:flex after:items-center after:justify-center after:text-white after:content-["..."]',
    focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2',
  },
  
  // Transitions
  transitions: {
    default: 'transition-all',
    colors: 'transition-colors',
    transform: 'transition-transform',
  },
  
  // Border radius
  borderRadius: {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded',
    lg: 'rounded-lg',
    full: 'rounded-full',
  },
  
  // Shadows
  shadows: {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
  },
};

// Component-specific style configurations
export const buttonStyles = {
  base: `${commonStyles.transitions.default} ${commonStyles.borderRadius.md} font-medium ${commonStyles.states.focus}`,
  variants: {
    primary: `${commonStyles.colors.primary.base} ${commonStyles.colors.primary.hover} ${commonStyles.colors.primary.focus}`,
    secondary: `${commonStyles.colors.secondary.base} ${commonStyles.colors.secondary.hover} ${commonStyles.colors.secondary.focus}`,
    danger: `${commonStyles.colors.danger.base} ${commonStyles.colors.danger.hover} ${commonStyles.colors.danger.focus}`,
  },
  sizes: {
    sm: `${commonStyles.spacing.sm} ${commonStyles.typography.sm}`,
    md: `${commonStyles.spacing.md} ${commonStyles.typography.md}`,
    lg: `${commonStyles.spacing.lg} ${commonStyles.typography.lg}`,
  },
};

export const cardStyles = {
  base: `${commonStyles.borderRadius.lg} bg-white`,
  variants: {
    default: commonStyles.shadows.sm,
    bordered: 'border border-gray-200',
    elevated: commonStyles.shadows.lg,
  },
  padding: {
    none: 'p-0',
    sm: commonStyles.spacing.sm,
    md: commonStyles.spacing.md,
    lg: commonStyles.spacing.lg,
  },
  nested: {
    header: 'mb-4',
    title: `${commonStyles.typography.xl} font-bold text-gray-900`,
    subtitle: `${commonStyles.typography.sm} text-gray-500 mt-1`,
    content: 'text-gray-700',
    footer: 'mt-4 pt-4 border-t border-gray-200',
  },
};

export const badgeStyles = {
  base: 'inline-flex items-center font-medium',
  variants: {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  },
  sizes: {
    sm: `${commonStyles.spacing.sm} ${commonStyles.typography.sm}`,
    md: 'px-2.5 py-0.5 text-sm',
    lg: `${commonStyles.spacing.md} ${commonStyles.typography.md}`,
  },
};

// Utility function to combine class names
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Type definitions for style configurations
export interface StyleConfig {
  base: string;
  variants?: Record<string, string>;
  sizes?: Record<string, string>;
  nested?: Record<string, string>;
}

// Example usage in a component:
/*
import { buttonStyles, combineClasses } from './styles';

const StyledButton = craft(Button)({
  base: buttonStyles.base,
  dynamic: {
    [combineClasses(buttonStyles.variants.primary)]: (props) => props.variant === 'primary',
    [combineClasses(buttonStyles.variants.secondary)]: (props) => props.variant === 'secondary',
    [combineClasses(buttonStyles.variants.danger)]: (props) => props.variant === 'danger',
    [combineClasses(buttonStyles.sizes.sm)]: (props) => props.size === 'sm',
    [combineClasses(buttonStyles.sizes.md)]: (props) => props.size === 'md',
    [combineClasses(buttonStyles.sizes.lg)]: (props) => props.size === 'lg',
    [commonStyles.states.disabled]: (props) => props.disabled,
    [commonStyles.states.loading]: (props) => props.loading,
  },
});
*/ 
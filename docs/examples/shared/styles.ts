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
  base: `${commonStyles.transitions.default} ${commonStyles.borderRadius.md} font-medium ${commonStyles.states.focus} ${commonStyles.colors.primary.base} ${commonStyles.colors.primary.hover} ${commonStyles.colors.primary.focus}`,
};

export const cardStyles = {
  base: `${commonStyles.borderRadius.lg} bg-white ${commonStyles.shadows.sm}`,
  nested: {
    header: 'mb-4',
    h1: `${commonStyles.typography.xl} font-bold text-gray-900`,
    h3: `${commonStyles.typography.sm} text-gray-500 mt-1`,
    div: 'text-gray-700',
    footer: 'mt-4 pt-4 border-t border-gray-200',
  },
};

export const badgeStyles = {
  base: 'inline-flex items-center font-medium bg-gray-100 text-gray-800',
};

// Utility function to combine class names
export const combineClasses = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Type definitions for style configurations
export interface StyleConfig { base: string; nested?: Record<string, string>; }

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
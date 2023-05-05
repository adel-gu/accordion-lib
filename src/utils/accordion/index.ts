import { cva } from 'class-variance-authority';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const headerClassesOptim = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

const AccordionHeaderClasses = cva(
  'flex justify-between items-center w-full p-3',
  {
    variants: {
      bg: {
        dark: 'dark',
        light: 'light',
      },
      bgToggle: {
        primary: 'bg-blue-100',
      },
    },
    defaultVariants: {
      bg: 'dark',
      bgToggle: 'primary',
    },
  },
);

export { AccordionHeaderClasses, headerClassesOptim };

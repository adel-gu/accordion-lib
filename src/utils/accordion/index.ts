import { cva } from 'class-variance-authority';
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const accordionClassesOptim = (...inputs: ClassValue[]) => {
  return twMerge(clsx(...inputs));
};

const AccordionClasses = cva('bg-white text-gray-800 text-base font-normal');

const AccordionItemClasses = cva('border');

const AccordionHeaderClasses = cva(
  'flex justify-between items-center w-full p-3',
  {
    variants: {
      bg: {},
      bgToggle: {
        primary:
          'transition-all ease-in-out duration-500 bg-gray-100 text-gray-500',
      },
    },
    defaultVariants: {
      bgToggle: 'primary',
    },
  },
);

const AccordionBodyClasses = cva(
  'grid grid-rows-[0fr] transition-all ease-in-out duration-500',
);

export {
  AccordionClasses,
  AccordionItemClasses,
  AccordionHeaderClasses,
  AccordionBodyClasses,
  accordionClassesOptim,
};

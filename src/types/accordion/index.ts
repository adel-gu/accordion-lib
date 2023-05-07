import { ButtonHTMLAttributes, HtmlHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import {
  AccordionClasses,
  AccordionHeaderClasses,
  AccordionBodyClasses,
  AccordionItemClasses,
} from 'utils/accordion';

// ! |====================    Accordion Types   ====================|
interface AccordionStatus {
  isToggle?: boolean;
  handleToggle?: () => void;
}

interface AccordionProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionClasses> {}

interface AccordionItemProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionItemClasses> {}

interface AccordionHeaderProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof AccordionHeaderClasses> {
  titleIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openIcon?: React.ReactNode;
}

interface AccordionBodyProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof AccordionBodyClasses> {}
// ! |================= End Accordion types ===============|

export type {
  AccordionStatus,
  AccordionProps,
  AccordionItemProps,
  AccordionBodyProps,
  AccordionHeaderProps,
};

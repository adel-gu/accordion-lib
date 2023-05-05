import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { AccordionHeaderClasses } from '../utils/accordion';

// ! |====================    Accordion Types   ====================|
interface AccordionStatus {
  isToggle: boolean;
  handleToggle: () => void;
}

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  children: React.ReactNode;
}

interface AccordionHeaderProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof AccordionHeaderClasses> {
  titleIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  openIcon?: React.ReactNode;
}

interface AccordionBodyProps {
  children: string;
}
// ! |================= End Accordion types ===============|

export type {
  AccordionStatus,
  AccordionProps,
  AccordionItemProps,
  AccordionBodyProps,
  AccordionHeaderProps,
};

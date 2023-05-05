import { ButtonHTMLAttributes } from 'react';

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

interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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

import { FC, useContext } from 'react';
import { AccordionBodyProps } from 'types/accordion';
import { AccordionContext } from 'contexts/accordion';
import { AccordionBodyClasses, accordionClassesOptim } from 'utils/accordion';

const AccordionBody: FC<AccordionBodyProps> = ({
  children,
  className,
  ...props
}) => {
  const { isToggle } = useContext(AccordionContext)!;

  return (
    <>
      <div
        className={accordionClassesOptim(
          AccordionBodyClasses({ className }),
          `${isToggle && 'grid-rows-[1fr]'}`,
        )}
        {...props}
      >
        <div className={`overflow-hidden`}>
          <p className="p-3">{children}</p>
        </div>
      </div>
    </>
  );
};

export { AccordionBody };

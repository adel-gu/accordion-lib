import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import cn from '@/utils/utils';

const AccordionComponent = forwardRef<
	ElementRef<typeof AccordionPrimitive.Root>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ ...props }, ref) => <AccordionPrimitive.Root ref={ref} {...props} />);

const AccordionItem = forwardRef<
	ElementRef<typeof AccordionPrimitive.Item>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		{...props}
		className={cn('border-b dark:border-b-slate-300', className)}
	/>
));

const AccordionTrigger = forwardRef<
	ElementRef<typeof AccordionPrimitive.Trigger>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className='flex'>
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center justify-between py-4 transition-all hover:underline dark:text-slate-300 [&[data-state=open]>svg]:rotate-180',
				className
			)}
			{...props}>
			{children}
			<ChevronDown className='size-4 shrink-0 transition-transform duration-200' />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));

const AccordionContent = forwardRef<
	ElementRef<typeof AccordionPrimitive.Content>,
	ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all dark:text-slate-300'
		{...props}>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionItem.displayName = AccordionPrimitive.Item.displayName;
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export const Accordion = Object.assign(AccordionComponent, {
	Item: AccordionItem,
	Trigger: AccordionTrigger,
	Content: AccordionContent,
});

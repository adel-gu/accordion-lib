import { ComponentProps } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import cn from '@/utils/utils';

const badgeVariants = cva(
	'text-xm flex h-fit items-center gap-1 rounded-full font-semibold',
	{
		variants: {
			variant: {
				default:
					'bg-cyan-100 text-cyan-800 group-hover:bg-cyan-200 dark:bg-cyan-200 dark:text-cyan-900 dark:group-hover:bg-cyan-300',
				gray: 'bg-gray-100 text-gray-800 group-hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:group-hover:bg-gray-600',
				dark: 'bg-gray-600 text-gray-100 group-hover:bg-gray-500 dark:bg-gray-800 dark:text-gray-200 dark:group-hover:bg-gray-700',
				light:
					'bg-gray-200 text-gray-800 group-hover:bg-gray-300 dark:bg-gray-400 dark:text-gray-900 dark:group-hover:bg-gray-500',
				success:
					'bg-green-100 text-green-800 group-hover:bg-green-200 dark:bg-green-200 dark:text-green-900 dark:group-hover:bg-green-300',
				warning:
					'bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-900 dark:group-hover:bg-yellow-300',
				danger:
					'bg-red-100 text-red-800 group-hover:bg-red-200 dark:bg-red-200 dark:text-red-900 dark:group-hover:bg-red-300',
			},
			size: {
				default: 'px-3 py-1 text-sm',
				xs: 'px-1 py-0.5 text-xs',
				sm: 'px-2 py-1 text-sm',
				md: 'px-3 py-1 text-sm',
				lg: 'px-4 py-1.5 text-base',
				xl: 'px-5 py-2 text-base',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

type BadgeProps = ComponentProps<'div'> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

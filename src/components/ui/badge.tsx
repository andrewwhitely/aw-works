import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
	'inline-flex items-center rounded border px-2 py-0.5 text-xs font-normal transition-colors',
	{
		variants: {
			variant: {
				default: 'border-transparent bg-[#111111] text-[#f5f5f5]',
				outline: 'border-[#e0e0e0] text-[#999999]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

export interface BadgeProps
	extends
		React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };

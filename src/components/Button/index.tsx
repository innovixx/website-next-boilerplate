'use client';

import type { ElementType, HtmlHTMLAttributes } from 'react';
import React from 'react';
import { constructClassName } from '../../utils/constructClassName';
import type { IconType } from '../Icon';
import { Icon } from '../Icon';

type Props = HtmlHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
	htmlType?: 'button' | 'submit' | 'reset';
	icon?: IconType;
	iconSize?: number;
	iconFill?: string;
	iconPosition?: 'left' | 'right';
	loading?: boolean;
	onClick?: () => void;
	style?: React.CSSProperties;
	textColor?: string;
	title?: string;
	type?: 'primary' | 'secondary' | 'tertiary' | 'link';
	htmlElement?: ElementType;
}

export const Button: React.FC<Props> = ({
	children,
	className,
	disabled,
	htmlType = 'button',
	icon,
	iconFill,
	iconSize,
	loading,
	onClick,
	style,
	textColor,
	title,
	htmlElement: El = 'button',
	iconPosition = 'right',
	...rest
}) => (
	<El
		className={constructClassName([
			className,
		])}
		type={El === 'button' ? htmlType : undefined}
		onClick={() => {
			onClick?.();
		}}
		style={style}
		title={title}
		disabled={disabled}
		{...rest}
	>
		<span
			style={{ color: textColor }}
		>
			{
				!loading && iconPosition === 'left' && (
					<Icon
						icon={icon as IconType}
						fill={iconFill}
						size={iconSize ?? 18}
					/>
				)
			}
			{children}
			{
				!loading && iconPosition === 'right' && (
					<Icon
						icon={icon as IconType}
						fill={iconFill}
						size={iconSize ?? 18}
					/>
				)
			}
			{
				loading === true && (
					<Icon
						icon="spinnerThirdClassicLight"
						size={iconSize ?? 18}
						fill={iconFill}
					/>
				)
			}
		</span>
	</El>
);

'use client';

import type { ElementType, HtmlHTMLAttributes } from 'react';
import React from 'react';
import styles from './styles.module.scss';
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
	type = 'primary',
	htmlElement: El = 'button',
	iconPosition = 'right',
	...rest
}) => {
	const IconComponent = icon ? (
		<Icon
			icon={icon}
			className={
				constructClassName([
					styles.icon,
				])
			}
			fill={iconFill}
			size={iconSize ?? 18}
		/>
	) : null;

	return (
		<El
			className={constructClassName([
				styles.button,
				styles[type],
				(loading ?? false) && styles.buttonLoading,
				(disabled ?? false) && styles.buttonDisabled,
				className,
			])}
			type={El === 'button' ? htmlType : undefined}
			onClick={() => {
				if (loading === false) onClick?.();
			}}
			style={style}
			title={title}
			disabled={disabled}
			{...rest}
		>
			<span
				className={styles.contentSpan}
				style={{ color: textColor }}
			>
				{
					!(loading ?? false) && icon && iconPosition === 'left' && (
						IconComponent
					)
				}
				{children}
				{
					!(loading ?? false) && icon && iconPosition === 'right' && (
						IconComponent
					)
				}
				{
					loading === true && (
						<span className={constructClassName([
							styles.loadingIcon,
						])}
						>
							<Icon
								icon="spinnerThirdClassicLight"
								size={iconSize ?? 18}
								fill={iconFill}
							/>
						</span>
					)
				}
			</span>
		</El>
	);
};

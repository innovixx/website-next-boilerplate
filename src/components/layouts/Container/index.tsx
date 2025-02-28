import React from 'react';
import { constructClassName } from '../../../utils/constructClassName';
import styles from './styles.module.scss';

interface Props {
	children: React.ReactNode;
	className?: string;
	size?: 'small' | 'medium' | 'large';
}

export const Container: React.FC<Props> = ({ children, className, size = 'medium' }) => (
	<div
		className={constructClassName([
			className,
			styles.container,
			size && styles[size],
		])}
	>
		{children}
	</div>
);

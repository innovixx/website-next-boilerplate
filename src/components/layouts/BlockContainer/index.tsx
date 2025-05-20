'use client';

import React from 'react';
import { useWindowInfo } from '@faceless-ui/window-info';
import type { BlockSettings, Maybe } from '../../../graphql/generated/schema';
import { Container } from '../Container';
import styles from './styles.module.scss';
import { constructClassName } from '../../../utils/constructClassName';
import breakpoints from '../../../styles/queries/index.module.scss';

export const BlockContainer: React.FC<{
	children: React.ReactNode;
	blockSettings?: Maybe<BlockSettings> | undefined;
	className?: string;
}> = ({ children, blockSettings, className }) => {
	const { width } = useWindowInfo();
	const isMobile = (width || 0) < parseInt(breakpoints.md, 10);

	return (
		(
			<Container
				size="medium"
				className={constructClassName([
					styles.container,
					!isMobile && blockSettings?.margin?.marginBottom ? (styles as Record<string, string>)[`marginBottom${blockSettings.margin.marginBottom.charAt(0).toUpperCase() + blockSettings.margin.marginBottom.slice(1)}`] : undefined,
					!isMobile && blockSettings?.padding?.paddingBottom ? (styles as Record<string, string>)[`paddingBottom${blockSettings.padding.paddingBottom.charAt(0).toUpperCase() + blockSettings.padding.paddingBottom.slice(1).toLowerCase()}`] : undefined,
					!isMobile && blockSettings?.padding?.paddingTop ? (styles as Record<string, string>)[`paddingTop${blockSettings.padding.paddingTop.charAt(0).toUpperCase() + blockSettings.padding.paddingTop.slice(1)}`] : undefined,
					!isMobile && blockSettings?.padding?.paddingLeft ? (styles as Record<string, string>)[`paddingLeft${blockSettings.padding.paddingLeft.charAt(0).toUpperCase() + blockSettings.padding.paddingLeft.slice(1).toLowerCase()}`] : undefined,
					!isMobile && blockSettings?.padding?.paddingRight ? (styles as Record<string, string>)[`paddingRight${blockSettings.padding.paddingRight.charAt(0).toUpperCase() + blockSettings.padding.paddingRight.slice(1).toLowerCase()}`] : undefined,

					isMobile && styles.marginBottomSmall,

					className,
				])}
			>
				{children}
			</Container>
		)
	);
};

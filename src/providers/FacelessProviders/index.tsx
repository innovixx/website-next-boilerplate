'use client';

import { useWindowInfo, WindowInfoProvider } from '@faceless-ui/window-info';
import { GridProvider } from '@faceless-ui/css-grid';
import { ModalProvider, ModalContainer } from '@faceless-ui/modal';
import { ScrollInfoProvider } from '@faceless-ui/scroll-info';
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Container } from '../../components/layouts';
import zIndex from '../../styles/zIndex/index.module.scss';

interface Props {
	children: React.ReactNode;
}

const base = (multiplier: number = 1): string => {
	const htmlFontSize = 16;
	const baselinePX = 20;
	return `${(baselinePX / htmlFontSize) * multiplier}rem`;
};

const breakpoints = {
	lg: '1140px',
	md: '1024px',
	sm: '768px',
	xl: '2560px',
};

const Context = createContext<number>(0);

export const FacelessContainerWithProviders: React.FC<Props> = ({
	children,
}) => {
	const { width: windowWidth } = useWindowInfo();
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(ref?.current?.offsetWidth || 0);
	}, [windowWidth, ref]);

	return (
		<WindowInfoProvider
			breakpoints={{
				l: `${breakpoints.lg}`,
				m: `${breakpoints.md}`,
				s: `${breakpoints.sm}`,
				xl: `${breakpoints.xl}`,
			}}
		>
			<ScrollInfoProvider>
				<ModalProvider
					transTime={250}
					classPrefix="invx"
					zIndex={zIndex.modal}
				>
					<Context.Provider value={width}>
						<GridProvider
							rowGap={{
								l: base(),
								m: base(),
								s: base(),
								xl: base(),
							}}
							colGap={{
								l: base(),
								m: base(),
								s: base(),
								xl: base(),
							}}
							cols={{
								l: 12,
								m: 6,
								s: 4,
								xl: 12,
							}}
							breakpoints={{
								l: parseFloat(breakpoints.lg),
								m: parseFloat(breakpoints.md),
								s: parseFloat(breakpoints.sm),
							}}
						>
							{children}
							<ModalContainer />
						</GridProvider>
						<Container>
							<div ref={ref} />
						</Container>
					</Context.Provider>
				</ModalProvider>
			</ScrollInfoProvider>
		</WindowInfoProvider>
	);
};

export const useGridContainerWidth = (): number => useContext(Context);

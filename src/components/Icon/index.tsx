'use client';

import React, { useEffect, useState } from 'react';
import { icons } from './svgs';

export type IconType = keyof typeof icons;
interface Props {
	icon: IconType;
	className?: string;
	size?: number;
	fill?: string;
	title?: string;
}

export const Icon: React.FC<Props> = ({
	className,
	size = 20,
	icon,
	fill,
	title,
}) => {
	const [svgDoc, setSvgDoc] = useState<Document | null>(null);

	const svg = icons[icon];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const parser = new DOMParser();
			setSvgDoc(parser.parseFromString(svg, 'image/svg+xml'));
		}
	}, [svg]);

	if (!svgDoc) return null;

	const [svgElement] = svgDoc.getElementsByTagName('svg');

	const viewBox = svgElement.getAttribute('viewBox')?.split(' ');

	const width = viewBox ? parseInt(viewBox[2], 10) : 0;
	const height = viewBox ? parseInt(viewBox[3], 10) : 0;

	let svgWidth = 0;
	let svgHeight = 0;
	if (width >= height) {
		svgWidth = size;
		svgHeight = size * (height / width);
	} else {
		svgWidth = size * (width / height);
		svgHeight = size;
	}

	svgElement.setAttribute('width', svgWidth.toString());
	svgElement.setAttribute('height', svgHeight.toString());
	svgElement.setAttribute('className', className ?? '');
	if (fill !== 'doNotFill') {
		svgElement.setAttribute('fill', fill ?? 'currentColor');
	}
	svgElement.setAttribute('aria-hidden', 'true');
	svgElement.setAttribute('focusable', 'false');
	svgElement.setAttribute('role', 'img');
	return (
		<React.Fragment>
			<span
				title={title}
				dangerouslySetInnerHTML={{ __html: svgElement.outerHTML }}
				className={className}
				style={{
					width: svgWidth,
					height: svgHeight,
					display: 'inline-block',
					lineHeight: 0,
					marginBottom: 0,
				}}
			/>
		</React.Fragment>
	);
};

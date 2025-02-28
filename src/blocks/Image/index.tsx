import React from 'react';
import NextImage from 'next/image';
import { sizes } from './sizes';
import type { Image as ImageType } from '../../graphql/generated/schema';

export const ImageComponent: React.FC<ImageType> = ({
	image,
}) => {
	if (typeof image === 'object' && image?.sizes) {
		const sizesToUse = sizes
			.map((size) => `(max-width: ${size}px) ${size}px`)
			.join(', ');

		return (
			<div>
				<NextImage
					src={image.url ?? ''}
					alt={image.alt}
					width={image.width ?? 0}
					height={image.height ?? 0}
					sizes={sizesToUse}
				/>
			</div>
		);
	}

	return null;
};

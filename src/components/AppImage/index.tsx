import type { ImageProps } from 'next/image';
import Image from 'next/image';
import React from 'react';
import type { Media } from '../../graphql/generated/schema';
import { constructClassName } from '../../utils/constructClassName';
import styles from './styles.module.scss';

type Props = Partial<ImageProps> & {
	image?: Media | null;
	imageSize: 'card' | 'feature' | 'original';
	className?: string;
}

const imageSizes = {
	card: {
		height: 480,
		width: 640,
	},
	feature: {
		height: 576,
		width: 1024,
	},
};

export const AppImage: React.FC<Props> = ({ image, imageSize, className, ...rest }) => {
	if (!image) return null;

	if (typeof image === 'object') {
		switch (imageSize) {
			case 'feature':
				return (
					<Image
						src={image.sizes?.feature?.url || image.url || ''}
						alt={image.alt}
						width={imageSizes[imageSize].width}
						height={imageSizes[imageSize].height}
						className={constructClassName([
							className,
							styles.image,
						])}
						quality={100}
						{...rest}
					/>
				);
			case 'card':
				return (
					<Image
						src={image.sizes?.card?.url || image.url || ''}
						alt={image.alt}
						width={imageSizes[imageSize].width}
						height={imageSizes[imageSize].height}
						className={constructClassName([
							className,
							styles.image,
						])}
						quality={100}
						{...rest}
					/>
				);
			case 'original':
				return (
					<Image
						className={constructClassName([
							className,
							styles.image,
						])}
						src={image.url || ''}
						alt={image.alt}
						width={image.width || 0}
						height={image.height || 0}
						quality={100}
						{...rest}
					/>
				);
			default:
				return (
					<Image
						className={constructClassName([
							className,
							styles.image,
						])}
						src={image.sizes?.card?.url || image.url || ''}
						alt={image.alt}
						width={imageSizes.card.width}
						height={imageSizes.card.height}
						quality={100}
						{...rest}
					/>
				);
		}
	}

	return null;
};

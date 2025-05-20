import React from 'react';
import type { Image as ImageType } from '../../graphql/generated/schema';
import { AppImage, BlockContainer } from '../../components';
import styles from './styles.module.scss';

export const Image: React.FC<ImageType> = ({
	image,
	imageSize,
	blockSettings,
}) => (
	<BlockContainer blockSettings={blockSettings}>
		<AppImage
			className={styles.image}
			imageSize={imageSize || 'feature'}
			image={image}
		/>
	</BlockContainer>
);

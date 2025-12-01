import React from 'react';
import * as components from '../../blocks';
import { toPascalCase } from '../../utils/changeCase';
import type { SharedBlockType } from '../../blocks/types';
import { mergeBlockSettings } from '../../utils/mergeBlockSettings';

type Props = SharedBlockType & {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	blocks: any[];
	className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ blocks, blockSettings, ...rest }) => (
	<React.Fragment>
		{blocks?.map((block, i) => {
			if (!block.blockType) return null;
			const blockType = `${toPascalCase(block.blockType)}`;
			const Block = components[blockType as keyof typeof components];

			const mergedBlockSettings = mergeBlockSettings(block.blockSettings, blockSettings);

			if (typeof Block === 'function') {
				const BlockComponent = Block as React.ElementType;
				return (
					<BlockComponent
						key={i}
						{...block}
						{...rest}
						blockSettings={mergedBlockSettings}
					/>
				);
			}
			return null;
		})}
	</React.Fragment>
);

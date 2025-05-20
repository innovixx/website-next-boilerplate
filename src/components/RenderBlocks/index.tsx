import React from 'react';
import * as components from '../../blocks';
import { toPascalCase } from '../../utils/changeCase';
import styles from "./styles.module.scss"
import { Page_Layout_Blocks } from '../../graphql/generated/schema';

type Props = {
  blocks: Page_Layout_Blocks[];
  className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ blocks, className, ...rest }) => (
  <div className={styles.container}>
    {blocks?.map((block, i) => {
      if (!block.blockType) return null;
      const blockType = `${toPascalCase(block.blockType)}`;
      const Block = components[blockType as keyof typeof components];

      if (typeof Block === "function") {
        const BlockComponent = Block as React.ElementType;
        return (
          <div
            key={i}
            id={block.blockName ? encodeURIComponent(block.blockName) : undefined}
            className={className}
          >
            <BlockComponent
              {...block}
              {...rest}
            />
          </div>
        );
      }
      return null;
    })}
  </div>
);

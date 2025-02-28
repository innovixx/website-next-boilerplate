import React from 'react';
import * as components from '../../blocks';
import { toPascalCase } from '../../utils/changeCase';
import { Container } from '../layouts';
import styles from "./styles.module.scss"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: any[];
  className?: string;
};

export const RenderBlocks: React.FC<Props> = ({ blocks, ...rest }) => (
  <Container className={styles.container}>
    {blocks?.map((block, i) => {
      const blockType = `${toPascalCase(block.blockType)}`;
      const Block: React.FC<any> = components[blockType as keyof typeof components];

      if (Block) {
        return (
          <div
            key={i}
            id={block.blockName ? encodeURIComponent(block.blockName) : undefined}
          >
            <Block
              {...block}
              {...rest}
            />
          </div>
        );
      }
      return null;
    })}
  </Container>
);

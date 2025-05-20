import { gql } from '@apollo/client';
import { BLOCK_SETTINGS_FIELD } from '../../fields';

export const CONTENT_BLOCK = gql`
  fragment ContentBlockFragment on Content {
    blockSettings {
      ...BlockSettingsFieldFragment
    }
    content
    id
    blockName
    blockType
  }
  ${BLOCK_SETTINGS_FIELD}
`;

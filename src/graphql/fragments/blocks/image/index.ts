import { gql } from '@apollo/client';
import { MEDIA_FIELD } from '../../fields/media';
import { BLOCK_SETTINGS_FIELD } from '../../fields';

export const IMAGE_BLOCK = gql`
  fragment ImageBlockFragment on Image {
    blockSettings {
      ...BlockSettingsFieldFragment
    }
    image {
      ...MediaFieldFragment
    }
    caption
    id
    blockName
    blockType
    imageSize
  }
  ${BLOCK_SETTINGS_FIELD}
  ${MEDIA_FIELD}
`;

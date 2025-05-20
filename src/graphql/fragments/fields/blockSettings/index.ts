import { gql } from '@apollo/client';

export const BLOCK_SETTINGS_FIELD = gql`
  fragment BlockSettingsFieldFragment on BlockSettings {
    margin {
      marginBottom
    }
    padding {
      paddingBottom
      paddingLeft
      paddingRight
      paddingTop
    }
  }
`;

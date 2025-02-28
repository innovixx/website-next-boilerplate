import { gql } from '@apollo/client';

export const LINK_FIELD = gql`
  fragment LinkFieldFragment on Link {
    type
    label
    reference {
      relationTo
      value {
        ... on Page {
          slug
        }
      }
    }
    url
  }
`;

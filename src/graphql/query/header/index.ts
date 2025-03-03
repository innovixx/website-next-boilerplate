import { gql } from 'graphql-request';

export const HEADER_MENU = gql`
  query HeaderMenu($draft: Boolean) {
    HeaderMenu(draft: $draft) {
      links {
        link {
          label
          type
          url
          reference {
            relationTo
            value {
              ... on Page {
                title
                slug
              }
            }
          }
        }
        id
      }
    }
  }
`;

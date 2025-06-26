import { gql } from '@apollo/client';
import { LINK_FIELD } from '../../fragments/fields/link';

export const HEADER_MENU = gql`
  query HeaderMenu($draft: Boolean) {
    HeaderMenu(draft: $draft) {
      links {
        id
        link {
          ...LinkFieldFragment
        }
      }
    }
  }
  ${LINK_FIELD}
`;

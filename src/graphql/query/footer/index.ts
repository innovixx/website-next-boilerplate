import { gql } from 'graphql-request';
import { LINK_FIELD } from '../../fragments/fields';

export const FOOTER_MENU = gql`
  query FooterMenu($draft: Boolean) {
		FooterMenu(draft: $draft) {
			menuGroups {
				id
				links {
					id
					link {
						...LinkFieldFragment
					}
				}
				text
			}
		}
	}
  ${LINK_FIELD}
`;

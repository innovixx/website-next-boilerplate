import { gql } from '@apollo/client';
import { LINK_FIELD } from '../../fragments/fields/link';

export const FOOTER_MENU = gql`
	query FooterMenu($draft: Boolean) {
		FooterMenu(draft: $draft) {
			menuGroups {
				id
				menuGroup {
					title
					links {
						id
						link {
							...LinkFieldFragment
						}
					}
				}
			}
		}
	}
	${LINK_FIELD}
`;

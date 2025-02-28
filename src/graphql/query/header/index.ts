import { gql } from 'graphql-request';
import { LINK_FIELD } from '../../fragments/fields';

export const HEADER_MENU = gql`
	query HeaderMenu($draft: Boolean) {
		HeaderMenu(draft: $draft) {
			menuGroups {
				text
				links {
					id
					link {
						...LinkFieldFragment
					}
				}
				id
			}
		}
	}
	${LINK_FIELD}
`;

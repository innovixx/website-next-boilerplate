import { gql } from 'graphql-request';

export const FOOTER_MENU = gql`
  query FooterMenu($draft: Boolean) {
		FooterMenu(draft: $draft) {
			menuGroups {
				text
				links {
					id
					link {
						type
						label
						reference {
							value {
								... on Page {
									title
									slug
								}
							}
							relationTo
						}
						url
					}
				}
				id
			}
		}
	}
`;

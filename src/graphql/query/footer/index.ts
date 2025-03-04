import { gql } from 'graphql-request';

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
							type
						}
					}
				}
			}
		}
	}
`;

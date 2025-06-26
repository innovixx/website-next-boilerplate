import { gql } from '@apollo/client';

export const LINK_FIELD = gql`
	fragment LinkFieldFragment on Link {
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
`;

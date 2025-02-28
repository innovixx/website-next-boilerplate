import { gql } from '@apollo/client';
import { CONTENT_BLOCK, IMAGE_BLOCK } from '../../fragments/blocks';

export const PAGES = gql`
  query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {
    Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
        title
        description
        image {
          ...MediaFieldFragment
        }
        header {
          type
        }
        layout {
          blocks {
          ...ContentBlockFragment
          ...ImageBlockFragment
          }
        }
        meta {
          title
          description
          image {
            ...MediaFieldFragment
          }
        }
        slug
        updatedAt
        createdAt
      }
    }
  }
  ${CONTENT_BLOCK}
  ${IMAGE_BLOCK}
`;

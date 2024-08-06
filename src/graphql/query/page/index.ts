import { gql } from '@apollo/client';

export const PAGE = gql`
    query Pages($where: Page_where, $limit: Int, $page: Int, $sort: String) {
    Pages(where: $where, limit: $limit, page: $page, sort: $sort) {
      docs {
        id
      title
      image {
        id
        alt
        updatedAt
        createdAt
        url
        filename
        mimeType
        filesize
        width
        height
        focalX
        focalY
        sizes {
          card {
            url
            width
            height
            mimeType
            filesize
            filename
          }
          feature {
            url
            width
            height
            mimeType
            filesize
            filename
          }
        }
      }
      layout {
        ... on Content {
          content
          id
          blockName
          blockType
        }
        ... on Image {
      image {
        id
        alt
        updatedAt
        createdAt
        url
        filename
        mimeType
        filesize
        width
        height
        focalX
        focalY
        sizes {
          card {
            url
            width
            height
            mimeType
            filesize
            filename
          }
          feature {
            url
            width
            height
            mimeType
            filesize
            filename
          }
        }
      }
          caption
          id
          blockName
          blockType
        }
      }
      meta {
        title
        description
      }
      slug
      updatedAt
      createdAt
      }
    }
  }
`;

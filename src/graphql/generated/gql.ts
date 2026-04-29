/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment ContentBlockFragment on Content {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  content\n  id\n  blockName\n  blockType\n}": typeof types.ContentBlockFragmentFragmentDoc,
    "fragment ImageBlockFragment on Image {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  image {\n    ...MediaFieldFragment\n  }\n  caption\n  id\n  blockName\n  blockType\n  imageSize\n}": typeof types.ImageBlockFragmentFragmentDoc,
    "fragment BlockSettingsFieldFragment on BlockSettings {\n  margin {\n    marginBottom\n  }\n  padding {\n    paddingBottom\n    paddingLeft\n    paddingRight\n    paddingTop\n  }\n}": typeof types.BlockSettingsFieldFragmentFragmentDoc,
    "fragment LinkFieldFragment on Link {\n  label\n  reference {\n    value {\n      ... on Page {\n        title\n        slug\n      }\n    }\n    relationTo\n  }\n  url\n  type\n}": typeof types.LinkFieldFragmentFragmentDoc,
    "fragment MediaFieldFragment on Media {\n  id\n  alt\n  updatedAt\n  createdAt\n  url\n  filename\n  mimeType\n  filesize\n  width\n  height\n  focalX\n  focalY\n  sizes {\n    card {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n    feature {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n  }\n}": typeof types.MediaFieldFragmentFragmentDoc,
    "query FooterMenu($draft: Boolean) {\n  FooterMenu(draft: $draft) {\n    menuGroups {\n      id\n      menuGroup {\n        title\n        links {\n          id\n          link {\n            ...LinkFieldFragment\n          }\n        }\n      }\n    }\n  }\n}": typeof types.FooterMenuDocument,
    "query HeaderMenu($draft: Boolean) {\n  HeaderMenu(draft: $draft) {\n    links {\n      id\n      link {\n        ...LinkFieldFragment\n      }\n    }\n  }\n}": typeof types.HeaderMenuDocument,
    "query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {\n  Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {\n    docs {\n      id\n      title\n      description\n      header {\n        type\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      layout {\n        blocks {\n          ...ContentBlockFragment\n          ...ImageBlockFragment\n        }\n      }\n      meta {\n        title\n        description\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      slug\n      updatedAt\n      createdAt\n    }\n  }\n}": typeof types.PagesDocument,
};
const documents: Documents = {
    "fragment ContentBlockFragment on Content {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  content\n  id\n  blockName\n  blockType\n}": types.ContentBlockFragmentFragmentDoc,
    "fragment ImageBlockFragment on Image {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  image {\n    ...MediaFieldFragment\n  }\n  caption\n  id\n  blockName\n  blockType\n  imageSize\n}": types.ImageBlockFragmentFragmentDoc,
    "fragment BlockSettingsFieldFragment on BlockSettings {\n  margin {\n    marginBottom\n  }\n  padding {\n    paddingBottom\n    paddingLeft\n    paddingRight\n    paddingTop\n  }\n}": types.BlockSettingsFieldFragmentFragmentDoc,
    "fragment LinkFieldFragment on Link {\n  label\n  reference {\n    value {\n      ... on Page {\n        title\n        slug\n      }\n    }\n    relationTo\n  }\n  url\n  type\n}": types.LinkFieldFragmentFragmentDoc,
    "fragment MediaFieldFragment on Media {\n  id\n  alt\n  updatedAt\n  createdAt\n  url\n  filename\n  mimeType\n  filesize\n  width\n  height\n  focalX\n  focalY\n  sizes {\n    card {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n    feature {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n  }\n}": types.MediaFieldFragmentFragmentDoc,
    "query FooterMenu($draft: Boolean) {\n  FooterMenu(draft: $draft) {\n    menuGroups {\n      id\n      menuGroup {\n        title\n        links {\n          id\n          link {\n            ...LinkFieldFragment\n          }\n        }\n      }\n    }\n  }\n}": types.FooterMenuDocument,
    "query HeaderMenu($draft: Boolean) {\n  HeaderMenu(draft: $draft) {\n    links {\n      id\n      link {\n        ...LinkFieldFragment\n      }\n    }\n  }\n}": types.HeaderMenuDocument,
    "query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {\n  Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {\n    docs {\n      id\n      title\n      description\n      header {\n        type\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      layout {\n        blocks {\n          ...ContentBlockFragment\n          ...ImageBlockFragment\n        }\n      }\n      meta {\n        title\n        description\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      slug\n      updatedAt\n      createdAt\n    }\n  }\n}": types.PagesDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentBlockFragment on Content {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  content\n  id\n  blockName\n  blockType\n}"): (typeof documents)["fragment ContentBlockFragment on Content {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  content\n  id\n  blockName\n  blockType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageBlockFragment on Image {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  image {\n    ...MediaFieldFragment\n  }\n  caption\n  id\n  blockName\n  blockType\n  imageSize\n}"): (typeof documents)["fragment ImageBlockFragment on Image {\n  blockSettings {\n    ...BlockSettingsFieldFragment\n  }\n  image {\n    ...MediaFieldFragment\n  }\n  caption\n  id\n  blockName\n  blockType\n  imageSize\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockSettingsFieldFragment on BlockSettings {\n  margin {\n    marginBottom\n  }\n  padding {\n    paddingBottom\n    paddingLeft\n    paddingRight\n    paddingTop\n  }\n}"): (typeof documents)["fragment BlockSettingsFieldFragment on BlockSettings {\n  margin {\n    marginBottom\n  }\n  padding {\n    paddingBottom\n    paddingLeft\n    paddingRight\n    paddingTop\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkFieldFragment on Link {\n  label\n  reference {\n    value {\n      ... on Page {\n        title\n        slug\n      }\n    }\n    relationTo\n  }\n  url\n  type\n}"): (typeof documents)["fragment LinkFieldFragment on Link {\n  label\n  reference {\n    value {\n      ... on Page {\n        title\n        slug\n      }\n    }\n    relationTo\n  }\n  url\n  type\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MediaFieldFragment on Media {\n  id\n  alt\n  updatedAt\n  createdAt\n  url\n  filename\n  mimeType\n  filesize\n  width\n  height\n  focalX\n  focalY\n  sizes {\n    card {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n    feature {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n  }\n}"): (typeof documents)["fragment MediaFieldFragment on Media {\n  id\n  alt\n  updatedAt\n  createdAt\n  url\n  filename\n  mimeType\n  filesize\n  width\n  height\n  focalX\n  focalY\n  sizes {\n    card {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n    feature {\n      url\n      width\n      height\n      mimeType\n      filesize\n      filename\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query FooterMenu($draft: Boolean) {\n  FooterMenu(draft: $draft) {\n    menuGroups {\n      id\n      menuGroup {\n        title\n        links {\n          id\n          link {\n            ...LinkFieldFragment\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query FooterMenu($draft: Boolean) {\n  FooterMenu(draft: $draft) {\n    menuGroups {\n      id\n      menuGroup {\n        title\n        links {\n          id\n          link {\n            ...LinkFieldFragment\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query HeaderMenu($draft: Boolean) {\n  HeaderMenu(draft: $draft) {\n    links {\n      id\n      link {\n        ...LinkFieldFragment\n      }\n    }\n  }\n}"): (typeof documents)["query HeaderMenu($draft: Boolean) {\n  HeaderMenu(draft: $draft) {\n    links {\n      id\n      link {\n        ...LinkFieldFragment\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {\n  Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {\n    docs {\n      id\n      title\n      description\n      header {\n        type\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      layout {\n        blocks {\n          ...ContentBlockFragment\n          ...ImageBlockFragment\n        }\n      }\n      meta {\n        title\n        description\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      slug\n      updatedAt\n      createdAt\n    }\n  }\n}"): (typeof documents)["query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {\n  Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {\n    docs {\n      id\n      title\n      description\n      header {\n        type\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      layout {\n        blocks {\n          ...ContentBlockFragment\n          ...ImageBlockFragment\n        }\n      }\n      meta {\n        title\n        description\n        image {\n          ...MediaFieldFragment\n        }\n      }\n      slug\n      updatedAt\n      createdAt\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
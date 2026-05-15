/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BlockSettings_Margin_MarginBottom =
  | 'extraLarge'
  | 'large'
  | 'medium'
  | 'none'
  | 'small';

export type BlockSettings_Padding_PaddingBottom =
  | 'large'
  | 'medium'
  | 'none'
  | 'small';

export type BlockSettings_Padding_PaddingLeft =
  | 'large'
  | 'medium'
  | 'none'
  | 'small';

export type BlockSettings_Padding_PaddingRight =
  | 'large'
  | 'medium'
  | 'none'
  | 'small';

export type BlockSettings_Padding_PaddingTop =
  | 'large'
  | 'medium'
  | 'none'
  | 'small';

export type Image_ImageSize =
  | 'card'
  | 'feature'
  | 'original';

export type Link_Reference_RelationTo =
  | 'page';

export type Link_Type =
  | 'external'
  | 'internal';

export type Page_Header_Type =
  | 'default'
  | 'featuredImage';

export type Page__Status_Input =
  | 'draft'
  | 'published';

export type Page__Status_Operator = {
  all?: Array<Page__Status_Input | null | undefined> | null | undefined;
  equals?: Page__Status_Input | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<Page__Status_Input | null | undefined> | null | undefined;
  not_equals?: Page__Status_Input | null | undefined;
  not_in?: Array<Page__Status_Input | null | undefined> | null | undefined;
};

export type Page_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Page_Description_Operator = {
  contains?: unknown;
  equals?: unknown;
  exists?: boolean | null | undefined;
  like?: unknown;
  not_equals?: unknown;
};

export type Page_Header__Image_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type Page_Header__Type_Input =
  | 'default'
  | 'featuredImage';

export type Page_Header__Type_Operator = {
  all?: Array<Page_Header__Type_Input | null | undefined> | null | undefined;
  equals?: Page_Header__Type_Input | null | undefined;
  in?: Array<Page_Header__Type_Input | null | undefined> | null | undefined;
  not_equals?: Page_Header__Type_Input | null | undefined;
  not_in?: Array<Page_Header__Type_Input | null | undefined> | null | undefined;
};

export type Page_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Page_IsPlaceholder_Operator = {
  equals?: boolean | null | undefined;
  exists?: boolean | null | undefined;
  not_equals?: boolean | null | undefined;
};

export type Page_Meta__Description_Operator = {
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
};

export type Page_Meta__Image_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type Page_Meta__NoIndex_Operator = {
  equals?: boolean | null | undefined;
  exists?: boolean | null | undefined;
  not_equals?: boolean | null | undefined;
};

export type Page_Meta__Title_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Page_Slug_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Page_Title_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Page_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Page_Where = {
  AND?: Array<Page_Where_And | null | undefined> | null | undefined;
  OR?: Array<Page_Where_Or | null | undefined> | null | undefined;
  _status?: Page__Status_Operator | null | undefined;
  createdAt?: Page_CreatedAt_Operator | null | undefined;
  description?: Page_Description_Operator | null | undefined;
  header__image?: Page_Header__Image_Operator | null | undefined;
  header__type?: Page_Header__Type_Operator | null | undefined;
  id?: Page_Id_Operator | null | undefined;
  isPlaceholder?: Page_IsPlaceholder_Operator | null | undefined;
  meta__description?: Page_Meta__Description_Operator | null | undefined;
  meta__image?: Page_Meta__Image_Operator | null | undefined;
  meta__noIndex?: Page_Meta__NoIndex_Operator | null | undefined;
  meta__title?: Page_Meta__Title_Operator | null | undefined;
  slug?: Page_Slug_Operator | null | undefined;
  title?: Page_Title_Operator | null | undefined;
  updatedAt?: Page_UpdatedAt_Operator | null | undefined;
};

export type Page_Where_And = {
  AND?: Array<Page_Where_And | null | undefined> | null | undefined;
  OR?: Array<Page_Where_Or | null | undefined> | null | undefined;
  _status?: Page__Status_Operator | null | undefined;
  createdAt?: Page_CreatedAt_Operator | null | undefined;
  description?: Page_Description_Operator | null | undefined;
  header__image?: Page_Header__Image_Operator | null | undefined;
  header__type?: Page_Header__Type_Operator | null | undefined;
  id?: Page_Id_Operator | null | undefined;
  isPlaceholder?: Page_IsPlaceholder_Operator | null | undefined;
  meta__description?: Page_Meta__Description_Operator | null | undefined;
  meta__image?: Page_Meta__Image_Operator | null | undefined;
  meta__noIndex?: Page_Meta__NoIndex_Operator | null | undefined;
  meta__title?: Page_Meta__Title_Operator | null | undefined;
  slug?: Page_Slug_Operator | null | undefined;
  title?: Page_Title_Operator | null | undefined;
  updatedAt?: Page_UpdatedAt_Operator | null | undefined;
};

export type Page_Where_Or = {
  AND?: Array<Page_Where_And | null | undefined> | null | undefined;
  OR?: Array<Page_Where_Or | null | undefined> | null | undefined;
  _status?: Page__Status_Operator | null | undefined;
  createdAt?: Page_CreatedAt_Operator | null | undefined;
  description?: Page_Description_Operator | null | undefined;
  header__image?: Page_Header__Image_Operator | null | undefined;
  header__type?: Page_Header__Type_Operator | null | undefined;
  id?: Page_Id_Operator | null | undefined;
  isPlaceholder?: Page_IsPlaceholder_Operator | null | undefined;
  meta__description?: Page_Meta__Description_Operator | null | undefined;
  meta__image?: Page_Meta__Image_Operator | null | undefined;
  meta__noIndex?: Page_Meta__NoIndex_Operator | null | undefined;
  meta__title?: Page_Meta__Title_Operator | null | undefined;
  slug?: Page_Slug_Operator | null | undefined;
  title?: Page_Title_Operator | null | undefined;
  updatedAt?: Page_UpdatedAt_Operator | null | undefined;
};

export type ContentBlockFragmentFragment = { content: unknown, id: string | null, blockName: string | null, blockType: string | null, blockSettings: { margin: { marginBottom: BlockSettings_Margin_MarginBottom | null } | null, padding: { paddingBottom: BlockSettings_Padding_PaddingBottom | null, paddingLeft: BlockSettings_Padding_PaddingLeft | null, paddingRight: BlockSettings_Padding_PaddingRight | null, paddingTop: BlockSettings_Padding_PaddingTop | null } | null } | null };

export type ImageBlockFragmentFragment = { caption: unknown, id: string | null, blockName: string | null, blockType: string | null, imageSize: Image_ImageSize | null, blockSettings: { margin: { marginBottom: BlockSettings_Margin_MarginBottom | null } | null, padding: { paddingBottom: BlockSettings_Padding_PaddingBottom | null, paddingLeft: BlockSettings_Padding_PaddingLeft | null, paddingRight: BlockSettings_Padding_PaddingRight | null, paddingTop: BlockSettings_Padding_PaddingTop | null } | null } | null, image: { id: string, alt: string, updatedAt: unknown, createdAt: unknown, url: string | null, filename: string | null, mimeType: string | null, filesize: number | null, width: number | null, height: number | null, focalX: number | null, focalY: number | null, sizes: { card: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null, feature: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null } | null } | null };

export type BlockSettingsFieldFragmentFragment = { margin: { marginBottom: BlockSettings_Margin_MarginBottom | null } | null, padding: { paddingBottom: BlockSettings_Padding_PaddingBottom | null, paddingLeft: BlockSettings_Padding_PaddingLeft | null, paddingRight: BlockSettings_Padding_PaddingRight | null, paddingTop: BlockSettings_Padding_PaddingTop | null } | null };

export type LinkFieldFragmentFragment = { label: string | null, url: string | null, type: Link_Type | null, reference: { relationTo: Link_Reference_RelationTo | null, value: { title: string | null, slug: string | null } | null } | null };

export type MediaFieldFragmentFragment = { id: string, alt: string, updatedAt: unknown, createdAt: unknown, url: string | null, filename: string | null, mimeType: string | null, filesize: number | null, width: number | null, height: number | null, focalX: number | null, focalY: number | null, sizes: { card: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null, feature: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null } | null };

export type FooterMenuQueryVariables = Exact<{
  draft?: boolean | null | undefined;
}>;


export type FooterMenuQuery = { FooterMenu: { menuGroups: Array<{ id: string | null, menuGroup: { title: string | null, links: Array<{ id: string | null, link: { label: string | null, url: string | null, type: Link_Type | null, reference: { relationTo: Link_Reference_RelationTo | null, value: { title: string | null, slug: string | null } | null } | null } | null }> | null } | null }> | null } | null };

export type HeaderMenuQueryVariables = Exact<{
  draft?: boolean | null | undefined;
}>;


export type HeaderMenuQuery = { HeaderMenu: { links: Array<{ id: string | null, link: { label: string | null, url: string | null, type: Link_Type | null, reference: { relationTo: Link_Reference_RelationTo | null, value: { title: string | null, slug: string | null } | null } | null } | null }> | null } | null };

export type PagesQueryVariables = Exact<{
  draft?: boolean | null | undefined;
  where?: Page_Where | null | undefined;
  limit?: number | null | undefined;
  page?: number | null | undefined;
  sort?: string | null | undefined;
}>;


export type PagesQuery = { Pages: { docs: Array<{ id: string, title: string | null, description: unknown, slug: string | null, updatedAt: unknown, createdAt: unknown, header: { type: Page_Header_Type | null, image: { id: string, alt: string, updatedAt: unknown, createdAt: unknown, url: string | null, filename: string | null, mimeType: string | null, filesize: number | null, width: number | null, height: number | null, focalX: number | null, focalY: number | null, sizes: { card: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null, feature: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null } | null } | null } | null, layout: { blocks: Array<
          | { content: unknown, id: string | null, blockName: string | null, blockType: string | null, blockSettings: { margin: { marginBottom: BlockSettings_Margin_MarginBottom | null } | null, padding: { paddingBottom: BlockSettings_Padding_PaddingBottom | null, paddingLeft: BlockSettings_Padding_PaddingLeft | null, paddingRight: BlockSettings_Padding_PaddingRight | null, paddingTop: BlockSettings_Padding_PaddingTop | null } | null } | null }
          | { caption: unknown, id: string | null, blockName: string | null, blockType: string | null, imageSize: Image_ImageSize | null, blockSettings: { margin: { marginBottom: BlockSettings_Margin_MarginBottom | null } | null, padding: { paddingBottom: BlockSettings_Padding_PaddingBottom | null, paddingLeft: BlockSettings_Padding_PaddingLeft | null, paddingRight: BlockSettings_Padding_PaddingRight | null, paddingTop: BlockSettings_Padding_PaddingTop | null } | null } | null, image: { id: string, alt: string, updatedAt: unknown, createdAt: unknown, url: string | null, filename: string | null, mimeType: string | null, filesize: number | null, width: number | null, height: number | null, focalX: number | null, focalY: number | null, sizes: { card: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null, feature: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null } | null } | null }
        > | null } | null, meta: { title: string | null, description: string | null, image: { id: string, alt: string, updatedAt: unknown, createdAt: unknown, url: string | null, filename: string | null, mimeType: string | null, filesize: number | null, width: number | null, height: number | null, focalX: number | null, focalY: number | null, sizes: { card: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null, feature: { url: string | null, width: number | null, height: number | null, mimeType: string | null, filesize: number | null, filename: string | null } | null } | null } | null } | null }> } | null };

export const BlockSettingsFieldFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettingsFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"margin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"}}]}}]}}]} as unknown as DocumentNode<BlockSettingsFieldFragmentFragment, unknown>;
export const ContentBlockFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Content"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettingsFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettingsFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"margin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"}}]}}]}}]} as unknown as DocumentNode<ContentBlockFragmentFragment, unknown>;
export const MediaFieldFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]} as unknown as DocumentNode<MediaFieldFragmentFragment, unknown>;
export const ImageBlockFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBlockFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettingsFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"imageSize"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettingsFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"margin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}}]} as unknown as DocumentNode<ImageBlockFragmentFragment, unknown>;
export const LinkFieldFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"reference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationTo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<LinkFieldFragmentFragment, unknown>;
export const FooterMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FooterMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"FooterMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"menuGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFieldFragment"}}]}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"reference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationTo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<FooterMenuQuery, FooterMenuQueryVariables>;
export const HeaderMenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HeaderMenu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HeaderMenu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LinkFieldFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LinkFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Link"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"reference"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Page"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationTo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]} as unknown as DocumentNode<HeaderMenuQuery, HeaderMenuQueryVariables>;
export const PagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Page_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Pages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"header"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFieldFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentBlockFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageBlockFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFieldFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlockSettingsFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlockSettings"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"margin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marginBottom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"padding"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paddingBottom"}},{"kind":"Field","name":{"kind":"Name","value":"paddingLeft"}},{"kind":"Field","name":{"kind":"Name","value":"paddingRight"}},{"kind":"Field","name":{"kind":"Name","value":"paddingTop"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFieldFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Media"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"focalX"}},{"kind":"Field","name":{"kind":"Name","value":"focalY"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"card"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"filesize"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentBlockFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Content"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettingsFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageBlockFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlockSettingsFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFieldFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"caption"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockName"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}},{"kind":"Field","name":{"kind":"Name","value":"imageSize"}}]}}]} as unknown as DocumentNode<PagesQuery, PagesQueryVariables>;
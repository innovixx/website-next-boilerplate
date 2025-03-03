import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type ContentBlockFragmentFragment = { __typename?: 'Content', content?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null };

export type ImageBlockFragmentFragment = { __typename?: 'Image', caption?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null, imageSize?: Image_ImageSize | null, image?: { __typename?: 'Media', id: string, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } | null };

export type MediaFieldFragmentFragment = { __typename?: 'Media', id: string, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null };

export type FooterMenuQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']>;
}>;


export type FooterMenuQuery = { __typename?: 'Query', FooterMenu?: { __typename?: 'FooterMenu', menuGroups?: Array<{ __typename?: 'FooterMenu_MenuGroups', text?: string | null, id?: string | null, links?: Array<{ __typename?: 'FooterMenu_MenuGroups_Links', id?: string | null, link?: { __typename?: 'Link', type?: Link_Type | null, label?: string | null, url?: string | null, reference?: { __typename?: 'Link_Reference_Relationship', relationTo?: Link_Reference_RelationTo | null, value?: { __typename?: 'Page', title?: string | null, slug?: string | null } | null } | null } | null }> | null }> | null } | null };

export type HeaderMenuQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']>;
}>;


export type HeaderMenuQuery = { __typename?: 'Query', HeaderMenu?: { __typename?: 'HeaderMenu', links?: Array<{ __typename?: 'HeaderMenu_Links', id?: string | null, link?: { __typename?: 'Link', label?: string | null, type?: Link_Type | null, url?: string | null, reference?: { __typename?: 'Link_Reference_Relationship', relationTo?: Link_Reference_RelationTo | null, value?: { __typename?: 'Page', title?: string | null, slug?: string | null } | null } | null } | null }> | null } | null };

export type PagesQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Page_Where>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type PagesQuery = { __typename?: 'Query', Pages?: { __typename?: 'Pages', docs?: Array<{ __typename?: 'Page', id: string, title?: string | null, description?: any | null, slug?: string | null, updatedAt?: any | null, createdAt?: any | null, header?: { __typename?: 'Page_Header', type?: Page_Header_Type | null, image?: { __typename?: 'Media', id: string, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } | null } | null, layout?: { __typename?: 'Page_Layout', blocks?: Array<{ __typename?: 'Content', content?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null } | { __typename?: 'Image', caption?: any | null, id?: string | null, blockName?: string | null, blockType?: string | null, imageSize?: Image_ImageSize | null, image?: { __typename?: 'Media', id: string, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } | null }> | null } | null, meta?: { __typename?: 'Page_Meta', title?: string | null, description?: string | null, image?: { __typename?: 'Media', id: string, alt: string, updatedAt?: any | null, createdAt?: any | null, url?: string | null, filename?: string | null, mimeType?: string | null, filesize?: number | null, width?: number | null, height?: number | null, focalX?: number | null, focalY?: number | null, sizes?: { __typename?: 'Media_Sizes', card?: { __typename?: 'Media_Sizes_Card', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null, feature?: { __typename?: 'Media_Sizes_Feature', url?: string | null, width?: number | null, height?: number | null, mimeType?: string | null, filesize?: number | null, filename?: string | null } | null } | null } | null } | null } | null> | null } | null };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  JSONObject: any;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean'];
  footer_menu?: Maybe<Footer_MenuAccess>;
  header_menu?: Maybe<Header_MenuAccess>;
  media?: Maybe<MediaAccess>;
  page?: Maybe<PageAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  user?: Maybe<UserAccess>;
};

export type Content = {
  __typename?: 'Content';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
};


export type ContentContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type FooterMenu = {
  __typename?: 'FooterMenu';
  createdAt?: Maybe<Scalars['DateTime']>;
  menuGroups?: Maybe<Array<FooterMenu_MenuGroups>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FooterMenuDocAccessFields = {
  __typename?: 'FooterMenuDocAccessFields';
  createdAt?: Maybe<FooterMenuDocAccessFields_CreatedAt>;
  menuGroups?: Maybe<FooterMenuDocAccessFields_MenuGroups>;
  updatedAt?: Maybe<FooterMenuDocAccessFields_UpdatedAt>;
};

export type FooterMenuDocAccessFields_CreatedAt = {
  __typename?: 'FooterMenuDocAccessFields_createdAt';
  create?: Maybe<FooterMenuDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FooterMenuDocAccessFields_CreatedAt_Update>;
};

export type FooterMenuDocAccessFields_CreatedAt_Create = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_CreatedAt_Read = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_CreatedAt_Update = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Fields';
  id?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id>;
  links?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links>;
  text?: Maybe<FooterMenuDocAccessFields_MenuGroups_Text>;
};

export type FooterMenuDocAccessFields_MenuGroups_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_Fields';
  id?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Id>;
  link?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Id = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_id';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Id_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Id_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Id_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Id_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Id_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_id_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Id_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_id_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Id_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_id_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Id_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_id_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_Fields';
  label?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Label>;
  reference?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference>;
  type?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Type>;
  url?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Url>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Label = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_label';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_label_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_label_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_label_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Label_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_label_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_reference';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_reference_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_reference_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_reference_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Reference_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_reference_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Type = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_type';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_type_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_type_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_type_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Type_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_type_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Url = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_url';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_url_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_url_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_url_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Links_Link_Url_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_links_link_url_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Text = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_text';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_Text_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_Text_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_Text_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_Text_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_Text_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_text_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Text_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_text_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Text_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_text_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_MenuGroups_Text_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_text_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_UpdatedAt = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt';
  create?: Maybe<FooterMenuDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FooterMenuDocAccessFields_UpdatedAt_Update>;
};

export type FooterMenuDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields = {
  __typename?: 'FooterMenuFields';
  createdAt?: Maybe<FooterMenuFields_CreatedAt>;
  menuGroups?: Maybe<FooterMenuFields_MenuGroups>;
  updatedAt?: Maybe<FooterMenuFields_UpdatedAt>;
};

export type FooterMenuFields_CreatedAt = {
  __typename?: 'FooterMenuFields_createdAt';
  create?: Maybe<FooterMenuFields_CreatedAt_Create>;
  delete?: Maybe<FooterMenuFields_CreatedAt_Delete>;
  read?: Maybe<FooterMenuFields_CreatedAt_Read>;
  update?: Maybe<FooterMenuFields_CreatedAt_Update>;
};

export type FooterMenuFields_CreatedAt_Create = {
  __typename?: 'FooterMenuFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_CreatedAt_Delete = {
  __typename?: 'FooterMenuFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_CreatedAt_Read = {
  __typename?: 'FooterMenuFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_CreatedAt_Update = {
  __typename?: 'FooterMenuFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups = {
  __typename?: 'FooterMenuFields_menuGroups';
  create?: Maybe<FooterMenuFields_MenuGroups_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Update>;
};

export type FooterMenuFields_MenuGroups_Create = {
  __typename?: 'FooterMenuFields_menuGroups_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_Fields';
  id?: Maybe<FooterMenuFields_MenuGroups_Id>;
  links?: Maybe<FooterMenuFields_MenuGroups_Links>;
  text?: Maybe<FooterMenuFields_MenuGroups_Text>;
};

export type FooterMenuFields_MenuGroups_Read = {
  __typename?: 'FooterMenuFields_menuGroups_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Update = {
  __typename?: 'FooterMenuFields_menuGroups_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Id = {
  __typename?: 'FooterMenuFields_menuGroups_id';
  create?: Maybe<FooterMenuFields_MenuGroups_Id_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Id_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Id_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Id_Update>;
};

export type FooterMenuFields_MenuGroups_Id_Create = {
  __typename?: 'FooterMenuFields_menuGroups_id_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Id_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_id_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Id_Read = {
  __typename?: 'FooterMenuFields_menuGroups_id_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Id_Update = {
  __typename?: 'FooterMenuFields_menuGroups_id_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links = {
  __typename?: 'FooterMenuFields_menuGroups_links';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_Links_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_links_Fields';
  id?: Maybe<FooterMenuFields_MenuGroups_Links_Id>;
  link?: Maybe<FooterMenuFields_MenuGroups_Links_Link>;
};

export type FooterMenuFields_MenuGroups_Links_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Id = {
  __typename?: 'FooterMenuFields_menuGroups_links_id';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Id_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Id_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Id_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Id_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Id_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_id_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Id_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_id_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Id_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_id_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Id_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_id_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link = {
  __typename?: 'FooterMenuFields_menuGroups_links_link';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_Fields';
  label?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Label>;
  reference?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Reference>;
  type?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Type>;
  url?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Url>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Label = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_label';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Label_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Label_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Label_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Label_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Label_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_label_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Label_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_label_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Label_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_label_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Label_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_label_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Reference = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_reference';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Reference_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Reference_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Reference_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Reference_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Reference_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_reference_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Reference_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_reference_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Reference_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_reference_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Reference_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_reference_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Type = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_type';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Type_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Type_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Type_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Type_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Type_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_type_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Type_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_type_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Type_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_type_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Type_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_type_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Url = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_url';
  create?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Url_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Url_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Url_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Links_Link_Url_Update>;
};

export type FooterMenuFields_MenuGroups_Links_Link_Url_Create = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_url_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Url_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_url_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Url_Read = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_url_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Links_Link_Url_Update = {
  __typename?: 'FooterMenuFields_menuGroups_links_link_url_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Text = {
  __typename?: 'FooterMenuFields_menuGroups_text';
  create?: Maybe<FooterMenuFields_MenuGroups_Text_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_Text_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_Text_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_Text_Update>;
};

export type FooterMenuFields_MenuGroups_Text_Create = {
  __typename?: 'FooterMenuFields_menuGroups_text_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Text_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_text_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Text_Read = {
  __typename?: 'FooterMenuFields_menuGroups_text_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_MenuGroups_Text_Update = {
  __typename?: 'FooterMenuFields_menuGroups_text_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_UpdatedAt = {
  __typename?: 'FooterMenuFields_updatedAt';
  create?: Maybe<FooterMenuFields_UpdatedAt_Create>;
  delete?: Maybe<FooterMenuFields_UpdatedAt_Delete>;
  read?: Maybe<FooterMenuFields_UpdatedAt_Read>;
  update?: Maybe<FooterMenuFields_UpdatedAt_Update>;
};

export type FooterMenuFields_UpdatedAt_Create = {
  __typename?: 'FooterMenuFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_UpdatedAt_Delete = {
  __typename?: 'FooterMenuFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_UpdatedAt_Read = {
  __typename?: 'FooterMenuFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type FooterMenuFields_UpdatedAt_Update = {
  __typename?: 'FooterMenuFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type FooterMenuReadAccess = {
  __typename?: 'FooterMenuReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FooterMenuReadDocAccess = {
  __typename?: 'FooterMenuReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FooterMenuUpdateAccess = {
  __typename?: 'FooterMenuUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FooterMenuUpdateDocAccess = {
  __typename?: 'FooterMenuUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type FooterMenu_MenuGroups = {
  __typename?: 'FooterMenu_MenuGroups';
  id?: Maybe<Scalars['String']>;
  links?: Maybe<Array<FooterMenu_MenuGroups_Links>>;
  text?: Maybe<Scalars['String']>;
};

export type FooterMenu_MenuGroups_Links = {
  __typename?: 'FooterMenu_MenuGroups_Links';
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
};

export type FooterMenu_MenuGroups_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<FooterMenu_MenuGroups_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum FooterMenu_MenuGroups_Links_Link_ReferenceRelationshipInputRelationTo {
  Page = 'page'
}

export type HeaderMenu = {
  __typename?: 'HeaderMenu';
  createdAt?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Array<HeaderMenu_Links>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type HeaderMenuDocAccessFields = {
  __typename?: 'HeaderMenuDocAccessFields';
  createdAt?: Maybe<HeaderMenuDocAccessFields_CreatedAt>;
  links?: Maybe<HeaderMenuDocAccessFields_Links>;
  updatedAt?: Maybe<HeaderMenuDocAccessFields_UpdatedAt>;
};

export type HeaderMenuDocAccessFields_CreatedAt = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt';
  create?: Maybe<HeaderMenuDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_CreatedAt_Update>;
};

export type HeaderMenuDocAccessFields_CreatedAt_Create = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Read = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Update = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links = {
  __typename?: 'HeaderMenuDocAccessFields_links';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Delete>;
  fields?: Maybe<HeaderMenuDocAccessFields_Links_Fields>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Update>;
};

export type HeaderMenuDocAccessFields_Links_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Fields = {
  __typename?: 'HeaderMenuDocAccessFields_links_Fields';
  id?: Maybe<HeaderMenuDocAccessFields_Links_Id>;
  link?: Maybe<HeaderMenuDocAccessFields_Links_Link>;
};

export type HeaderMenuDocAccessFields_Links_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Id = {
  __typename?: 'HeaderMenuDocAccessFields_links_id';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Id_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Id_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Id_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Id_Update>;
};

export type HeaderMenuDocAccessFields_Links_Id_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Id_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Id_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Id_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link = {
  __typename?: 'HeaderMenuDocAccessFields_links_link';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Link_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Link_Delete>;
  fields?: Maybe<HeaderMenuDocAccessFields_Links_Link_Fields>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Link_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Link_Update>;
};

export type HeaderMenuDocAccessFields_Links_Link_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Fields = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Fields';
  label?: Maybe<HeaderMenuDocAccessFields_Links_Link_Label>;
  reference?: Maybe<HeaderMenuDocAccessFields_Links_Link_Reference>;
  type?: Maybe<HeaderMenuDocAccessFields_Links_Link_Type>;
  url?: Maybe<HeaderMenuDocAccessFields_Links_Link_Url>;
};

export type HeaderMenuDocAccessFields_Links_Link_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Link_Label_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Link_Label_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Link_Label_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Link_Label_Update>;
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Link_Reference_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Link_Reference_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Link_Reference_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Link_Reference_Update>;
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Link_Type_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Link_Type_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Link_Type_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Link_Type_Update>;
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url';
  create?: Maybe<HeaderMenuDocAccessFields_Links_Link_Url_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_Links_Link_Url_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_Links_Link_Url_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_Links_Link_Url_Update>;
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Create = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_UpdatedAt = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt';
  create?: Maybe<HeaderMenuDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderMenuDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderMenuDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HeaderMenuDocAccessFields_UpdatedAt_Update>;
};

export type HeaderMenuDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields = {
  __typename?: 'HeaderMenuFields';
  createdAt?: Maybe<HeaderMenuFields_CreatedAt>;
  links?: Maybe<HeaderMenuFields_Links>;
  updatedAt?: Maybe<HeaderMenuFields_UpdatedAt>;
};

export type HeaderMenuFields_CreatedAt = {
  __typename?: 'HeaderMenuFields_createdAt';
  create?: Maybe<HeaderMenuFields_CreatedAt_Create>;
  delete?: Maybe<HeaderMenuFields_CreatedAt_Delete>;
  read?: Maybe<HeaderMenuFields_CreatedAt_Read>;
  update?: Maybe<HeaderMenuFields_CreatedAt_Update>;
};

export type HeaderMenuFields_CreatedAt_Create = {
  __typename?: 'HeaderMenuFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_CreatedAt_Delete = {
  __typename?: 'HeaderMenuFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_CreatedAt_Read = {
  __typename?: 'HeaderMenuFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_CreatedAt_Update = {
  __typename?: 'HeaderMenuFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links = {
  __typename?: 'HeaderMenuFields_links';
  create?: Maybe<HeaderMenuFields_Links_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Delete>;
  fields?: Maybe<HeaderMenuFields_Links_Fields>;
  read?: Maybe<HeaderMenuFields_Links_Read>;
  update?: Maybe<HeaderMenuFields_Links_Update>;
};

export type HeaderMenuFields_Links_Create = {
  __typename?: 'HeaderMenuFields_links_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Delete = {
  __typename?: 'HeaderMenuFields_links_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Fields = {
  __typename?: 'HeaderMenuFields_links_Fields';
  id?: Maybe<HeaderMenuFields_Links_Id>;
  link?: Maybe<HeaderMenuFields_Links_Link>;
};

export type HeaderMenuFields_Links_Read = {
  __typename?: 'HeaderMenuFields_links_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Update = {
  __typename?: 'HeaderMenuFields_links_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Id = {
  __typename?: 'HeaderMenuFields_links_id';
  create?: Maybe<HeaderMenuFields_Links_Id_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Id_Delete>;
  read?: Maybe<HeaderMenuFields_Links_Id_Read>;
  update?: Maybe<HeaderMenuFields_Links_Id_Update>;
};

export type HeaderMenuFields_Links_Id_Create = {
  __typename?: 'HeaderMenuFields_links_id_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Id_Delete = {
  __typename?: 'HeaderMenuFields_links_id_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Id_Read = {
  __typename?: 'HeaderMenuFields_links_id_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Id_Update = {
  __typename?: 'HeaderMenuFields_links_id_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link = {
  __typename?: 'HeaderMenuFields_links_link';
  create?: Maybe<HeaderMenuFields_Links_Link_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Link_Delete>;
  fields?: Maybe<HeaderMenuFields_Links_Link_Fields>;
  read?: Maybe<HeaderMenuFields_Links_Link_Read>;
  update?: Maybe<HeaderMenuFields_Links_Link_Update>;
};

export type HeaderMenuFields_Links_Link_Create = {
  __typename?: 'HeaderMenuFields_links_link_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Delete = {
  __typename?: 'HeaderMenuFields_links_link_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Fields = {
  __typename?: 'HeaderMenuFields_links_link_Fields';
  label?: Maybe<HeaderMenuFields_Links_Link_Label>;
  reference?: Maybe<HeaderMenuFields_Links_Link_Reference>;
  type?: Maybe<HeaderMenuFields_Links_Link_Type>;
  url?: Maybe<HeaderMenuFields_Links_Link_Url>;
};

export type HeaderMenuFields_Links_Link_Read = {
  __typename?: 'HeaderMenuFields_links_link_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Update = {
  __typename?: 'HeaderMenuFields_links_link_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Label = {
  __typename?: 'HeaderMenuFields_links_link_label';
  create?: Maybe<HeaderMenuFields_Links_Link_Label_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Link_Label_Delete>;
  read?: Maybe<HeaderMenuFields_Links_Link_Label_Read>;
  update?: Maybe<HeaderMenuFields_Links_Link_Label_Update>;
};

export type HeaderMenuFields_Links_Link_Label_Create = {
  __typename?: 'HeaderMenuFields_links_link_label_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Label_Delete = {
  __typename?: 'HeaderMenuFields_links_link_label_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Label_Read = {
  __typename?: 'HeaderMenuFields_links_link_label_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Label_Update = {
  __typename?: 'HeaderMenuFields_links_link_label_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Reference = {
  __typename?: 'HeaderMenuFields_links_link_reference';
  create?: Maybe<HeaderMenuFields_Links_Link_Reference_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Link_Reference_Delete>;
  read?: Maybe<HeaderMenuFields_Links_Link_Reference_Read>;
  update?: Maybe<HeaderMenuFields_Links_Link_Reference_Update>;
};

export type HeaderMenuFields_Links_Link_Reference_Create = {
  __typename?: 'HeaderMenuFields_links_link_reference_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Reference_Delete = {
  __typename?: 'HeaderMenuFields_links_link_reference_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Reference_Read = {
  __typename?: 'HeaderMenuFields_links_link_reference_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Reference_Update = {
  __typename?: 'HeaderMenuFields_links_link_reference_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Type = {
  __typename?: 'HeaderMenuFields_links_link_type';
  create?: Maybe<HeaderMenuFields_Links_Link_Type_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Link_Type_Delete>;
  read?: Maybe<HeaderMenuFields_Links_Link_Type_Read>;
  update?: Maybe<HeaderMenuFields_Links_Link_Type_Update>;
};

export type HeaderMenuFields_Links_Link_Type_Create = {
  __typename?: 'HeaderMenuFields_links_link_type_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Type_Delete = {
  __typename?: 'HeaderMenuFields_links_link_type_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Type_Read = {
  __typename?: 'HeaderMenuFields_links_link_type_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Type_Update = {
  __typename?: 'HeaderMenuFields_links_link_type_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Url = {
  __typename?: 'HeaderMenuFields_links_link_url';
  create?: Maybe<HeaderMenuFields_Links_Link_Url_Create>;
  delete?: Maybe<HeaderMenuFields_Links_Link_Url_Delete>;
  read?: Maybe<HeaderMenuFields_Links_Link_Url_Read>;
  update?: Maybe<HeaderMenuFields_Links_Link_Url_Update>;
};

export type HeaderMenuFields_Links_Link_Url_Create = {
  __typename?: 'HeaderMenuFields_links_link_url_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Url_Delete = {
  __typename?: 'HeaderMenuFields_links_link_url_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Url_Read = {
  __typename?: 'HeaderMenuFields_links_link_url_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_Links_Link_Url_Update = {
  __typename?: 'HeaderMenuFields_links_link_url_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_UpdatedAt = {
  __typename?: 'HeaderMenuFields_updatedAt';
  create?: Maybe<HeaderMenuFields_UpdatedAt_Create>;
  delete?: Maybe<HeaderMenuFields_UpdatedAt_Delete>;
  read?: Maybe<HeaderMenuFields_UpdatedAt_Read>;
  update?: Maybe<HeaderMenuFields_UpdatedAt_Update>;
};

export type HeaderMenuFields_UpdatedAt_Create = {
  __typename?: 'HeaderMenuFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_UpdatedAt_Delete = {
  __typename?: 'HeaderMenuFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_UpdatedAt_Read = {
  __typename?: 'HeaderMenuFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type HeaderMenuFields_UpdatedAt_Update = {
  __typename?: 'HeaderMenuFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type HeaderMenuReadAccess = {
  __typename?: 'HeaderMenuReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HeaderMenuReadDocAccess = {
  __typename?: 'HeaderMenuReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HeaderMenuUpdateAccess = {
  __typename?: 'HeaderMenuUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HeaderMenuUpdateDocAccess = {
  __typename?: 'HeaderMenuUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HeaderMenu_Links = {
  __typename?: 'HeaderMenu_Links';
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Link>;
};

export type HeaderMenu_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<HeaderMenu_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum HeaderMenu_Links_Link_ReferenceRelationshipInputRelationTo {
  Page = 'page'
}

export type Image = {
  __typename?: 'Image';
  blockName?: Maybe<Scalars['String']>;
  blockType?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['JSON']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  imageSize?: Maybe<Image_ImageSize>;
};


export type ImageCaptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export enum Image_ImageSize {
  Card = 'card',
  Feature = 'feature',
  Original = 'original'
}

export type Link = {
  __typename?: 'Link';
  label?: Maybe<Scalars['String']>;
  reference?: Maybe<Link_Reference_Relationship>;
  type?: Maybe<Link_Type>;
  url?: Maybe<Scalars['String']>;
};


export type LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};

export type Link_Reference = Page;

export enum Link_Reference_RelationTo {
  Page = 'page'
}

export type Link_Reference_Relationship = {
  __typename?: 'Link_Reference_Relationship';
  relationTo?: Maybe<Link_Reference_RelationTo>;
  value?: Maybe<Link_Reference>;
};

export enum Link_Type {
  External = 'external',
  Internal = 'internal'
}

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  focalX?: Maybe<Scalars['Float']>;
  focalY?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card = {
  __typename?: 'MediaDocAccessFields_sizes_card';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Card_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_card_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Card_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Card_Width>;
};

export type MediaDocAccessFields_Sizes_Card_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height = {
  __typename?: 'MediaDocAccessFields_sizes_card_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url = {
  __typename?: 'MediaDocAccessFields_sizes_card_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width = {
  __typename?: 'MediaDocAccessFields_sizes_card_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Card_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  __typename?: 'MediaDocAccessFields_sizes_feature';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  feature?: Maybe<MediaFields_Sizes_Feature>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card = {
  __typename?: 'MediaFields_sizes_card';
  create?: Maybe<MediaFields_Sizes_Card_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Delete>;
  fields?: Maybe<MediaFields_Sizes_Card_Fields>;
  read?: Maybe<MediaFields_Sizes_Card_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Update>;
};

export type MediaFields_Sizes_Card_Create = {
  __typename?: 'MediaFields_sizes_card_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Fields = {
  __typename?: 'MediaFields_sizes_card_Fields';
  filename?: Maybe<MediaFields_Sizes_Card_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Card_Filesize>;
  height?: Maybe<MediaFields_Sizes_Card_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Card_MimeType>;
  url?: Maybe<MediaFields_Sizes_Card_Url>;
  width?: Maybe<MediaFields_Sizes_Card_Width>;
};

export type MediaFields_Sizes_Card_Read = {
  __typename?: 'MediaFields_sizes_card_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename = {
  __typename?: 'MediaFields_sizes_card_filename';
  create?: Maybe<MediaFields_Sizes_Card_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filename_Update>;
};

export type MediaFields_Sizes_Card_Filename_Create = {
  __typename?: 'MediaFields_sizes_card_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize = {
  __typename?: 'MediaFields_sizes_card_filesize';
  create?: Maybe<MediaFields_Sizes_Card_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Filesize_Update>;
};

export type MediaFields_Sizes_Card_Filesize_Create = {
  __typename?: 'MediaFields_sizes_card_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height = {
  __typename?: 'MediaFields_sizes_card_height';
  create?: Maybe<MediaFields_Sizes_Card_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Height_Update>;
};

export type MediaFields_Sizes_Card_Height_Create = {
  __typename?: 'MediaFields_sizes_card_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType = {
  __typename?: 'MediaFields_sizes_card_mimeType';
  create?: Maybe<MediaFields_Sizes_Card_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Card_MimeType_Update>;
};

export type MediaFields_Sizes_Card_MimeType_Create = {
  __typename?: 'MediaFields_sizes_card_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url = {
  __typename?: 'MediaFields_sizes_card_url';
  create?: Maybe<MediaFields_Sizes_Card_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Url_Update>;
};

export type MediaFields_Sizes_Card_Url_Create = {
  __typename?: 'MediaFields_sizes_card_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width = {
  __typename?: 'MediaFields_sizes_card_width';
  create?: Maybe<MediaFields_Sizes_Card_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Card_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Card_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Card_Width_Update>;
};

export type MediaFields_Sizes_Card_Width_Create = {
  __typename?: 'MediaFields_sizes_card_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature = {
  __typename?: 'MediaFields_sizes_feature';
  create?: Maybe<MediaFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaFields_Sizes_Feature_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  __typename?: 'MediaFields_sizes_feature_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Fields = {
  __typename?: 'MediaFields_sizes_feature_Fields';
  filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaFields_Sizes_Feature_Url>;
  width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  __typename?: 'MediaFields_sizes_feature_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename = {
  __typename?: 'MediaFields_sizes_feature_filename';
  create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaFields_sizes_feature_filesize';
  create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height = {
  __typename?: 'MediaFields_sizes_feature_height';
  create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaFields_sizes_feature_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaFields_sizes_feature_mimeType';
  create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url = {
  __typename?: 'MediaFields_sizes_feature_url';
  create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaFields_sizes_feature_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width = {
  __typename?: 'MediaFields_sizes_feature_width';
  create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaFields_sizes_feature_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  feature?: Maybe<Media_Sizes_Feature>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__card__filename?: InputMaybe<Media_Sizes__Card__Filename_Operator>;
  sizes__card__filesize?: InputMaybe<Media_Sizes__Card__Filesize_Operator>;
  sizes__card__height?: InputMaybe<Media_Sizes__Card__Height_Operator>;
  sizes__card__mimeType?: InputMaybe<Media_Sizes__Card__MimeType_Operator>;
  sizes__card__url?: InputMaybe<Media_Sizes__Card__Url_Operator>;
  sizes__card__width?: InputMaybe<Media_Sizes__Card__Width_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  duplicateMedia?: Maybe<Media>;
  duplicatePage?: Maybe<Page>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UserLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UserRefreshedUser>;
  resetPasswordUser?: Maybe<UserResetPassword>;
  restoreVersionPage?: Maybe<Page>;
  unlockUser: Scalars['Boolean'];
  updateFooterMenu?: Maybe<FooterMenu>;
  updateHeaderMenu?: Maybe<HeaderMenu>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeletePageArgs = {
  id: Scalars['String'];
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['String'];
};


export type MutationDuplicatePageArgs = {
  data: MutationPageInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateFooterMenuArgs = {
  data: MutationFooterMenuInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateHeaderMenuArgs = {
  data: MutationHeaderMenuInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  header?: Maybe<Page_Header>;
  id: Scalars['String'];
  isPlaceholder?: Maybe<Scalars['Boolean']>;
  layout?: Maybe<Page_Layout>;
  meta?: Maybe<Page_Meta>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type PageCreateAccess = {
  __typename?: 'PageCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageCreateDocAccess = {
  __typename?: 'PageCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDeleteAccess = {
  __typename?: 'PageDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDeleteDocAccess = {
  __typename?: 'PageDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageDocAccessFields = {
  __typename?: 'PageDocAccessFields';
  _status?: Maybe<PageDocAccessFields__Status>;
  blocks?: Maybe<PageDocAccessFields_Blocks>;
  createdAt?: Maybe<PageDocAccessFields_CreatedAt>;
  description?: Maybe<PageDocAccessFields_Description>;
  image?: Maybe<PageDocAccessFields_Image>;
  isPlaceholder?: Maybe<PageDocAccessFields_IsPlaceholder>;
  meta?: Maybe<PageDocAccessFields_Meta>;
  slug?: Maybe<PageDocAccessFields_Slug>;
  title?: Maybe<PageDocAccessFields_Title>;
  type?: Maybe<PageDocAccessFields_Type>;
  updatedAt?: Maybe<PageDocAccessFields_UpdatedAt>;
};

export type PageDocAccessFields__Status = {
  __typename?: 'PageDocAccessFields__status';
  create?: Maybe<PageDocAccessFields__Status_Create>;
  delete?: Maybe<PageDocAccessFields__Status_Delete>;
  read?: Maybe<PageDocAccessFields__Status_Read>;
  update?: Maybe<PageDocAccessFields__Status_Update>;
};

export type PageDocAccessFields__Status_Create = {
  __typename?: 'PageDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields__Status_Delete = {
  __typename?: 'PageDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields__Status_Read = {
  __typename?: 'PageDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields__Status_Update = {
  __typename?: 'PageDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks = {
  __typename?: 'PageDocAccessFields_blocks';
  create?: Maybe<PageDocAccessFields_Blocks_Create>;
  delete?: Maybe<PageDocAccessFields_Blocks_Delete>;
  read?: Maybe<PageDocAccessFields_Blocks_Read>;
  update?: Maybe<PageDocAccessFields_Blocks_Update>;
};

export type PageDocAccessFields_Blocks_Create = {
  __typename?: 'PageDocAccessFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Delete = {
  __typename?: 'PageDocAccessFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Read = {
  __typename?: 'PageDocAccessFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Blocks_Update = {
  __typename?: 'PageDocAccessFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt = {
  __typename?: 'PageDocAccessFields_createdAt';
  create?: Maybe<PageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PageDocAccessFields_CreatedAt_Update>;
};

export type PageDocAccessFields_CreatedAt_Create = {
  __typename?: 'PageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Read = {
  __typename?: 'PageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_CreatedAt_Update = {
  __typename?: 'PageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description = {
  __typename?: 'PageDocAccessFields_description';
  create?: Maybe<PageDocAccessFields_Description_Create>;
  delete?: Maybe<PageDocAccessFields_Description_Delete>;
  read?: Maybe<PageDocAccessFields_Description_Read>;
  update?: Maybe<PageDocAccessFields_Description_Update>;
};

export type PageDocAccessFields_Description_Create = {
  __typename?: 'PageDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Delete = {
  __typename?: 'PageDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Read = {
  __typename?: 'PageDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Description_Update = {
  __typename?: 'PageDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Image = {
  __typename?: 'PageDocAccessFields_image';
  create?: Maybe<PageDocAccessFields_Image_Create>;
  delete?: Maybe<PageDocAccessFields_Image_Delete>;
  read?: Maybe<PageDocAccessFields_Image_Read>;
  update?: Maybe<PageDocAccessFields_Image_Update>;
};

export type PageDocAccessFields_Image_Create = {
  __typename?: 'PageDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Image_Delete = {
  __typename?: 'PageDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Image_Read = {
  __typename?: 'PageDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Image_Update = {
  __typename?: 'PageDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_IsPlaceholder = {
  __typename?: 'PageDocAccessFields_isPlaceholder';
  create?: Maybe<PageDocAccessFields_IsPlaceholder_Create>;
  delete?: Maybe<PageDocAccessFields_IsPlaceholder_Delete>;
  read?: Maybe<PageDocAccessFields_IsPlaceholder_Read>;
  update?: Maybe<PageDocAccessFields_IsPlaceholder_Update>;
};

export type PageDocAccessFields_IsPlaceholder_Create = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_IsPlaceholder_Delete = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_IsPlaceholder_Read = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_IsPlaceholder_Update = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta = {
  __typename?: 'PageDocAccessFields_meta';
  create?: Maybe<PageDocAccessFields_Meta_Create>;
  delete?: Maybe<PageDocAccessFields_Meta_Delete>;
  fields?: Maybe<PageDocAccessFields_Meta_Fields>;
  read?: Maybe<PageDocAccessFields_Meta_Read>;
  update?: Maybe<PageDocAccessFields_Meta_Update>;
};

export type PageDocAccessFields_Meta_Create = {
  __typename?: 'PageDocAccessFields_meta_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Delete = {
  __typename?: 'PageDocAccessFields_meta_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Fields = {
  __typename?: 'PageDocAccessFields_meta_Fields';
  description?: Maybe<PageDocAccessFields_Meta_Description>;
  image?: Maybe<PageDocAccessFields_Meta_Image>;
  noIndex?: Maybe<PageDocAccessFields_Meta_NoIndex>;
  title?: Maybe<PageDocAccessFields_Meta_Title>;
};

export type PageDocAccessFields_Meta_Read = {
  __typename?: 'PageDocAccessFields_meta_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Update = {
  __typename?: 'PageDocAccessFields_meta_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Description = {
  __typename?: 'PageDocAccessFields_meta_description';
  create?: Maybe<PageDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<PageDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<PageDocAccessFields_Meta_Description_Read>;
  update?: Maybe<PageDocAccessFields_Meta_Description_Update>;
};

export type PageDocAccessFields_Meta_Description_Create = {
  __typename?: 'PageDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PageDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Description_Read = {
  __typename?: 'PageDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Description_Update = {
  __typename?: 'PageDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Image = {
  __typename?: 'PageDocAccessFields_meta_image';
  create?: Maybe<PageDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<PageDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<PageDocAccessFields_Meta_Image_Read>;
  update?: Maybe<PageDocAccessFields_Meta_Image_Update>;
};

export type PageDocAccessFields_Meta_Image_Create = {
  __typename?: 'PageDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PageDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Image_Read = {
  __typename?: 'PageDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Image_Update = {
  __typename?: 'PageDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_NoIndex = {
  __typename?: 'PageDocAccessFields_meta_noIndex';
  create?: Maybe<PageDocAccessFields_Meta_NoIndex_Create>;
  delete?: Maybe<PageDocAccessFields_Meta_NoIndex_Delete>;
  read?: Maybe<PageDocAccessFields_Meta_NoIndex_Read>;
  update?: Maybe<PageDocAccessFields_Meta_NoIndex_Update>;
};

export type PageDocAccessFields_Meta_NoIndex_Create = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_NoIndex_Delete = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_NoIndex_Read = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_NoIndex_Update = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Title = {
  __typename?: 'PageDocAccessFields_meta_title';
  create?: Maybe<PageDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<PageDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<PageDocAccessFields_Meta_Title_Read>;
  update?: Maybe<PageDocAccessFields_Meta_Title_Update>;
};

export type PageDocAccessFields_Meta_Title_Create = {
  __typename?: 'PageDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PageDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Title_Read = {
  __typename?: 'PageDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Meta_Title_Update = {
  __typename?: 'PageDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug = {
  __typename?: 'PageDocAccessFields_slug';
  create?: Maybe<PageDocAccessFields_Slug_Create>;
  delete?: Maybe<PageDocAccessFields_Slug_Delete>;
  read?: Maybe<PageDocAccessFields_Slug_Read>;
  update?: Maybe<PageDocAccessFields_Slug_Update>;
};

export type PageDocAccessFields_Slug_Create = {
  __typename?: 'PageDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Delete = {
  __typename?: 'PageDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Read = {
  __typename?: 'PageDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Slug_Update = {
  __typename?: 'PageDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title = {
  __typename?: 'PageDocAccessFields_title';
  create?: Maybe<PageDocAccessFields_Title_Create>;
  delete?: Maybe<PageDocAccessFields_Title_Delete>;
  read?: Maybe<PageDocAccessFields_Title_Read>;
  update?: Maybe<PageDocAccessFields_Title_Update>;
};

export type PageDocAccessFields_Title_Create = {
  __typename?: 'PageDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Delete = {
  __typename?: 'PageDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Read = {
  __typename?: 'PageDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Title_Update = {
  __typename?: 'PageDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Type = {
  __typename?: 'PageDocAccessFields_type';
  create?: Maybe<PageDocAccessFields_Type_Create>;
  delete?: Maybe<PageDocAccessFields_Type_Delete>;
  read?: Maybe<PageDocAccessFields_Type_Read>;
  update?: Maybe<PageDocAccessFields_Type_Update>;
};

export type PageDocAccessFields_Type_Create = {
  __typename?: 'PageDocAccessFields_type_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Type_Delete = {
  __typename?: 'PageDocAccessFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Type_Read = {
  __typename?: 'PageDocAccessFields_type_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_Type_Update = {
  __typename?: 'PageDocAccessFields_type_Update';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt = {
  __typename?: 'PageDocAccessFields_updatedAt';
  create?: Maybe<PageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PageDocAccessFields_UpdatedAt_Update>;
};

export type PageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PageFields = {
  __typename?: 'PageFields';
  _status?: Maybe<PageFields__Status>;
  blocks?: Maybe<PageFields_Blocks>;
  createdAt?: Maybe<PageFields_CreatedAt>;
  description?: Maybe<PageFields_Description>;
  image?: Maybe<PageFields_Image>;
  isPlaceholder?: Maybe<PageFields_IsPlaceholder>;
  meta?: Maybe<PageFields_Meta>;
  slug?: Maybe<PageFields_Slug>;
  title?: Maybe<PageFields_Title>;
  type?: Maybe<PageFields_Type>;
  updatedAt?: Maybe<PageFields_UpdatedAt>;
};

export type PageFields__Status = {
  __typename?: 'PageFields__status';
  create?: Maybe<PageFields__Status_Create>;
  delete?: Maybe<PageFields__Status_Delete>;
  read?: Maybe<PageFields__Status_Read>;
  update?: Maybe<PageFields__Status_Update>;
};

export type PageFields__Status_Create = {
  __typename?: 'PageFields__status_Create';
  permission: Scalars['Boolean'];
};

export type PageFields__Status_Delete = {
  __typename?: 'PageFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields__Status_Read = {
  __typename?: 'PageFields__status_Read';
  permission: Scalars['Boolean'];
};

export type PageFields__Status_Update = {
  __typename?: 'PageFields__status_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks = {
  __typename?: 'PageFields_blocks';
  create?: Maybe<PageFields_Blocks_Create>;
  delete?: Maybe<PageFields_Blocks_Delete>;
  read?: Maybe<PageFields_Blocks_Read>;
  update?: Maybe<PageFields_Blocks_Update>;
};

export type PageFields_Blocks_Create = {
  __typename?: 'PageFields_blocks_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Delete = {
  __typename?: 'PageFields_blocks_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Read = {
  __typename?: 'PageFields_blocks_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Blocks_Update = {
  __typename?: 'PageFields_blocks_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt = {
  __typename?: 'PageFields_createdAt';
  create?: Maybe<PageFields_CreatedAt_Create>;
  delete?: Maybe<PageFields_CreatedAt_Delete>;
  read?: Maybe<PageFields_CreatedAt_Read>;
  update?: Maybe<PageFields_CreatedAt_Update>;
};

export type PageFields_CreatedAt_Create = {
  __typename?: 'PageFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Delete = {
  __typename?: 'PageFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Read = {
  __typename?: 'PageFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_CreatedAt_Update = {
  __typename?: 'PageFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Description = {
  __typename?: 'PageFields_description';
  create?: Maybe<PageFields_Description_Create>;
  delete?: Maybe<PageFields_Description_Delete>;
  read?: Maybe<PageFields_Description_Read>;
  update?: Maybe<PageFields_Description_Update>;
};

export type PageFields_Description_Create = {
  __typename?: 'PageFields_description_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Delete = {
  __typename?: 'PageFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Read = {
  __typename?: 'PageFields_description_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Description_Update = {
  __typename?: 'PageFields_description_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Image = {
  __typename?: 'PageFields_image';
  create?: Maybe<PageFields_Image_Create>;
  delete?: Maybe<PageFields_Image_Delete>;
  read?: Maybe<PageFields_Image_Read>;
  update?: Maybe<PageFields_Image_Update>;
};

export type PageFields_Image_Create = {
  __typename?: 'PageFields_image_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Image_Delete = {
  __typename?: 'PageFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Image_Read = {
  __typename?: 'PageFields_image_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Image_Update = {
  __typename?: 'PageFields_image_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_IsPlaceholder = {
  __typename?: 'PageFields_isPlaceholder';
  create?: Maybe<PageFields_IsPlaceholder_Create>;
  delete?: Maybe<PageFields_IsPlaceholder_Delete>;
  read?: Maybe<PageFields_IsPlaceholder_Read>;
  update?: Maybe<PageFields_IsPlaceholder_Update>;
};

export type PageFields_IsPlaceholder_Create = {
  __typename?: 'PageFields_isPlaceholder_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_IsPlaceholder_Delete = {
  __typename?: 'PageFields_isPlaceholder_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_IsPlaceholder_Read = {
  __typename?: 'PageFields_isPlaceholder_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_IsPlaceholder_Update = {
  __typename?: 'PageFields_isPlaceholder_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta = {
  __typename?: 'PageFields_meta';
  create?: Maybe<PageFields_Meta_Create>;
  delete?: Maybe<PageFields_Meta_Delete>;
  fields?: Maybe<PageFields_Meta_Fields>;
  read?: Maybe<PageFields_Meta_Read>;
  update?: Maybe<PageFields_Meta_Update>;
};

export type PageFields_Meta_Create = {
  __typename?: 'PageFields_meta_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Delete = {
  __typename?: 'PageFields_meta_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Fields = {
  __typename?: 'PageFields_meta_Fields';
  description?: Maybe<PageFields_Meta_Description>;
  image?: Maybe<PageFields_Meta_Image>;
  noIndex?: Maybe<PageFields_Meta_NoIndex>;
  title?: Maybe<PageFields_Meta_Title>;
};

export type PageFields_Meta_Read = {
  __typename?: 'PageFields_meta_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Update = {
  __typename?: 'PageFields_meta_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Description = {
  __typename?: 'PageFields_meta_description';
  create?: Maybe<PageFields_Meta_Description_Create>;
  delete?: Maybe<PageFields_Meta_Description_Delete>;
  read?: Maybe<PageFields_Meta_Description_Read>;
  update?: Maybe<PageFields_Meta_Description_Update>;
};

export type PageFields_Meta_Description_Create = {
  __typename?: 'PageFields_meta_description_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Description_Delete = {
  __typename?: 'PageFields_meta_description_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Description_Read = {
  __typename?: 'PageFields_meta_description_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Description_Update = {
  __typename?: 'PageFields_meta_description_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Image = {
  __typename?: 'PageFields_meta_image';
  create?: Maybe<PageFields_Meta_Image_Create>;
  delete?: Maybe<PageFields_Meta_Image_Delete>;
  read?: Maybe<PageFields_Meta_Image_Read>;
  update?: Maybe<PageFields_Meta_Image_Update>;
};

export type PageFields_Meta_Image_Create = {
  __typename?: 'PageFields_meta_image_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Image_Delete = {
  __typename?: 'PageFields_meta_image_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Image_Read = {
  __typename?: 'PageFields_meta_image_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Image_Update = {
  __typename?: 'PageFields_meta_image_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_NoIndex = {
  __typename?: 'PageFields_meta_noIndex';
  create?: Maybe<PageFields_Meta_NoIndex_Create>;
  delete?: Maybe<PageFields_Meta_NoIndex_Delete>;
  read?: Maybe<PageFields_Meta_NoIndex_Read>;
  update?: Maybe<PageFields_Meta_NoIndex_Update>;
};

export type PageFields_Meta_NoIndex_Create = {
  __typename?: 'PageFields_meta_noIndex_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_NoIndex_Delete = {
  __typename?: 'PageFields_meta_noIndex_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_NoIndex_Read = {
  __typename?: 'PageFields_meta_noIndex_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_NoIndex_Update = {
  __typename?: 'PageFields_meta_noIndex_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Title = {
  __typename?: 'PageFields_meta_title';
  create?: Maybe<PageFields_Meta_Title_Create>;
  delete?: Maybe<PageFields_Meta_Title_Delete>;
  read?: Maybe<PageFields_Meta_Title_Read>;
  update?: Maybe<PageFields_Meta_Title_Update>;
};

export type PageFields_Meta_Title_Create = {
  __typename?: 'PageFields_meta_title_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Title_Delete = {
  __typename?: 'PageFields_meta_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Title_Read = {
  __typename?: 'PageFields_meta_title_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Meta_Title_Update = {
  __typename?: 'PageFields_meta_title_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug = {
  __typename?: 'PageFields_slug';
  create?: Maybe<PageFields_Slug_Create>;
  delete?: Maybe<PageFields_Slug_Delete>;
  read?: Maybe<PageFields_Slug_Read>;
  update?: Maybe<PageFields_Slug_Update>;
};

export type PageFields_Slug_Create = {
  __typename?: 'PageFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Delete = {
  __typename?: 'PageFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Read = {
  __typename?: 'PageFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Slug_Update = {
  __typename?: 'PageFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Title = {
  __typename?: 'PageFields_title';
  create?: Maybe<PageFields_Title_Create>;
  delete?: Maybe<PageFields_Title_Delete>;
  read?: Maybe<PageFields_Title_Read>;
  update?: Maybe<PageFields_Title_Update>;
};

export type PageFields_Title_Create = {
  __typename?: 'PageFields_title_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Delete = {
  __typename?: 'PageFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Read = {
  __typename?: 'PageFields_title_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Title_Update = {
  __typename?: 'PageFields_title_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_Type = {
  __typename?: 'PageFields_type';
  create?: Maybe<PageFields_Type_Create>;
  delete?: Maybe<PageFields_Type_Delete>;
  read?: Maybe<PageFields_Type_Read>;
  update?: Maybe<PageFields_Type_Update>;
};

export type PageFields_Type_Create = {
  __typename?: 'PageFields_type_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_Type_Delete = {
  __typename?: 'PageFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_Type_Read = {
  __typename?: 'PageFields_type_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_Type_Update = {
  __typename?: 'PageFields_type_Update';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt = {
  __typename?: 'PageFields_updatedAt';
  create?: Maybe<PageFields_UpdatedAt_Create>;
  delete?: Maybe<PageFields_UpdatedAt_Delete>;
  read?: Maybe<PageFields_UpdatedAt_Read>;
  update?: Maybe<PageFields_UpdatedAt_Update>;
};

export type PageFields_UpdatedAt_Create = {
  __typename?: 'PageFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Delete = {
  __typename?: 'PageFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Read = {
  __typename?: 'PageFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PageFields_UpdatedAt_Update = {
  __typename?: 'PageFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PageReadAccess = {
  __typename?: 'PageReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageReadDocAccess = {
  __typename?: 'PageReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageReadVersionsAccess = {
  __typename?: 'PageReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageReadVersionsDocAccess = {
  __typename?: 'PageReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageUpdateAccess = {
  __typename?: 'PageUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PageUpdateDocAccess = {
  __typename?: 'PageUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export enum PageUpdate_Header_Type_MutationInput {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type PageVersion = {
  __typename?: 'PageVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Page>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<PageVersion_Version>;
};


export type PageVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['JSON']>;
  header?: Maybe<PageVersion_Version_Header>;
  isPlaceholder?: Maybe<Scalars['Boolean']>;
  layout?: Maybe<PageVersion_Version_Layout>;
  meta?: Maybe<PageVersion_Version_Meta>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type PageVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type PageVersion_Version_Header = {
  __typename?: 'PageVersion_Version_Header';
  image?: Maybe<Media>;
  type?: Maybe<PageVersion_Version_Header_Type>;
};

export enum PageVersion_Version_Header_Type {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export type PageVersion_Version_Layout = {
  __typename?: 'PageVersion_Version_Layout';
  blocks?: Maybe<Array<PageVersion_Version_Layout_Blocks>>;
};

export type PageVersion_Version_Layout_Blocks = Content | Image;

export type PageVersion_Version_Meta = {
  __typename?: 'PageVersion_Version_Meta';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  noIndex?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type Page_Header = {
  __typename?: 'Page_Header';
  image?: Maybe<Media>;
  type?: Maybe<Page_Header_Type>;
};

export enum Page_Header_Type {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export enum Page_Header_Type_MutationInput {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export type Page_Layout = {
  __typename?: 'Page_Layout';
  blocks?: Maybe<Array<Page_Layout_Blocks>>;
};

export type Page_Layout_Blocks = Content | Image;

export type Page_Meta = {
  __typename?: 'Page_Meta';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Media>;
  noIndex?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export enum Page__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  equals?: InputMaybe<Page__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Page_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Page_Header__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export enum Page_Header__Type_Input {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export type Page_Header__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page_Header__Type_Input>>>;
  equals?: InputMaybe<Page_Header__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Page_Header__Type_Input>>>;
  not_equals?: InputMaybe<Page_Header__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page_Header__Type_Input>>>;
};

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_IsPlaceholder_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Page_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type Page_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Page_Meta__NoIndex_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Page_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  header__image?: InputMaybe<Page_Header__Image_Operator>;
  header__type?: InputMaybe<Page_Header__Type_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  isPlaceholder?: InputMaybe<Page_IsPlaceholder_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  header__image?: InputMaybe<Page_Header__Image_Operator>;
  header__type?: InputMaybe<Page_Header__Type_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  isPlaceholder?: InputMaybe<Page_IsPlaceholder_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  description?: InputMaybe<Page_Description_Operator>;
  header__image?: InputMaybe<Page_Header__Image_Operator>;
  header__type?: InputMaybe<Page_Header__Type_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  isPlaceholder?: InputMaybe<Page_IsPlaceholder_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadLockedDocument_User_Relationship;
};


export type PayloadLockedDocumentDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  User = 'user'
}

export type PayloadLockedDocument_Document = Media | Page | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  User = 'user'
}

export enum PayloadLockedDocument_User_RelationTo {
  User = 'user'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  User = 'user'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs?: Maybe<Array<Maybe<PayloadLockedDocument>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  User = 'user'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  User = 'user'
}

export enum PayloadPreference_User_RelationTo {
  User = 'user'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  User = 'user'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  FooterMenu?: Maybe<FooterMenu>;
  HeaderMenu?: Maybe<HeaderMenu>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countPages?: Maybe<CountPages>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessFooterMenu?: Maybe<Footer_MenuDocAccess>;
  docAccessHeaderMenu?: Maybe<Header_MenuDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PageDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UserDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UserMe>;
  versionPage?: Maybe<PageVersion>;
  versionsPages?: Maybe<VersionsPages>;
};


export type QueryFooterMenuArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHeaderMenuArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};


export type QueryVersionPageArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVersionsPagesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsPage_Where>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  hash?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserCreateAccess = {
  __typename?: 'UserCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserCreateDocAccess = {
  __typename?: 'UserCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDeleteAccess = {
  __typename?: 'UserDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDeleteDocAccess = {
  __typename?: 'UserDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserDocAccessFields = {
  __typename?: 'UserDocAccessFields';
  createdAt?: Maybe<UserDocAccessFields_CreatedAt>;
  email?: Maybe<UserDocAccessFields_Email>;
  updatedAt?: Maybe<UserDocAccessFields_UpdatedAt>;
};

export type UserDocAccessFields_CreatedAt = {
  __typename?: 'UserDocAccessFields_createdAt';
  create?: Maybe<UserDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UserDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UserDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UserDocAccessFields_CreatedAt_Update>;
};

export type UserDocAccessFields_CreatedAt_Create = {
  __typename?: 'UserDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email = {
  __typename?: 'UserDocAccessFields_email';
  create?: Maybe<UserDocAccessFields_Email_Create>;
  delete?: Maybe<UserDocAccessFields_Email_Delete>;
  read?: Maybe<UserDocAccessFields_Email_Read>;
  update?: Maybe<UserDocAccessFields_Email_Update>;
};

export type UserDocAccessFields_Email_Create = {
  __typename?: 'UserDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Delete = {
  __typename?: 'UserDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Read = {
  __typename?: 'UserDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_Email_Update = {
  __typename?: 'UserDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt = {
  __typename?: 'UserDocAccessFields_updatedAt';
  create?: Maybe<UserDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UserDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UserDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UserDocAccessFields_UpdatedAt_Update>;
};

export type UserDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UserDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UserDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UserFields = {
  __typename?: 'UserFields';
  createdAt?: Maybe<UserFields_CreatedAt>;
  email?: Maybe<UserFields_Email>;
  updatedAt?: Maybe<UserFields_UpdatedAt>;
};

export type UserFields_CreatedAt = {
  __typename?: 'UserFields_createdAt';
  create?: Maybe<UserFields_CreatedAt_Create>;
  delete?: Maybe<UserFields_CreatedAt_Delete>;
  read?: Maybe<UserFields_CreatedAt_Read>;
  update?: Maybe<UserFields_CreatedAt_Update>;
};

export type UserFields_CreatedAt_Create = {
  __typename?: 'UserFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Delete = {
  __typename?: 'UserFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Read = {
  __typename?: 'UserFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_CreatedAt_Update = {
  __typename?: 'UserFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UserFields_Email = {
  __typename?: 'UserFields_email';
  create?: Maybe<UserFields_Email_Create>;
  delete?: Maybe<UserFields_Email_Delete>;
  read?: Maybe<UserFields_Email_Read>;
  update?: Maybe<UserFields_Email_Update>;
};

export type UserFields_Email_Create = {
  __typename?: 'UserFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Delete = {
  __typename?: 'UserFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Read = {
  __typename?: 'UserFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_Email_Update = {
  __typename?: 'UserFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt = {
  __typename?: 'UserFields_updatedAt';
  create?: Maybe<UserFields_UpdatedAt_Create>;
  delete?: Maybe<UserFields_UpdatedAt_Delete>;
  read?: Maybe<UserFields_UpdatedAt_Read>;
  update?: Maybe<UserFields_UpdatedAt_Update>;
};

export type UserFields_UpdatedAt_Create = {
  __typename?: 'UserFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Delete = {
  __typename?: 'UserFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Read = {
  __typename?: 'UserFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UserFields_UpdatedAt_Update = {
  __typename?: 'UserFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UserReadAccess = {
  __typename?: 'UserReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserReadDocAccess = {
  __typename?: 'UserReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUnlockAccess = {
  __typename?: 'UserUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUnlockDocAccess = {
  __typename?: 'UserUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUpdateAccess = {
  __typename?: 'UserUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UserUpdateDocAccess = {
  __typename?: 'UserUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type Footer_MenuAccess = {
  __typename?: 'footer_menuAccess';
  fields?: Maybe<FooterMenuFields>;
  read?: Maybe<FooterMenuReadAccess>;
  update?: Maybe<FooterMenuUpdateAccess>;
};

export type Footer_MenuDocAccess = {
  __typename?: 'footer_menuDocAccess';
  fields?: Maybe<FooterMenuDocAccessFields>;
  read?: Maybe<FooterMenuReadDocAccess>;
  update?: Maybe<FooterMenuUpdateDocAccess>;
};

export type Header_MenuAccess = {
  __typename?: 'header_menuAccess';
  fields?: Maybe<HeaderMenuFields>;
  read?: Maybe<HeaderMenuReadAccess>;
  update?: Maybe<HeaderMenuUpdateAccess>;
};

export type Header_MenuDocAccess = {
  __typename?: 'header_menuDocAccess';
  fields?: Maybe<HeaderMenuDocAccessFields>;
  read?: Maybe<HeaderMenuReadDocAccess>;
  update?: Maybe<HeaderMenuUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationFooterMenuInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  menuGroups?: InputMaybe<Array<InputMaybe<MutationFooterMenu_MenuGroupsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationFooterMenu_MenuGroupsInput = {
  id?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<MutationFooterMenu_MenuGroups_LinksInput>>>;
  text: Scalars['String'];
};

export type MutationFooterMenu_MenuGroups_LinksInput = {
  id?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<MutationFooterMenu_MenuGroups_Links_LinkInput>;
};

export type MutationFooterMenu_MenuGroups_Links_LinkInput = {
  label: Scalars['String'];
  reference?: InputMaybe<FooterMenu_MenuGroups_Links_Link_ReferenceRelationshipInput>;
  type: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type MutationHeaderMenuInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<InputMaybe<MutationHeaderMenu_LinksInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationHeaderMenu_LinksInput = {
  id?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<MutationHeaderMenu_Links_LinkInput>;
};

export type MutationHeaderMenu_Links_LinkInput = {
  label: Scalars['String'];
  reference?: InputMaybe<HeaderMenu_Links_Link_ReferenceRelationshipInput>;
  type: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

export type MutationMediaInput = {
  alt: Scalars['String'];
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  header?: InputMaybe<MutationPage_HeaderInput>;
  isPlaceholder?: InputMaybe<Scalars['Boolean']>;
  layout?: InputMaybe<MutationPage_LayoutInput>;
  meta?: InputMaybe<MutationPage_MetaInput>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  header?: InputMaybe<MutationPageUpdate_HeaderInput>;
  isPlaceholder?: InputMaybe<Scalars['Boolean']>;
  layout?: InputMaybe<MutationPageUpdate_LayoutInput>;
  meta?: InputMaybe<MutationPageUpdate_MetaInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPageUpdate_HeaderInput = {
  image?: InputMaybe<Scalars['String']>;
  type: PageUpdate_Header_Type_MutationInput;
};

export type MutationPageUpdate_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationPageUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationPage_HeaderInput = {
  image?: InputMaybe<Scalars['String']>;
  type: Page_Header_Type_MutationInput;
};

export type MutationPage_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']>;
};

export type MutationPage_MetaInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type PageAccess = {
  __typename?: 'pageAccess';
  create?: Maybe<PageCreateAccess>;
  delete?: Maybe<PageDeleteAccess>;
  fields?: Maybe<PageFields>;
  read?: Maybe<PageReadAccess>;
  readVersions?: Maybe<PageReadVersionsAccess>;
  update?: Maybe<PageUpdateAccess>;
};

export type PageDocAccess = {
  __typename?: 'pageDocAccess';
  create?: Maybe<PageCreateDocAccess>;
  delete?: Maybe<PageDeleteDocAccess>;
  fields?: Maybe<PageDocAccessFields>;
  read?: Maybe<PageReadDocAccess>;
  readVersions?: Maybe<PageReadVersionsDocAccess>;
  update?: Maybe<PageUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UserAccess = {
  __typename?: 'userAccess';
  create?: Maybe<UserCreateAccess>;
  delete?: Maybe<UserDeleteAccess>;
  fields?: Maybe<UserFields>;
  read?: Maybe<UserReadAccess>;
  unlock?: Maybe<UserUnlockAccess>;
  update?: Maybe<UserUpdateAccess>;
};

export type UserDocAccess = {
  __typename?: 'userDocAccess';
  create?: Maybe<UserCreateDocAccess>;
  delete?: Maybe<UserDeleteDocAccess>;
  fields?: Maybe<UserDocAccessFields>;
  read?: Maybe<UserReadDocAccess>;
  unlock?: Maybe<UserUnlockDocAccess>;
  update?: Maybe<UserUpdateDocAccess>;
};

export type UserJwt = {
  __typename?: 'userJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
};

export type UserLoginResult = {
  __typename?: 'userLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserMe = {
  __typename?: 'userMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserRefreshedUser = {
  __typename?: 'userRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  user?: Maybe<UserJwt>;
};

export type UserResetPassword = {
  __typename?: 'userResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPage_Header__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export enum VersionsPage_Header__Type_Input {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export type VersionsPage_Header__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Header__Type_Input>>>;
  equals?: InputMaybe<VersionsPage_Header__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Header__Type_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Header__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Header__Type_Input>>>;
};

export type VersionsPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPage_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsPage_Version__IsPlaceholder_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsPage_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type VersionsPage_Version__Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsPage_Version__Meta__NoIndex_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsPage_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  header__image?: InputMaybe<VersionsPage_Header__Image_Operator>;
  header__type?: InputMaybe<VersionsPage_Header__Type_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__isPlaceholder?: InputMaybe<VersionsPage_Version__IsPlaceholder_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__noIndex?: InputMaybe<VersionsPage_Version__Meta__NoIndex_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  header__image?: InputMaybe<VersionsPage_Header__Image_Operator>;
  header__type?: InputMaybe<VersionsPage_Header__Type_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__isPlaceholder?: InputMaybe<VersionsPage_Version__IsPlaceholder_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__noIndex?: InputMaybe<VersionsPage_Version__Meta__NoIndex_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  header__image?: InputMaybe<VersionsPage_Header__Image_Operator>;
  header__type?: InputMaybe<VersionsPage_Header__Type_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__isPlaceholder?: InputMaybe<VersionsPage_Version__IsPlaceholder_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__noIndex?: InputMaybe<VersionsPage_Version__Meta__NoIndex_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
  __typename?: 'versionsPages';
  docs?: Maybe<Array<Maybe<PageVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export const ContentBlockFragmentFragmentDoc = gql`
    fragment ContentBlockFragment on Content {
  content
  id
  blockName
  blockType
}
    `;
export const MediaFieldFragmentFragmentDoc = gql`
    fragment MediaFieldFragment on Media {
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
    `;
export const ImageBlockFragmentFragmentDoc = gql`
    fragment ImageBlockFragment on Image {
  image {
    ...MediaFieldFragment
  }
  caption
  id
  blockName
  blockType
  imageSize
}
    ${MediaFieldFragmentFragmentDoc}`;
export const FooterMenuDocument = gql`
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

/**
 * __useFooterMenuQuery__
 *
 * To run a query within a React component, call `useFooterMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterMenuQuery({
 *   variables: {
 *      draft: // value for 'draft'
 *   },
 * });
 */
export function useFooterMenuQuery(baseOptions?: Apollo.QueryHookOptions<FooterMenuQuery, FooterMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooterMenuQuery, FooterMenuQueryVariables>(FooterMenuDocument, options);
      }
export function useFooterMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterMenuQuery, FooterMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooterMenuQuery, FooterMenuQueryVariables>(FooterMenuDocument, options);
        }
export type FooterMenuQueryHookResult = ReturnType<typeof useFooterMenuQuery>;
export type FooterMenuLazyQueryHookResult = ReturnType<typeof useFooterMenuLazyQuery>;
export type FooterMenuQueryResult = Apollo.QueryResult<FooterMenuQuery, FooterMenuQueryVariables>;
export const HeaderMenuDocument = gql`
    query HeaderMenu($draft: Boolean) {
  HeaderMenu(draft: $draft) {
    links {
      link {
        label
        type
        url
        reference {
          relationTo
          value {
            ... on Page {
              title
              slug
            }
          }
        }
      }
      id
    }
  }
}
    `;

/**
 * __useHeaderMenuQuery__
 *
 * To run a query within a React component, call `useHeaderMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderMenuQuery({
 *   variables: {
 *      draft: // value for 'draft'
 *   },
 * });
 */
export function useHeaderMenuQuery(baseOptions?: Apollo.QueryHookOptions<HeaderMenuQuery, HeaderMenuQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HeaderMenuQuery, HeaderMenuQueryVariables>(HeaderMenuDocument, options);
      }
export function useHeaderMenuLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HeaderMenuQuery, HeaderMenuQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HeaderMenuQuery, HeaderMenuQueryVariables>(HeaderMenuDocument, options);
        }
export type HeaderMenuQueryHookResult = ReturnType<typeof useHeaderMenuQuery>;
export type HeaderMenuLazyQueryHookResult = ReturnType<typeof useHeaderMenuLazyQuery>;
export type HeaderMenuQueryResult = Apollo.QueryResult<HeaderMenuQuery, HeaderMenuQueryVariables>;
export const PagesDocument = gql`
    query Pages($draft: Boolean, $where: Page_where, $limit: Int, $page: Int, $sort: String) {
  Pages(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
    docs {
      id
      title
      description
      header {
        type
        image {
          ...MediaFieldFragment
        }
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
    ${MediaFieldFragmentFragmentDoc}
${ContentBlockFragmentFragmentDoc}
${ImageBlockFragmentFragmentDoc}`;

/**
 * __usePagesQuery__
 *
 * To run a query within a React component, call `usePagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesQuery({
 *   variables: {
 *      draft: // value for 'draft'
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      page: // value for 'page'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function usePagesQuery(baseOptions?: Apollo.QueryHookOptions<PagesQuery, PagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
      }
export function usePagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesQuery, PagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesQuery, PagesQueryVariables>(PagesDocument, options);
        }
export type PagesQueryHookResult = ReturnType<typeof usePagesQuery>;
export type PagesLazyQueryHookResult = ReturnType<typeof usePagesLazyQuery>;
export type PagesQueryResult = Apollo.QueryResult<PagesQuery, PagesQueryVariables>;
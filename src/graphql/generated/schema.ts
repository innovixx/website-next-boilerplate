export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  EmailAddress: { input: string; output: string; }
  JSON: { input: import("lexical").SerializedEditorState<import("lexical").SerializedLexicalNode>; output: import("lexical").SerializedEditorState<import("lexical").SerializedLexicalNode>; }
  JSONObject: { input: Record<string, unknown>; output: Record<string, unknown>; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  footer_menu?: Maybe<Footer_MenuAccess>;
  header_menu?: Maybe<Header_MenuAccess>;
  media?: Maybe<MediaAccess>;
  page?: Maybe<PageAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  user?: Maybe<UserAccess>;
};

export type BlockSettings = {
  __typename?: 'BlockSettings';
  margin?: Maybe<BlockSettings_Margin>;
  padding?: Maybe<BlockSettings_Padding>;
};

export type BlockSettings_Margin = {
  __typename?: 'BlockSettings_Margin';
  marginBottom?: Maybe<BlockSettings_Margin_MarginBottom>;
};

export enum BlockSettings_Margin_MarginBottom {
  ExtraLarge = 'extraLarge',
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export type BlockSettings_Padding = {
  __typename?: 'BlockSettings_Padding';
  paddingBottom?: Maybe<BlockSettings_Padding_PaddingBottom>;
  paddingLeft?: Maybe<BlockSettings_Padding_PaddingLeft>;
  paddingRight?: Maybe<BlockSettings_Padding_PaddingRight>;
  paddingTop?: Maybe<BlockSettings_Padding_PaddingTop>;
};

export enum BlockSettings_Padding_PaddingBottom {
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export enum BlockSettings_Padding_PaddingLeft {
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export enum BlockSettings_Padding_PaddingRight {
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export enum BlockSettings_Padding_PaddingTop {
  Large = 'large',
  Medium = 'medium',
  None = 'none',
  Small = 'small'
}

export type Content = {
  __typename?: 'Content';
  blockName?: Maybe<Scalars['String']['output']>;
  blockSettings?: Maybe<BlockSettings>;
  blockType?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};


export type ContentContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FooterMenu = {
  __typename?: 'FooterMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  menuGroups?: Maybe<Array<FooterMenu_MenuGroups>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_CreatedAt_Read = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_CreatedAt_Update = {
  __typename?: 'FooterMenuDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Fields';
  id?: Maybe<FooterMenuDocAccessFields_MenuGroups_Id>;
  menuGroup?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup>;
};

export type FooterMenuDocAccessFields_MenuGroups_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_Id_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_Fields';
  links?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links>;
  title?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_Fields';
  id?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id>;
  link?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_id';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Id_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Delete>;
  fields?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Fields>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Fields = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_Fields';
  label?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label>;
  reference?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference>;
  type?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type>;
  url?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_label';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Label_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_reference';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Reference_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_type';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Type_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_url';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Links_Link_Url_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_title';
  create?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Create>;
  delete?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Delete>;
  read?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Read>;
  update?: Maybe<FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Update>;
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Create = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Delete = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Read = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_MenuGroups_MenuGroup_Title_Update = {
  __typename?: 'FooterMenuDocAccessFields_menuGroups_menuGroup_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FooterMenuDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_CreatedAt_Delete = {
  __typename?: 'FooterMenuFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_CreatedAt_Read = {
  __typename?: 'FooterMenuFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_CreatedAt_Update = {
  __typename?: 'FooterMenuFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_Fields';
  id?: Maybe<FooterMenuFields_MenuGroups_Id>;
  menuGroup?: Maybe<FooterMenuFields_MenuGroups_MenuGroup>;
};

export type FooterMenuFields_MenuGroups_Read = {
  __typename?: 'FooterMenuFields_menuGroups_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Update = {
  __typename?: 'FooterMenuFields_menuGroups_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Id_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Id_Read = {
  __typename?: 'FooterMenuFields_menuGroups_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_Id_Update = {
  __typename?: 'FooterMenuFields_menuGroups_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_Fields';
  links?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links>;
  title?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Title>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_Fields';
  id?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Id>;
  link?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Id = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_id';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Id_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Delete>;
  fields?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Fields>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Fields = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_Fields';
  label?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label>;
  reference?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference>;
  type?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type>;
  url?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_label';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Label_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_reference';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Reference_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_type';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Type_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_url';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Links_Link_Url_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Title = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_title';
  create?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Title_Create>;
  delete?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Title_Delete>;
  read?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Title_Read>;
  update?: Maybe<FooterMenuFields_MenuGroups_MenuGroup_Title_Update>;
};

export type FooterMenuFields_MenuGroups_MenuGroup_Title_Create = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Title_Delete = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Title_Read = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_MenuGroups_MenuGroup_Title_Update = {
  __typename?: 'FooterMenuFields_menuGroups_menuGroup_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_UpdatedAt_Delete = {
  __typename?: 'FooterMenuFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_UpdatedAt_Read = {
  __typename?: 'FooterMenuFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuFields_UpdatedAt_Update = {
  __typename?: 'FooterMenuFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FooterMenuReadAccess = {
  __typename?: 'FooterMenuReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterMenuReadDocAccess = {
  __typename?: 'FooterMenuReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterMenuUpdateAccess = {
  __typename?: 'FooterMenuUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterMenuUpdateDocAccess = {
  __typename?: 'FooterMenuUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FooterMenu_MenuGroups = {
  __typename?: 'FooterMenu_MenuGroups';
  id?: Maybe<Scalars['String']['output']>;
  menuGroup?: Maybe<FooterMenu_MenuGroups_MenuGroup>;
};

export type FooterMenu_MenuGroups_MenuGroup = {
  __typename?: 'FooterMenu_MenuGroups_MenuGroup';
  links?: Maybe<Array<FooterMenu_MenuGroups_MenuGroup_Links>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FooterMenu_MenuGroups_MenuGroup_Links = {
  __typename?: 'FooterMenu_MenuGroups_MenuGroup_Links';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Link>;
};

export type FooterMenu_MenuGroups_MenuGroup_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<FooterMenu_MenuGroups_MenuGroup_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum FooterMenu_MenuGroups_MenuGroup_Links_Link_ReferenceRelationshipInputRelationTo {
  Page = 'page'
}

export type HeaderMenu = {
  __typename?: 'HeaderMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  links?: Maybe<Array<HeaderMenu_Links>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Read = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_CreatedAt_Update = {
  __typename?: 'HeaderMenuDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Fields = {
  __typename?: 'HeaderMenuDocAccessFields_links_Fields';
  id?: Maybe<HeaderMenuDocAccessFields_Links_Id>;
  link?: Maybe<HeaderMenuDocAccessFields_Links_Link>;
};

export type HeaderMenuDocAccessFields_Links_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Id_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Id_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Id_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_id_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Label_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Reference_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Type_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Read = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_Links_Link_Url_Update = {
  __typename?: 'HeaderMenuDocAccessFields_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HeaderMenuDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_CreatedAt_Delete = {
  __typename?: 'HeaderMenuFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_CreatedAt_Read = {
  __typename?: 'HeaderMenuFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_CreatedAt_Update = {
  __typename?: 'HeaderMenuFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Delete = {
  __typename?: 'HeaderMenuFields_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Fields = {
  __typename?: 'HeaderMenuFields_links_Fields';
  id?: Maybe<HeaderMenuFields_Links_Id>;
  link?: Maybe<HeaderMenuFields_Links_Link>;
};

export type HeaderMenuFields_Links_Read = {
  __typename?: 'HeaderMenuFields_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Update = {
  __typename?: 'HeaderMenuFields_links_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Id_Delete = {
  __typename?: 'HeaderMenuFields_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Id_Read = {
  __typename?: 'HeaderMenuFields_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Id_Update = {
  __typename?: 'HeaderMenuFields_links_id_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Delete = {
  __typename?: 'HeaderMenuFields_links_link_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Update = {
  __typename?: 'HeaderMenuFields_links_link_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Label_Delete = {
  __typename?: 'HeaderMenuFields_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Label_Read = {
  __typename?: 'HeaderMenuFields_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Label_Update = {
  __typename?: 'HeaderMenuFields_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Reference_Delete = {
  __typename?: 'HeaderMenuFields_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Reference_Read = {
  __typename?: 'HeaderMenuFields_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Reference_Update = {
  __typename?: 'HeaderMenuFields_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Type_Delete = {
  __typename?: 'HeaderMenuFields_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Type_Read = {
  __typename?: 'HeaderMenuFields_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Type_Update = {
  __typename?: 'HeaderMenuFields_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Url_Delete = {
  __typename?: 'HeaderMenuFields_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Url_Read = {
  __typename?: 'HeaderMenuFields_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_Links_Link_Url_Update = {
  __typename?: 'HeaderMenuFields_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_UpdatedAt_Delete = {
  __typename?: 'HeaderMenuFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_UpdatedAt_Read = {
  __typename?: 'HeaderMenuFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuFields_UpdatedAt_Update = {
  __typename?: 'HeaderMenuFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type HeaderMenuReadAccess = {
  __typename?: 'HeaderMenuReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderMenuReadDocAccess = {
  __typename?: 'HeaderMenuReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderMenuUpdateAccess = {
  __typename?: 'HeaderMenuUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderMenuUpdateDocAccess = {
  __typename?: 'HeaderMenuUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeaderMenu_Links = {
  __typename?: 'HeaderMenu_Links';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Link>;
};

export type HeaderMenu_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<HeaderMenu_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum HeaderMenu_Links_Link_ReferenceRelationshipInputRelationTo {
  Page = 'page'
}

export type Image = {
  __typename?: 'Image';
  blockName?: Maybe<Scalars['String']['output']>;
  blockSettings?: Maybe<BlockSettings>;
  blockType?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  imageSize?: Maybe<Image_ImageSize>;
};


export type ImageCaptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export enum Image_ImageSize {
  Card = 'card',
  Feature = 'feature',
  Original = 'original'
}

export type Link = {
  __typename?: 'Link';
  label?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Link_Reference_Relationship>;
  type?: Maybe<Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};


export type LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
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
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  card?: Maybe<MediaDocAccessFields_Sizes_Card>;
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  card?: Maybe<MediaFields_Sizes_Card>;
  feature?: Maybe<MediaFields_Sizes_Feature>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Delete = {
  __typename?: 'MediaFields_sizes_card_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Update = {
  __typename?: 'MediaFields_sizes_card_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Delete = {
  __typename?: 'MediaFields_sizes_card_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Read = {
  __typename?: 'MediaFields_sizes_card_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filename_Update = {
  __typename?: 'MediaFields_sizes_card_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_card_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Read = {
  __typename?: 'MediaFields_sizes_card_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Filesize_Update = {
  __typename?: 'MediaFields_sizes_card_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Delete = {
  __typename?: 'MediaFields_sizes_card_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Read = {
  __typename?: 'MediaFields_sizes_card_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Height_Update = {
  __typename?: 'MediaFields_sizes_card_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_card_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Read = {
  __typename?: 'MediaFields_sizes_card_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_MimeType_Update = {
  __typename?: 'MediaFields_sizes_card_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Delete = {
  __typename?: 'MediaFields_sizes_card_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Read = {
  __typename?: 'MediaFields_sizes_card_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Url_Update = {
  __typename?: 'MediaFields_sizes_card_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Delete = {
  __typename?: 'MediaFields_sizes_card_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Read = {
  __typename?: 'MediaFields_sizes_card_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Card_Width_Update = {
  __typename?: 'MediaFields_sizes_card_width_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  card?: Maybe<Media_Sizes_Card>;
  feature?: Maybe<Media_Sizes_Feature>;
};

export type Media_Sizes_Card = {
  __typename?: 'Media_Sizes_Card';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Card__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Card__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  duplicateMedia?: Maybe<Media>;
  duplicatePage?: Maybe<Page>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UserLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UserRefreshedUser>;
  resetPasswordUser?: Maybe<UserResetPassword>;
  restoreVersionPage?: Maybe<Page>;
  unlockUser: Scalars['Boolean']['output'];
  updateFooterMenu?: Maybe<FooterMenu>;
  updateHeaderMenu?: Maybe<HeaderMenu>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePageArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadKvArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePageArgs = {
  data: MutationPageInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['String']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRestoreVersionPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateFooterMenuArgs = {
  data: MutationFooterMenuInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateHeaderMenuArgs = {
  data: MutationHeaderMenuInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  header?: Maybe<Page_Header>;
  id: Scalars['String']['output'];
  isPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<Page_Layout>;
  meta?: Maybe<Page_Meta>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type PageCreateAccess = {
  __typename?: 'PageCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageCreateDocAccess = {
  __typename?: 'PageCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageDeleteAccess = {
  __typename?: 'PageDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageDeleteDocAccess = {
  __typename?: 'PageDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageDocAccessFields = {
  __typename?: 'PageDocAccessFields';
  _status?: Maybe<PageDocAccessFields__Status>;
  createdAt?: Maybe<PageDocAccessFields_CreatedAt>;
  description?: Maybe<PageDocAccessFields_Description>;
  header?: Maybe<PageDocAccessFields_Header>;
  isPlaceholder?: Maybe<PageDocAccessFields_IsPlaceholder>;
  layout?: Maybe<PageDocAccessFields_Layout>;
  meta?: Maybe<PageDocAccessFields_Meta>;
  slug?: Maybe<PageDocAccessFields_Slug>;
  title?: Maybe<PageDocAccessFields_Title>;
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields__Status_Delete = {
  __typename?: 'PageDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields__Status_Read = {
  __typename?: 'PageDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields__Status_Update = {
  __typename?: 'PageDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_CreatedAt_Read = {
  __typename?: 'PageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_CreatedAt_Update = {
  __typename?: 'PageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Description_Delete = {
  __typename?: 'PageDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Description_Read = {
  __typename?: 'PageDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Description_Update = {
  __typename?: 'PageDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header = {
  __typename?: 'PageDocAccessFields_header';
  image?: Maybe<PageDocAccessFields_Header_Image>;
  type?: Maybe<PageDocAccessFields_Header_Type>;
};

export type PageDocAccessFields_Header_Image = {
  __typename?: 'PageDocAccessFields_header_image';
  create?: Maybe<PageDocAccessFields_Header_Image_Create>;
  delete?: Maybe<PageDocAccessFields_Header_Image_Delete>;
  read?: Maybe<PageDocAccessFields_Header_Image_Read>;
  update?: Maybe<PageDocAccessFields_Header_Image_Update>;
};

export type PageDocAccessFields_Header_Image_Create = {
  __typename?: 'PageDocAccessFields_header_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Image_Delete = {
  __typename?: 'PageDocAccessFields_header_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Image_Read = {
  __typename?: 'PageDocAccessFields_header_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Image_Update = {
  __typename?: 'PageDocAccessFields_header_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Type = {
  __typename?: 'PageDocAccessFields_header_type';
  create?: Maybe<PageDocAccessFields_Header_Type_Create>;
  delete?: Maybe<PageDocAccessFields_Header_Type_Delete>;
  read?: Maybe<PageDocAccessFields_Header_Type_Read>;
  update?: Maybe<PageDocAccessFields_Header_Type_Update>;
};

export type PageDocAccessFields_Header_Type_Create = {
  __typename?: 'PageDocAccessFields_header_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Type_Delete = {
  __typename?: 'PageDocAccessFields_header_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Type_Read = {
  __typename?: 'PageDocAccessFields_header_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Header_Type_Update = {
  __typename?: 'PageDocAccessFields_header_type_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_IsPlaceholder_Delete = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_IsPlaceholder_Read = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_IsPlaceholder_Update = {
  __typename?: 'PageDocAccessFields_isPlaceholder_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Layout = {
  __typename?: 'PageDocAccessFields_layout';
  blocks?: Maybe<PageDocAccessFields_Layout_Blocks>;
};

export type PageDocAccessFields_Layout_Blocks = {
  __typename?: 'PageDocAccessFields_layout_blocks';
  create?: Maybe<PageDocAccessFields_Layout_Blocks_Create>;
  delete?: Maybe<PageDocAccessFields_Layout_Blocks_Delete>;
  read?: Maybe<PageDocAccessFields_Layout_Blocks_Read>;
  update?: Maybe<PageDocAccessFields_Layout_Blocks_Update>;
};

export type PageDocAccessFields_Layout_Blocks_Create = {
  __typename?: 'PageDocAccessFields_layout_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Layout_Blocks_Delete = {
  __typename?: 'PageDocAccessFields_layout_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Layout_Blocks_Read = {
  __typename?: 'PageDocAccessFields_layout_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Layout_Blocks_Update = {
  __typename?: 'PageDocAccessFields_layout_blocks_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Delete = {
  __typename?: 'PageDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Update = {
  __typename?: 'PageDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PageDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Description_Read = {
  __typename?: 'PageDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Description_Update = {
  __typename?: 'PageDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PageDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Image_Read = {
  __typename?: 'PageDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Image_Update = {
  __typename?: 'PageDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_NoIndex_Delete = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_NoIndex_Read = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_NoIndex_Update = {
  __typename?: 'PageDocAccessFields_meta_noIndex_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PageDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Title_Read = {
  __typename?: 'PageDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Meta_Title_Update = {
  __typename?: 'PageDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Slug_Delete = {
  __typename?: 'PageDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Slug_Read = {
  __typename?: 'PageDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Slug_Update = {
  __typename?: 'PageDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Title_Delete = {
  __typename?: 'PageDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Title_Read = {
  __typename?: 'PageDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_Title_Update = {
  __typename?: 'PageDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageFields = {
  __typename?: 'PageFields';
  _status?: Maybe<PageFields__Status>;
  createdAt?: Maybe<PageFields_CreatedAt>;
  description?: Maybe<PageFields_Description>;
  header?: Maybe<PageFields_Header>;
  isPlaceholder?: Maybe<PageFields_IsPlaceholder>;
  layout?: Maybe<PageFields_Layout>;
  meta?: Maybe<PageFields_Meta>;
  slug?: Maybe<PageFields_Slug>;
  title?: Maybe<PageFields_Title>;
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields__Status_Delete = {
  __typename?: 'PageFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields__Status_Read = {
  __typename?: 'PageFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields__Status_Update = {
  __typename?: 'PageFields__status_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_CreatedAt_Delete = {
  __typename?: 'PageFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_CreatedAt_Read = {
  __typename?: 'PageFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_CreatedAt_Update = {
  __typename?: 'PageFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Description_Delete = {
  __typename?: 'PageFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Description_Read = {
  __typename?: 'PageFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Description_Update = {
  __typename?: 'PageFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header = {
  __typename?: 'PageFields_header';
  image?: Maybe<PageFields_Header_Image>;
  type?: Maybe<PageFields_Header_Type>;
};

export type PageFields_Header_Image = {
  __typename?: 'PageFields_header_image';
  create?: Maybe<PageFields_Header_Image_Create>;
  delete?: Maybe<PageFields_Header_Image_Delete>;
  read?: Maybe<PageFields_Header_Image_Read>;
  update?: Maybe<PageFields_Header_Image_Update>;
};

export type PageFields_Header_Image_Create = {
  __typename?: 'PageFields_header_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Image_Delete = {
  __typename?: 'PageFields_header_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Image_Read = {
  __typename?: 'PageFields_header_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Image_Update = {
  __typename?: 'PageFields_header_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Type = {
  __typename?: 'PageFields_header_type';
  create?: Maybe<PageFields_Header_Type_Create>;
  delete?: Maybe<PageFields_Header_Type_Delete>;
  read?: Maybe<PageFields_Header_Type_Read>;
  update?: Maybe<PageFields_Header_Type_Update>;
};

export type PageFields_Header_Type_Create = {
  __typename?: 'PageFields_header_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Type_Delete = {
  __typename?: 'PageFields_header_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Type_Read = {
  __typename?: 'PageFields_header_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Header_Type_Update = {
  __typename?: 'PageFields_header_type_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_IsPlaceholder_Delete = {
  __typename?: 'PageFields_isPlaceholder_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_IsPlaceholder_Read = {
  __typename?: 'PageFields_isPlaceholder_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_IsPlaceholder_Update = {
  __typename?: 'PageFields_isPlaceholder_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Layout = {
  __typename?: 'PageFields_layout';
  blocks?: Maybe<PageFields_Layout_Blocks>;
};

export type PageFields_Layout_Blocks = {
  __typename?: 'PageFields_layout_blocks';
  create?: Maybe<PageFields_Layout_Blocks_Create>;
  delete?: Maybe<PageFields_Layout_Blocks_Delete>;
  read?: Maybe<PageFields_Layout_Blocks_Read>;
  update?: Maybe<PageFields_Layout_Blocks_Update>;
};

export type PageFields_Layout_Blocks_Create = {
  __typename?: 'PageFields_layout_blocks_Create';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Layout_Blocks_Delete = {
  __typename?: 'PageFields_layout_blocks_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Layout_Blocks_Read = {
  __typename?: 'PageFields_layout_blocks_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Layout_Blocks_Update = {
  __typename?: 'PageFields_layout_blocks_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Delete = {
  __typename?: 'PageFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Update = {
  __typename?: 'PageFields_meta_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Description_Delete = {
  __typename?: 'PageFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Description_Read = {
  __typename?: 'PageFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Description_Update = {
  __typename?: 'PageFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Image_Delete = {
  __typename?: 'PageFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Image_Read = {
  __typename?: 'PageFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Image_Update = {
  __typename?: 'PageFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_NoIndex_Delete = {
  __typename?: 'PageFields_meta_noIndex_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_NoIndex_Read = {
  __typename?: 'PageFields_meta_noIndex_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_NoIndex_Update = {
  __typename?: 'PageFields_meta_noIndex_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Title_Delete = {
  __typename?: 'PageFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Title_Read = {
  __typename?: 'PageFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Meta_Title_Update = {
  __typename?: 'PageFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Slug_Delete = {
  __typename?: 'PageFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Slug_Read = {
  __typename?: 'PageFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Slug_Update = {
  __typename?: 'PageFields_slug_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Title_Delete = {
  __typename?: 'PageFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Title_Read = {
  __typename?: 'PageFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_Title_Update = {
  __typename?: 'PageFields_title_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PageFields_UpdatedAt_Delete = {
  __typename?: 'PageFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_UpdatedAt_Read = {
  __typename?: 'PageFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PageFields_UpdatedAt_Update = {
  __typename?: 'PageFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PageReadAccess = {
  __typename?: 'PageReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageReadDocAccess = {
  __typename?: 'PageReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageReadVersionsAccess = {
  __typename?: 'PageReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageReadVersionsDocAccess = {
  __typename?: 'PageReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageUpdateAccess = {
  __typename?: 'PageUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PageUpdateDocAccess = {
  __typename?: 'PageUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
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
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latest?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Page>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PageVersion_Version>;
};


export type PageVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  header?: Maybe<PageVersion_Version_Header>;
  isPlaceholder?: Maybe<Scalars['Boolean']['output']>;
  layout?: Maybe<PageVersion_Version_Layout>;
  meta?: Maybe<PageVersion_Version_Meta>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PageVersion_VersionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
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
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Page_Header__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_IsPlaceholder_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Page_Meta__NoIndex_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
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
  docs: Array<Page>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_Data>;
  key?: Maybe<PayloadKvDocAccessFields_Key>;
};

export type PayloadKvDocAccessFields_Data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_Data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Data_Update>;
};

export type PayloadKvDocAccessFields_Data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Key_Update>;
};

export type PayloadKvDocAccessFields_Key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvDocAccessFields_Key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_Data>;
  key?: Maybe<PayloadKvFields_Key>;
};

export type PayloadKvFields_Data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_Data_Create>;
  delete?: Maybe<PayloadKvFields_Data_Delete>;
  read?: Maybe<PayloadKvFields_Data_Read>;
  update?: Maybe<PayloadKvFields_Data_Update>;
};

export type PayloadKvFields_Data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_Key_Create>;
  delete?: Maybe<PayloadKvFields_Key_Delete>;
  read?: Maybe<PayloadKvFields_Key_Read>;
  update?: Maybe<PayloadKvFields_Key_Update>;
};

export type PayloadKvFields_Key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvFields_Key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadKv_Data_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadKv_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadKv_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadLockedDocument_User_Relationship>;
};


export type PayloadLockedDocumentDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  User = 'user'
}

export type PayloadLockedDocument_Document = Media | Page | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
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
  value?: InputMaybe<Scalars['JSON']['input']>;
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
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Media = 'media',
  Page = 'page',
  User = 'user'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
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
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<PayloadPreference_User_Relationship>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  User = 'user'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
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
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  User = 'user'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
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
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  FooterMenu?: Maybe<FooterMenu>;
  HeaderMenu?: Maybe<HeaderMenu>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countPages?: Maybe<CountPages>;
  countPayloadKvs?: Maybe<CountPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessFooterMenu?: Maybe<Footer_MenuDocAccess>;
  docAccessHeaderMenu?: Maybe<Header_MenuDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PageDocAccess>;
  docAccessPayloadKv?: Maybe<Payload_KvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UserDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UserMe>;
  versionPage?: Maybe<PageVersion>;
  versionsPages?: Maybe<VersionsPages>;
};


export type QueryFooterMenuArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeaderMenuArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  select?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Page_Where>;
};


export type QueryCountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPageArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryVersionPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVersionsPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  select?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VersionsPage_Where>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserCreateAccess = {
  __typename?: 'UserCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserCreateDocAccess = {
  __typename?: 'UserCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserDeleteAccess = {
  __typename?: 'UserDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserDeleteDocAccess = {
  __typename?: 'UserDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserDocAccessFields = {
  __typename?: 'UserDocAccessFields';
  createdAt?: Maybe<UserDocAccessFields_CreatedAt>;
  email?: Maybe<UserDocAccessFields_Email>;
  sessions?: Maybe<UserDocAccessFields_Sessions>;
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
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UserDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_CreatedAt_Read = {
  __typename?: 'UserDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_CreatedAt_Update = {
  __typename?: 'UserDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Email_Delete = {
  __typename?: 'UserDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Email_Read = {
  __typename?: 'UserDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Email_Update = {
  __typename?: 'UserDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions = {
  __typename?: 'UserDocAccessFields_sessions';
  create?: Maybe<UserDocAccessFields_Sessions_Create>;
  delete?: Maybe<UserDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UserDocAccessFields_Sessions_Fields>;
  read?: Maybe<UserDocAccessFields_Sessions_Read>;
  update?: Maybe<UserDocAccessFields_Sessions_Update>;
};

export type UserDocAccessFields_Sessions_Create = {
  __typename?: 'UserDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Delete = {
  __typename?: 'UserDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Fields = {
  __typename?: 'UserDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UserDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UserDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UserDocAccessFields_Sessions_Id>;
};

export type UserDocAccessFields_Sessions_Read = {
  __typename?: 'UserDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Update = {
  __typename?: 'UserDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UserDocAccessFields_sessions_createdAt';
  create?: Maybe<UserDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UserDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UserDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UserDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UserDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UserDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UserDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UserDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UserDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UserDocAccessFields_sessions_expiresAt';
  create?: Maybe<UserDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UserDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UserDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UserDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UserDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UserDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UserDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UserDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UserDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Id = {
  __typename?: 'UserDocAccessFields_sessions_id';
  create?: Maybe<UserDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UserDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UserDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UserDocAccessFields_Sessions_Id_Update>;
};

export type UserDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UserDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UserDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UserDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UserDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UserDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UserDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UserDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserFields = {
  __typename?: 'UserFields';
  createdAt?: Maybe<UserFields_CreatedAt>;
  email?: Maybe<UserFields_Email>;
  sessions?: Maybe<UserFields_Sessions>;
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
  permission: Scalars['Boolean']['output'];
};

export type UserFields_CreatedAt_Delete = {
  __typename?: 'UserFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_CreatedAt_Read = {
  __typename?: 'UserFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_CreatedAt_Update = {
  __typename?: 'UserFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Email_Delete = {
  __typename?: 'UserFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Email_Read = {
  __typename?: 'UserFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Email_Update = {
  __typename?: 'UserFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions = {
  __typename?: 'UserFields_sessions';
  create?: Maybe<UserFields_Sessions_Create>;
  delete?: Maybe<UserFields_Sessions_Delete>;
  fields?: Maybe<UserFields_Sessions_Fields>;
  read?: Maybe<UserFields_Sessions_Read>;
  update?: Maybe<UserFields_Sessions_Update>;
};

export type UserFields_Sessions_Create = {
  __typename?: 'UserFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Delete = {
  __typename?: 'UserFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Fields = {
  __typename?: 'UserFields_sessions_Fields';
  createdAt?: Maybe<UserFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UserFields_Sessions_ExpiresAt>;
  id?: Maybe<UserFields_Sessions_Id>;
};

export type UserFields_Sessions_Read = {
  __typename?: 'UserFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Update = {
  __typename?: 'UserFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_CreatedAt = {
  __typename?: 'UserFields_sessions_createdAt';
  create?: Maybe<UserFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UserFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UserFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UserFields_Sessions_CreatedAt_Update>;
};

export type UserFields_Sessions_CreatedAt_Create = {
  __typename?: 'UserFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UserFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_CreatedAt_Read = {
  __typename?: 'UserFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_CreatedAt_Update = {
  __typename?: 'UserFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_ExpiresAt = {
  __typename?: 'UserFields_sessions_expiresAt';
  create?: Maybe<UserFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UserFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UserFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UserFields_Sessions_ExpiresAt_Update>;
};

export type UserFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UserFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UserFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UserFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UserFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Id = {
  __typename?: 'UserFields_sessions_id';
  create?: Maybe<UserFields_Sessions_Id_Create>;
  delete?: Maybe<UserFields_Sessions_Id_Delete>;
  read?: Maybe<UserFields_Sessions_Id_Read>;
  update?: Maybe<UserFields_Sessions_Id_Update>;
};

export type UserFields_Sessions_Id_Create = {
  __typename?: 'UserFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Id_Delete = {
  __typename?: 'UserFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Id_Read = {
  __typename?: 'UserFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_Sessions_Id_Update = {
  __typename?: 'UserFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
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
  permission: Scalars['Boolean']['output'];
};

export type UserFields_UpdatedAt_Delete = {
  __typename?: 'UserFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_UpdatedAt_Read = {
  __typename?: 'UserFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UserFields_UpdatedAt_Update = {
  __typename?: 'UserFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UserReadAccess = {
  __typename?: 'UserReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserReadDocAccess = {
  __typename?: 'UserReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserUnlockAccess = {
  __typename?: 'UserUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserUnlockDocAccess = {
  __typename?: 'UserUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserUpdateAccess = {
  __typename?: 'UserUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UserUpdateDocAccess = {
  __typename?: 'UserUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type CountPages = {
  __typename?: 'countPages';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
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
  createdAt?: InputMaybe<Scalars['String']['input']>;
  menuGroups?: InputMaybe<Array<InputMaybe<MutationFooterMenu_MenuGroupsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterMenu_MenuGroupsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  menuGroup?: InputMaybe<MutationFooterMenu_MenuGroups_MenuGroupInput>;
};

export type MutationFooterMenu_MenuGroups_MenuGroupInput = {
  links?: InputMaybe<Array<InputMaybe<MutationFooterMenu_MenuGroups_MenuGroup_LinksInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFooterMenu_MenuGroups_MenuGroup_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationFooterMenu_MenuGroups_MenuGroup_Links_LinkInput>;
};

export type MutationFooterMenu_MenuGroups_MenuGroup_Links_LinkInput = {
  label: Scalars['String']['input'];
  reference?: InputMaybe<FooterMenu_MenuGroups_MenuGroup_Links_Link_ReferenceRelationshipInput>;
  type: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeaderMenuInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  links?: InputMaybe<Array<InputMaybe<MutationHeaderMenu_LinksInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeaderMenu_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationHeaderMenu_Links_LinkInput>;
};

export type MutationHeaderMenu_Links_LinkInput = {
  label: Scalars['String']['input'];
  reference?: InputMaybe<HeaderMenu_Links_Link_ReferenceRelationshipInput>;
  type: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  card?: InputMaybe<MutationMediaUpdate_Sizes_CardInput>;
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
};

export type MutationMediaUpdate_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  card?: InputMaybe<MutationMedia_Sizes_CardInput>;
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
};

export type MutationMedia_Sizes_CardInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  header?: InputMaybe<MutationPage_HeaderInput>;
  isPlaceholder?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<MutationPage_LayoutInput>;
  meta?: InputMaybe<MutationPage_MetaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  header?: InputMaybe<MutationPageUpdate_HeaderInput>;
  isPlaceholder?: InputMaybe<Scalars['Boolean']['input']>;
  layout?: InputMaybe<MutationPageUpdate_LayoutInput>;
  meta?: InputMaybe<MutationPageUpdate_MetaInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_HeaderInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  type: PageUpdate_Header_Type_MutationInput;
};

export type MutationPageUpdate_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPageUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_HeaderInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  type: Page_Header_Type_MutationInput;
};

export type MutationPage_LayoutInput = {
  blocks?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPage_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadKvInput = {
  data: Scalars['JSON']['input'];
  key: Scalars['String']['input'];
};

export type MutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
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

export type Payload_KvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

export type Payload_KvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
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
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UserLoginResult = {
  __typename?: 'userLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserMe = {
  __typename?: 'userMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserRefreshedUser = {
  __typename?: 'userRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserJwt>;
};

export type UserResetPassword = {
  __typename?: 'userResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type VersionsPage_Version__Header__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum VersionsPage_Version__Header__Type_Input {
  Default = 'default',
  FeaturedImage = 'featuredImage'
}

export type VersionsPage_Version__Header__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Header__Type_Input>>>;
  equals?: InputMaybe<VersionsPage_Version__Header__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Header__Type_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version__Header__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Header__Type_Input>>>;
};

export type VersionsPage_Version__IsPlaceholder_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPage_Version__Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type VersionsPage_Version__Meta__NoIndex_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPage_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__header__image?: InputMaybe<VersionsPage_Version__Header__Image_Operator>;
  version__header__type?: InputMaybe<VersionsPage_Version__Header__Type_Operator>;
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
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__header__image?: InputMaybe<VersionsPage_Version__Header__Image_Operator>;
  version__header__type?: InputMaybe<VersionsPage_Version__Header__Type_Operator>;
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
  id?: InputMaybe<VersionsPage_Id_Operator>;
  latest?: InputMaybe<VersionsPage_Latest_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__description?: InputMaybe<VersionsPage_Version__Description_Operator>;
  version__header__image?: InputMaybe<VersionsPage_Version__Header__Image_Operator>;
  version__header__type?: InputMaybe<VersionsPage_Version__Header__Type_Operator>;
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
  docs: Array<PageVersion>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

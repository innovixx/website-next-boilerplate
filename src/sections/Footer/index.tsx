import React from 'react';
import { cmsClient } from '../../graphql';
import { type FooterMenuQuery, type FooterMenuQueryVariables } from '../../graphql/generated/schema';
import { FooterMenu } from './components';
import { FooterMenuDocument } from '../../graphql/generated/graphql';

export const Footer: React.FC = async () => {
	const { FooterMenu: FooterMenuData } = await cmsClient.request<FooterMenuQuery, FooterMenuQueryVariables>(FooterMenuDocument, {}).catch(() => ({ FooterMenu: null }));

	return (
		<FooterMenu footerMenu={FooterMenuData} />
	);
};

import React from 'react';
import { cmsClient } from '../../graphql';
import { FooterMenuDocument, type FooterMenuQuery, type FooterMenuQueryVariables } from '../../graphql/generated/schema';
import { FooterMenu } from './components';

export const Footer: React.FC = async () => {
	const { FooterMenu: FooterMenuData } = await cmsClient.request<FooterMenuQuery, FooterMenuQueryVariables>(FooterMenuDocument, {}).catch(() => ({ FooterMenu: null }));

	return (
		<FooterMenu footerMenu={FooterMenuData} />
	);
};

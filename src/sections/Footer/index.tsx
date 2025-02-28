import React from 'react';
import { cmsClient } from '../../graphql';
import type { FooterMenuQuery, FooterMenuQueryVariables } from '../../graphql/generated/schema';
import { FOOTER_MENU } from '../../graphql/query/footer';
import { FooterMenu } from './components';

export const Footer: React.FC = async () => {
	const { FooterMenu: FooterMenuData } = await cmsClient.request<FooterMenuQuery, FooterMenuQueryVariables>(FOOTER_MENU, {}).catch(() => ({ FooterMenu: null }));

	return (
		<FooterMenu footerMenu={FooterMenuData} />
	);
};

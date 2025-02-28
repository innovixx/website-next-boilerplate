import React from 'react';
import { cmsClient } from '../../graphql';
import type { HeaderMenuQuery, HeaderMenuQueryVariables } from '../../graphql/generated/schema';
import { HEADER_MENU } from '../../graphql/query/header';
import { HeaderMenu } from './components';

export const Header: React.FC = async () => {
	const { HeaderMenu: HeaderMenuData } = await cmsClient.request<HeaderMenuQuery, HeaderMenuQueryVariables>(HEADER_MENU, {}).catch(() => ({ HeaderMenu: null }));

	return (
		<HeaderMenu headerMenu={HeaderMenuData} />
	);
};

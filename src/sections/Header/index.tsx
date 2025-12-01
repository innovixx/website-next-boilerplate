import React from 'react';
import { cmsClient } from '../../graphql';
import { HeaderMenuDocument, type HeaderMenuQuery, type HeaderMenuQueryVariables } from '../../graphql/generated/schema';
import { HeaderMenu } from './components';

export const Header: React.FC = async () => {
	const { HeaderMenu: HeaderMenuData } = await cmsClient.request<HeaderMenuQuery, HeaderMenuQueryVariables>(HeaderMenuDocument, {}).catch(() => ({ HeaderMenu: null }));

	return (
		<HeaderMenu headerMenu={HeaderMenuData} />
	);
};

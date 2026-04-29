import React from 'react';
import { cmsClient } from '../../graphql';
import { type HeaderMenuQuery, type HeaderMenuQueryVariables } from '../../graphql/generated/schema';
import { HeaderMenu } from './components';
import { HeaderMenuDocument } from '../../graphql/generated/graphql';

export const Header: React.FC = async () => {
	const { HeaderMenu: HeaderMenuData } = await cmsClient.request<HeaderMenuQuery, HeaderMenuQueryVariables>(HeaderMenuDocument, {}).catch(() => ({ HeaderMenu: null }));

	return (
		<HeaderMenu headerMenu={HeaderMenuData} />
	);
};

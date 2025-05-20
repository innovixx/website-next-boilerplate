import React from 'react';
import Image from 'next/image';
import type { HeaderMenuQuery } from '../../../../graphql/generated/schema';
import styles from './styles.module.scss';
import type { AppLinkProps } from '../../../../components';
import { AppLink, Container } from '../../../../components';

interface Props {
	headerMenu: HeaderMenuQuery['HeaderMenu'];
}

export const HeaderMenu: React.FC<Props> = ({ headerMenu }) => (
	<header>
		<Container
			size="large"
			className={styles.container}
		>
			<Image
				className={styles.logo}
				src="/images/payload.jpg"
				alt="Payload Logo"
				width={500}
				height={500}
			/>
			<nav className={styles.nav}>
				{
					headerMenu?.links?.map((link) => (
						<ul key={link.id}>
							<li>
								<AppLink
									link={link.link as AppLinkProps['link']}
								/>
							</li>
						</ul>
					))
				}
			</nav>
		</Container>
	</header>
);

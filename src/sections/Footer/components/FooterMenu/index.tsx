import React from 'react';
import Image from 'next/image';
import type { FooterMenuQuery } from '../../../../graphql/generated/schema';
import { AppLink, Container } from '../../../../components';
import styles from './styles.module.scss';

interface Props {
	footerMenu: FooterMenuQuery['FooterMenu'];
}

export const FooterMenu: React.FC<Props> = ({ footerMenu }) => (
	<footer>
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
					footerMenu?.menuGroups?.map((menuGroup) => (
						<ul key={menuGroup.id}>
							{menuGroup.links?.map((link) => (
								<li key={link.id}>
									<AppLink
										link={link?.link}
									/>
								</li>
							))}
						</ul>
					))
				}
			</nav>
		</Container>
	</footer>
);

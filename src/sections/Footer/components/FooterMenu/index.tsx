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
			<nav className={styles.nav}>
				{
					footerMenu?.menuGroups?.map((menuGroup) => (
						<ul key={menuGroup.id}>
							{
								menuGroup.text && (
									<p>{menuGroup.text}</p>
								)
							}
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

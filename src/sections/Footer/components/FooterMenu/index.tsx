import React from 'react';
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
						<div key={menuGroup.id}>
							{
								menuGroup.menuGroup?.title && (
									<p>{menuGroup.menuGroup.title}</p>
								)
							}
							<ul>
								{menuGroup.menuGroup?.links?.map((link) => (
									<li key={link.id}>
										<AppLink
											link={link?.link}
										/>
									</li>
								))}
							</ul>
						</div>
					))
				}
			</nav>
		</Container>
	</footer>
);

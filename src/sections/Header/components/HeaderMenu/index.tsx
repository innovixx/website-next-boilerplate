import React from 'react';
import Image from 'next/image';
import type { HeaderMenuQuery } from '../../../../graphql/generated/schema';
import styles from './styles.module.scss';
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
					headerMenu?.menuGroups?.map((menuGroup) => (
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
	</header>
);

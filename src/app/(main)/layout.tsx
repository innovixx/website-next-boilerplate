import React from 'react';
import '../../styles/index.scss';
import '../../styles/reset.scss';
import '../../styles/globals/index.scss';
import { Footer, Header } from '../../sections';
import { FacelessContainerWithProviders } from '../../providers';
import { Container } from '../../components';

interface Props {
	children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => (
	<html lang="en">
		<body>
			<FacelessContainerWithProviders>
				<Header />
				<main>
					<Container>
						{children}
					</Container>
				</main>
				<Footer />
			</FacelessContainerWithProviders>
		</body>
	</html>
);

export default RootLayout;

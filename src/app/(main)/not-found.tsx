import React from 'react';
import Link from 'next/link';
import { Container } from '../../components/layouts';

const NotFound: React.FC = () => (
	<Container>
		<h1>404 - Page Not Found</h1>
		<p>
			Sorry, the page you are looking for does not exist. You can always go back to the
			{' '}
			<Link href="/">homepage</Link>
			.
		</p>
	</Container>
);

export default NotFound;

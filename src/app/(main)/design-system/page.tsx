import React from 'react';
import { Container } from '../../../components/layouts';
import styles from './styles.module.scss';

const DesignSystem: React.FC = () => (
	<Container className={styles.container}>
		<h1>Heading One</h1>
		<h2>Heading Two</h2>
		<h3>Heading Three</h3>
		<h4>Heading Four</h4>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
		</p>
		<ol>
			<li>Ordered List Item 1</li>
			<li>Ordered List Item 2</li>
			<li>Ordered List Item 3</li>
		</ol>
		<ul>
			<li>Unordered List Item 1</li>
			<li>Unordered List Item 2</li>
			<li>Unordered List Item 3</li>
		</ul>
		<a href="/">
			Link
		</a>
	</Container>
);

export default DesignSystem;

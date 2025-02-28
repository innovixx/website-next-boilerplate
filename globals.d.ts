declare module '@innovixx/eslint-config/config/configs/*/index.mjs';
declare module '@innovixx/stylelint-config/config/*/index.mjs';

declare module '*.module.scss' {
	const content: { [className: string]: string };
	export default content;
}

declare module '*.scss' {
	const content: { [className: string]: string };
	export default content;
}

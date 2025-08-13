import type { BlockSettings } from '../../graphql/generated/schema';

export const mergeBlockSettings = (blockSettings?: BlockSettings, parentBlockSettings?: BlockSettings): BlockSettings => ({
	margin: {
		marginBottom: blockSettings?.margin?.marginBottom || parentBlockSettings?.margin?.marginBottom,
	},
	padding: {
		paddingLeft: blockSettings?.padding?.paddingLeft || parentBlockSettings?.padding?.paddingLeft,
		paddingRight: blockSettings?.padding?.paddingRight || parentBlockSettings?.padding?.paddingRight,
		paddingBottom: blockSettings?.padding?.paddingBottom || parentBlockSettings?.padding?.paddingBottom,
		paddingTop: blockSettings?.padding?.paddingTop || parentBlockSettings?.padding?.paddingTop,
	},
});

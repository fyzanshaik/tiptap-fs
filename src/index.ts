import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
	interface Commands<ReturnType> {
		fontSize: {
			/**
			 * Set the font size
			 */
			setFontSize: (fontSize: string) => ReturnType;
		};
	}
}

export interface FontSizeOptions {
	types: string[];
}

export const FontSize = Extension.create<FontSizeOptions>({
	name: 'fontSize',

	addOptions() {
		return {
			types: ['textStyle'],
		};
	},

	addGlobalAttributes() {
		return [
			{
				types: this.options.types,
				attributes: {
					fontSize: {
						default: null,
						parseHTML: (element) => element.style.fontSize?.replace('px', ''),
						renderHTML: (attributes) => {
							if (!attributes.fontSize) {
								return {};
							}

							return {
								style: `font-size: ${attributes.fontSize}px`,
							};
						},
					},
				},
			},
		];
	},

	addCommands() {
		return {
			setFontSize:
				(fontSize: string) =>
				({ chain }) => {
					if (fontSize === 'default') {
						return chain().setMark('textStyle', { fontSize: null }).run();
					}
					return chain().setMark('textStyle', { fontSize }).run();
				},
		};
	},
});

export default FontSize;

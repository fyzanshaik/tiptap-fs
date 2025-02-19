# tiptap-fs

A font size extension for Tiptap editor.

## Installation

```bash
npm install tiptap-fs
```

## Usage

```typescript
import { Editor } from '@tiptap/core';
import TextStyle from '@tiptap/extension-text-style';
import FontSize from 'tiptap-fs';

const editor = new Editor({
	extensions: [TextStyle, FontSize],
});

// Set font size
editor.chain().focus().setFontSize('16').run();

// Reset to default size
editor.chain().focus().setFontSize('default').run();
```

## Example with React

```typescript
import { Editor } from '@tiptap/core';
import TextStyle from '@tiptap/extension-text-style';
import FontSize from 'tiptap-fs';

// Font size options
const fontSizes = [
	{ value: 'default', label: 'Default' },
	{ value: '12', label: '12px' },
	{ value: '14', label: '14px' },
	{ value: '16', label: '16px' },
	{ value: '20', label: '20px' },
];

function Toolbar({ editor }) {
	if (!editor) return null;

	return (
		<select onChange={(e) => editor.chain().focus().setFontSize(e.target.value).run()}>
			{fontSizes.map((size) => (
				<option key={size.value} value={size.value}>
					{size.label}
				</option>
			))}
		</select>
	);
}
```

## License

MIT

## Author

Faizan Shaik

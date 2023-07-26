const addMarkdownItem = (item) => {
    switch (item) {
        case 'heading':
            return `# `
        case 'heading2':
            return `## `
        case 'heading3':
            return `### `
        case 'heading4':
            return `#### `
        case 'heading5':
            return `##### `
        case 'heading6':
            return `###### `
        case 'bold':
            return `** **`
        case 'italics':
            return `* *`
        case 'strikethrough':
            return `~~ ~~`
        case 'blockquote':
            return `> `
        case 'unorderedlist':
            return `-   `
        case 'orderedlist':
            return `1.  `
        case 'link':
            return `[]()`
        default:
            console.error('addMarkdownItem was called with an invalid argument.')
            break;
    }
}

export default addMarkdownItem;
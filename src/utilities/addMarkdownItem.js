const addMarkdownItem = (item) => {
    switch (item) {
        case 'bold':
            return `** **`
        case 'italics':
            return `* *`
        case 'strikethrough':
            return `~~ ~~`
        case 'unorderedlist':
            return `-`
        case 'orderedlist':
            return `1.`
        case 'link':
            return `[]()`
        default:
            console.error('addMarkdownItem was called with an invalid argument.')
    }
}

export default addMarkdownItem;
export const handleThemeChange = (theme: string) => ({
    type: 'CHANGE_THEME',
    theme
})

export const handleTextChange = (text: string) => ({
    type: 'CHANGE_TEXT',
    text
})

export const handleFontSizeChange = (fontSize: string) => ({
    type: 'CHANGE_FONT_SIZE',
    fontSize
})

export const handleTextColorChange = (textColor: string) => ({
    type: 'CHANGE_TEXT_COLOR',
    textColor
})

export const handleFilterChange = (filter: string) => ({
    type: 'CHANGE_FILTER',
    filter
})

export const handleWidthChange = (width: string) => ({
    type: 'CHANGE_WIDTH',
    width
})

export const handleHeightChange = (height: string) => ({
    type: 'CHANGE_GALLERY',
    height
})

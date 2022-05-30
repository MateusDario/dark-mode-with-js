const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (Element, style) => 
window
.getComputedStyle(Element)
.getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, '--bg'),
    bgPanel: getStyle(html, '--bg-panel'),
    colorHeadings: getStyle(html, '--color-headings'),
    colorText: getStyle(html, '--color-text'),

}

const darkMode = {
    bg: '#333333',
    bgPanel:'#434343',
    colorsHeadings: '#3664ff',
    colorText: '#b5b5b5'
}

const tranformKe = key => 
'--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changecolors = (colors) => {
    Object.keys(colors).map(key=>
        html.style.setProperty(tranformKe(key), colors[key])
    )

}


checkbox.addEventListener('change',({target})=>{
    target.checked ? changecolors(darkMode) : changecolors(initialColors)
})
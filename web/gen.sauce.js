const fs = require('fs')
const path = require('path')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const tailwindcss = require('tailwindcss')('./tailwind.config.js')


const from = path.resolve(__dirname, './src/style.css');
const to = path.resolve(__dirname, '../public_html/static/css/style.css')

fs.readFile(from, (err, css) => {
    postcss([precss, tailwindcss, autoprefixer])
        .process(css, { from, to })
        .then(result => {
            fs.writeFile(to, result.css, () => true)
        })
})
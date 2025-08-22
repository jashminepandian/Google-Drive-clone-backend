// build-tailwind.js
const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const css = fs.readFileSync('./src/index.css', 'utf8');

postcss([tailwindcss, autoprefixer])
  .process(css, { from: './src/index.css', to: './dist/output.css' })
  .then(result => {
    fs.writeFileSync('./dist/output.css', result.css);
    console.log('Tailwind CSS built successfully.');
  });

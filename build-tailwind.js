const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const inputCssPath = './src/index.css';
const outputCssPath = './dist/output.css';

// Make sure the output folder exists
fs.mkdirSync('./dist', { recursive: true });

const css = fs.readFileSync(inputCssPath, 'utf8');

postcss([tailwindcss, autoprefixer])
  .process(css, { from: inputCssPath, to: outputCssPath })
  .then(result => {
    fs.writeFileSync(outputCssPath, result.css);
    console.log('Tailwind CSS built successfully at', outputCssPath);
  })
  .catch(err => console.error(err));

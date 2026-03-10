const fs = require('fs');
const snakeSvg = fs.readFileSync('assets/compiled-snake.svg', 'utf8');
const innerSvgMatch = snakeSvg.match(/<svg viewBox="-16[\s\S]*?<\/svg>/);
if (innerSvgMatch) {
  let innerSvg = innerSvgMatch[0]
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>\s*$/, '')
      .replace(/<rect class="u u[0-9]+"[^>]*\/>/g, '');
      
  const snakeWrapper = `
<svg width="100%" viewBox="-16 -24 880 160" xmlns="http://www.w3.org/2000/svg">
  <rect x="-30" y="-40" width="940" height="240" fill="#000000" />
  ${innerSvg}
</svg>`;
  fs.writeFileSync('test_snake.svg', snakeWrapper.trim());
  console.log('Saved test_snake.svg');
}

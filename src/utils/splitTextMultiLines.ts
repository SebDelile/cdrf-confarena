export const splitTextMultiLine = (
  str: string,
  maxWidth: number,
  textOptions: { fontSize: string; fontFamily: string },
) => {
  // SVG virtuel hors DOM
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('font-size', textOptions.fontSize);
  text.setAttribute('font-family', textOptions.fontFamily);
  svg.appendChild(text);
  svg.setAttribute('style', 'position:absolute; visibility:hidden; height:0; width:0; overflow:hidden;');
  document.body.appendChild(svg);
  const splittedText: string[] = [];
  let line = '';
  const words = str.split(' ');
  words.forEach((word) => {
    if (!word) return;
    const testLine = `${line} ${word}`;
    text.textContent = testLine;
    if (text.getComputedTextLength() > maxWidth) {
      splittedText.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  if (line) splittedText.push(line);
  document.body.removeChild(svg);
  return splittedText;
};


export default function decorate(block) {
  block.style.display = 'flex';
  block.style.alignItems = 'center';
  block.style.padding = '20px';
  block.querySelector('h2').style.marginBottom = '10px';

  const imageContainer = block.querySelector('picture').parentNode;
  imageContainer.style.flex = '1';
  imageContainer.style.marginRight = '20px';

  const textContainer = imageContainer.nextElementSibling;
  textContainer.style.flex = '2';
  textContainer.querySelector('h2').style.fontSize = 'var(--heading-font-size-xl)';
  textContainer.querySelector('h2').style.color = 'var(--text-color)';
  textContainer.querySelector('p').style.fontSize = 'var(--body-font-size-s)';
  textContainer.querySelector('p').style.color = 'var(--text-color)';
  const link = textContainer.querySelector('a');
  link.style.display = 'inline-block';
  link.style.padding = '10px 20px';
  link.style.border = '2px solid var(--link-color)';
  link.style.borderRadius = '30px';
  link.style.color = 'var(--link-color)';
  link.style.textDecoration = 'none';
  link.style.marginTop = '10px';
  link.style.fontWeight = '600';
  link.style.cursor = 'pointer';
}


export default function decorate(block) {
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.alignItems = 'center';
  container.style.justifyContent = 'space-between';
  container.style.padding = '20px';
  container.style.border = '1px solid var(--dark-color)';
  container.style.borderRadius = '10px';

  const textContainer = block.querySelector('div > div');
  textContainer.style.flex = '1';

  const heading = block.querySelector('h2');
  heading.style.fontSize = 'var(--heading-font-size-xl)';
  heading.style.fontWeight = '700';
  heading.style.margin = '0';

  const linkContainer = block.querySelector('p');
  linkContainer.style.margin = '0';

  const link = block.querySelector('a');
  link.classList.add('button', 'secondary');
  link.style.padding = '10px 20px';
  link.style.borderRadius = '30px';
  link.style.fontSize = 'var(--body-font-size-s)';

  container.appendChild(textContainer);
  container.appendChild(linkContainer);
  block.innerHTML = '';
  block.appendChild(container);
}

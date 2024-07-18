
export default function decorate(block) {
  block.style.display = 'flex';
  block.style.alignItems = 'center';
  block.style.justifyContent = 'space-between';
  block.style.padding = '20px';
  block.style.backgroundColor = 'white';

  const imgContainer = block.querySelector('picture');
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  const elements = Array.from(block.children[0].children[0].children);
  elements.forEach(el => {
    if (el.tagName !== 'PICTURE') {
      textContainer.appendChild(el);
    }
  });

  block.innerHTML = '';
  block.appendChild(imgContainer);
  block.appendChild(textContainer);
}

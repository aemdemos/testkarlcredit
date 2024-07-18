
export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-wrapper';

  const leftPanel = document.createElement('div');
  leftPanel.className = 'hero-left-panel';

  const rightPanel = document.createElement('div');
  rightPanel.className = 'hero-right-panel';

  const image = block.querySelector('img');
  rightPanel.appendChild(image);

  const content = block.querySelector('div > div');
  leftPanel.appendChild(content);

  wrapper.appendChild(leftPanel);
  wrapper.appendChild(rightPanel);

  block.innerHTML = '';
  block.appendChild(wrapper);

  // Apply button styles
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.classList.add('button', 'secondary');
  });
}

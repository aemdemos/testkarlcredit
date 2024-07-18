
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'discover-container';

  const textContainer = document.createElement('div');
  textContainer.className = 'discover-text';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'discover-image';

  const imageElement = block.querySelector('picture');
  imageContainer.appendChild(imageElement);

  const textElements = block.querySelectorAll('h2, p, a');
  textElements.forEach((element) => {
    textContainer.appendChild(element);
  });

  container.appendChild(imageContainer);
  container.appendChild(textContainer);

  block.innerHTML = '';
  block.appendChild(container);
}

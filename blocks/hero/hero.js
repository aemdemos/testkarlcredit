
export default function decorate(block) {
  // Create a wrapper for the left and right content
  const wrapper = document.createElement('div');
  wrapper.className = 'hero-wrapper';

  // Create left and right containers
  const leftContainer = document.createElement('div');
  leftContainer.className = 'hero-left-container';
  const rightContainer = document.createElement('div');
  rightContainer.className = 'hero-right-container';

  // Move the current content to the left container
  while (block.firstChild) {
    leftContainer.appendChild(block.firstChild);
  }

  // Create and append the image to the right container
  const img = document.createElement('img');
  img.src = 'http://localhost:3000/media_18855d8175694ea9f4367ae1063a9e8a1a76d3c50.jpeg?width=750&format=jpeg&optimize=medium';
  img.alt = 'credit cards';
  rightContainer.appendChild(img);

  // Append left and right containers to the wrapper
  wrapper.appendChild(leftContainer);
  wrapper.appendChild(rightContainer);

  // Append the wrapper to the block
  block.appendChild(wrapper);
}

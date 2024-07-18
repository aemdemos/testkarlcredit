
export default function decorate(block) {
  // Remove any existing styles
  block.classList.add('hero');

  // Create new structure to match desired layout
  const newStructure = document.createElement('div');
  newStructure.classList.add('hero-content');
  
  // Move existing content into new structure
  while (block.firstChild) {
    newStructure.appendChild(block.firstChild);
  }
  block.appendChild(newStructure);

  // Create a new container for the image
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('hero-image');
  
  // Move the image to the new container
  const image = block.querySelector('img');
  if (image) {
    imageContainer.appendChild(image.closest('picture'));
  }
  block.appendChild(imageContainer);
  
  // Add buttons container
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('hero-buttons');
  
  const links = block.querySelectorAll('a');
  links.forEach(link => {
    const button = document.createElement('a');
    button.href = link.href;
    button.textContent = link.textContent;
    button.classList.add('button', 'secondary');
    buttonsContainer.appendChild(button);
  });

  newStructure.appendChild(buttonsContainer);
}

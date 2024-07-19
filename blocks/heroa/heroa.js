
export default function decorate(block) {
  // Add the necessary classes to the elements
  block.classList.add('heroa');

  // The first child div containing all content
  const container = block.children[0];
  container.classList.add('heroa-container');

  // Extracting the content inside the container div
  const content = container.children[0];
  content.classList.add('heroa-content');

  // Extracting and styling the image
  const picture = content.querySelector('picture');
  picture.classList.add('heroa-picture');

  // Styling the text content
  const h1 = content.querySelector('h1');
  h1.classList.add('heroa-title');

  const paragraphs = content.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    if (index === 0) {
      p.classList.add('heroa-description');
    } else if (index === 1) {
      p.classList.add('heroa-links');
    }
  });

  const links = content.querySelectorAll('a');
  links.forEach((link) => {
    link.classList.add('heroa-link');
  });
}

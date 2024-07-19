
export default function decorate(block) {
  // Adding classes to the elements for styling
  const innerDiv = block.querySelector('div > div');
  const heading = block.querySelector('h2');
  const paragraph = block.querySelector('p');
  const link = block.querySelector('a');

  block.classList.add('lookinga');
  innerDiv.classList.add('lookinga-inner');
  heading.classList.add('lookinga-heading');
  paragraph.classList.add('lookinga-paragraph');
  link.classList.add('lookinga-link');
}

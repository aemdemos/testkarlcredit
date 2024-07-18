
export default function decorate(block) {
  // Adding the required classes and structure
  block.classList.add('questions-container');
  const items = block.querySelectorAll('.questions > div');
  items.forEach((item) => {
    item.classList.add('question-item');
    const picture = item.querySelector('picture');
    picture.classList.add('question-image');
    const link = item.querySelector('a');
    link.classList.add('question-link');
  });
}

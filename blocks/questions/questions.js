
export default function decorate(block) {
  block.classList.add('questions-container');
  const items = block.querySelectorAll('.questions > div');
  items.forEach((item) => {
    item.classList.add('question-item');
    const imgWrapper = item.querySelector('picture');
    const linkWrapper = item.querySelector('ul');
    imgWrapper.classList.add('question-image');
    linkWrapper.classList.add('question-link');
  });
}

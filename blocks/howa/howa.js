
export default function decorate(block) {
  const articles = block.querySelectorAll('div > div > div');

  articles.forEach((article) => {
    const container = document.createElement('div');
    container.classList.add('howa-article');
    container.appendChild(article);
    block.appendChild(container);
  });

  // Remove the old structure
  const oldStructure = block.querySelector('div');
  block.removeChild(oldStructure);
}

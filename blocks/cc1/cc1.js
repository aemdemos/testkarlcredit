
export default function decorate(block) {
  block.classList.add('cc1');
  const cards = block.children;

  Array.from(cards).forEach((card) => {
    card.classList.add('cc1-card');

    const imgWrapper = card.querySelector('picture');
    imgWrapper.parentElement.classList.add('cc1-card-image');

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('cc1-card-content');
    while (imgWrapper.nextElementSibling) {
      contentWrapper.appendChild(imgWrapper.nextElementSibling);
    }

    card.appendChild(contentWrapper);
  });
}


export default function decorate(block) {
  // Apply card styles
  block.classList.add('cards');

  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    card.classList.add('card');
    const img = card.querySelector('img');
    if (img) img.classList.add('card-image');
    const h3 = card.querySelector('h3');
    if (h3) h3.classList.add('card-title');
    const lists = card.querySelectorAll('ul');
    lists.forEach((list) => {
      list.classList.add('card-list');
    });
    const links = card.querySelectorAll('a');
    links.forEach((link) => {
      link.classList.add('card-link');
    });
    const paragraphs = card.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.classList.add('card-paragraph');
    });
  });
}

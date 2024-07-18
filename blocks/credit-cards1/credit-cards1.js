
export default function decorate(block) {
  const cards = block.querySelectorAll('div > div');
  cards.forEach((card) => {
    card.classList.add('credit-card');
  });
}

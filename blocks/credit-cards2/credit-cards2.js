
export default function decorate(block) {
  const cardContainers = block.querySelectorAll('div > div');

  cardContainers.forEach((container, index) => {
    container.classList.add('credit-card-container');
    
    const img = container.querySelector('img');
    if (img) img.classList.add('credit-card-image');
    
    const title = container.querySelector('h3');
    if (title) title.classList.add('credit-card-title');
    
    const lists = container.querySelectorAll('ul');
    lists.forEach((list) => list.classList.add('credit-card-list'));
    
    const links = container.querySelectorAll('a');
    links.forEach((link) => link.classList.add('credit-card-link'));
    
    const buttons = container.querySelectorAll('p a');
    buttons.forEach((button) => {
      if (button.innerText === 'Apply now') {
        button.classList.add('apply-now-button');
      }
    });
    
    const tradeOffs = container.querySelector('h3[id^="trade-offs"]');
    if (tradeOffs) tradeOffs.classList.add('credit-card-trade-offs');
    
    const offers = container.querySelector('h3[id^="current-offer-2"]');
    if (offers) offers.classList.add('credit-card-offers');
  });
}

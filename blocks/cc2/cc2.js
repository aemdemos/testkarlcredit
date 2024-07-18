
export default function decorate(block) {
  // Add the classes needed to achieve the desired layout and styling
  block.classList.add('cc2-container');

  // Loop through each direct child div
  const cardContainers = Array.from(block.children);
  cardContainers.forEach((cardContainer) => {
    cardContainer.classList.add('cc2-card');

    const imgContainer = cardContainer.querySelector('picture');
    imgContainer.classList.add('cc2-card-img');

    const cardContent = cardContainer.querySelector('div:nth-child(2)');
    cardContent.classList.add('cc2-card-content');

    const cardTitle = cardContent.querySelector('h3');
    cardTitle.classList.add('cc2-card-title');

    const cardLists = cardContent.querySelectorAll('ul');
    cardLists.forEach((list) => {
      list.classList.add('cc2-card-list');
    });

    const cardParagraphs = cardContent.querySelectorAll('p');
    cardParagraphs.forEach((paragraph) => {
      paragraph.classList.add('cc2-card-paragraph');
    });

    const tradeOffsTitle = cardContent.querySelector('h3[id^="trade-offs"]');
    if (tradeOffsTitle) {
      tradeOffsTitle.classList.add('cc2-tradeoffs-title');
    }

    const tradeOffsList = cardContent.querySelector('ul + ul');
    if (tradeOffsList) {
      tradeOffsList.classList.add('cc2-tradeoffs-list');
    }

    const applyNowLinks = cardContent.querySelectorAll('p > a[href*="apply"]');
    applyNowLinks.forEach((link) => {
      link.classList.add('cc2-apply-now');
      link.classList.add('button');
    });
  });
}

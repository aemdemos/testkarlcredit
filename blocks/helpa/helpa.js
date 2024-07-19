
export default function decorate(block) {
  // Add a class to the outer block element
  block.classList.add('helpa');

  // Select all the inner divs
  const innerDivs = block.querySelectorAll('div > div');

  // Add a class to each inner div
  innerDivs.forEach((div) => {
    div.classList.add('helpa-item');
    
    // Select the ul inside each div
    const ul = div.querySelector('ul');
    if (ul) {
      ul.classList.add('helpa-list');
      
      // Select all li elements inside the ul
      const lis = ul.querySelectorAll('li');
      lis.forEach((li) => {
        li.classList.add('helpa-list-item');
        
        // Select the picture and a elements inside each li
        const picture = li.querySelector('picture');
        const anchor = li.querySelector('a');
        
        if (picture) {
          picture.classList.add('helpa-picture');
        }

        if (anchor) {
          anchor.classList.add('helpa-anchor');
        }
      });
    }
  });
}


export default function decorate(block) {
  // Apply flexbox to the main container
  block.style.display = 'flex';
  block.style.justifyContent = 'space-between';
  
  // Apply styles to each of the inner divs
  const innerDivs = block.querySelectorAll('div > div');
  innerDivs.forEach((div) => {
    div.style.flex = '1';
    div.style.padding = '0 20px';
  });
  
  // Apply styles to headings
  const headings = block.querySelectorAll('h3');
  headings.forEach((heading) => {
    heading.style.fontSize = 'var(--heading-font-size-m)';
    heading.style.fontWeight = 'bold';
    heading.style.marginBottom = '20px';
  });
  
  // Apply styles to lists
  const lists = block.querySelectorAll('ul');
  lists.forEach((list) => {
    list.style.listStyleType = 'disc';
    list.style.paddingLeft = '20px';
  });
  
  // Apply styles to links
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.style.color = 'var(--link-color)';
    link.style.textDecoration = 'none';
  });
  
  // Apply hover effect to links
  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline';
      link.style.color = 'var(--link-hover-color)';
    });
    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none';
      link.style.color = 'var(--link-color)';
    });
  });

  // Apply styles to "More tips on managing your credit card" link
  const moreTipsLink = block.querySelector('a[href*="support_manage"]');
  if (moreTipsLink) {
    moreTipsLink.style.display = 'inline-block';
    moreTipsLink.style.padding = '10px 20px';
    moreTipsLink.style.marginTop = '20px';
    moreTipsLink.style.border = '1px solid var(--dark-color)';
    moreTipsLink.style.borderRadius = '30px';
    moreTipsLink.style.textAlign = 'center';
  }
}

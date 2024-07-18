
export default function decorate(block) {
  const heading = block.querySelector('h2');
  heading.style.fontSize = '40px';
  heading.style.fontWeight = '700';
  heading.style.marginBottom = '20px';
  
  const listItems = block.querySelectorAll('li');
  listItems.forEach((li) => {
    li.style.fontSize = '16px';
    li.style.lineHeight = '1.5';
    li.style.marginBottom = '10px';
  });

  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.style.color = '#035fe6';
    link.style.textDecoration = 'none';
  });

  block.querySelectorAll('sup').forEach((sup) => {
    sup.style.verticalAlign = 'super';
    sup.style.fontSize = '12px';
  });
}

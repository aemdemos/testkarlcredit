
export default function decorate(block) {
  const columns = block.querySelectorAll('div > div');
  columns.forEach((column) => {
    column.style.flex = '1';
    column.style.padding = '20px';
  });

  block.style.display = 'flex';
  block.style.justifyContent = 'space-between';
  block.style.backgroundColor = 'var(--background-color)';
  block.style.padding = '20px 0';

  const headers = block.querySelectorAll('h4');
  headers.forEach((header) => {
    header.style.fontSize = 'var(--heading-font-size-m)';
    header.style.fontWeight = 'bold';
    header.style.marginBottom = '10px';
  });

  const lists = block.querySelectorAll('ul');
  lists.forEach((list) => {
    list.style.listStyle = 'none';
    list.style.padding = '0';
    list.style.margin = '0';
  });

  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.style.color = 'var(--text-color)';
    link.style.textDecoration = 'none';
    link.style.fontSize = 'var(--body-font-size-xs)';
  });

  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none';
    });
  });
}

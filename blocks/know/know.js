
export default function decorate(block) {
  const container = block.querySelector('.know-container');
  const header = container.querySelector('.know-header');
  const content = container.querySelector('.know-content');

  // Style the header
  header.style.fontFamily = 'var(--heading-font-family)';
  header.style.fontSize = 'var(--heading-font-size-xl)';
  header.style.fontWeight = '600';
  header.style.marginTop = '1em';
  header.style.marginBottom = '0.5em';
  header.style.scrollMargin = 'calc(var(--nav-height) + 1em)';

  // Style the content
  content.style.fontFamily = 'var(--body-font-family)';
  content.style.fontSize = 'var(--body-font-size-m)';
  content.style.color = 'var(--text-color)';
  content.style.lineHeight = '1.6';
  content.style.margin = '0';

  // Style each list item
  const listItems = content.querySelectorAll('li');
  listItems.forEach((li) => {
    li.style.marginBottom = '1em';
  });

  // Style links
  const links = content.querySelectorAll('a');
  links.forEach((link) => {
    link.style.color = 'var(--link-color)';
    link.style.textDecoration = 'none';
  });

  // Hover effects for links
  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.textDecoration = 'underline';
      link.style.color = 'var(--link-hover-color)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.textDecoration = 'none';
      link.style.color = 'var(--link-color)';
    });
  });
}


export default function decorate(block) {
  block.style.display = 'flex';
  block.style.justifyContent = 'space-between';
  block.style.gap = '20px';

  const children = block.querySelectorAll('div > div');

  children.forEach((child) => {
    child.style.border = '1px solid var(--light-color)';
    child.style.borderRadius = '8px';
    child.style.padding = '20px';
    child.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    child.style.flex = '1';
    child.style.backgroundColor = 'var(--background-color)';
  });

  const headings = block.querySelectorAll('h3');
  headings.forEach((heading) => {
    heading.style.fontSize = 'var(--heading-font-size-s)';
    heading.style.fontWeight = '700';
    heading.style.marginBottom = '10px';
  });

  const paragraphs = block.querySelectorAll('p');
  paragraphs.forEach((paragraph) => {
    paragraph.style.fontSize = 'var(--body-font-size-xs)';
    paragraph.style.color = 'var(--text-color)';
  });

  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.style.color = 'var(--link-color)';
    link.style.textDecoration = 'none';
  });

  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      link.style.color = 'var(--link-hover-color)';
    });

    link.addEventListener('mouseout', () => {
      link.style.color = 'var(--link-color)';
    });
  });
}

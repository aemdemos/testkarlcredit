
export default function decorate(block) {
  block.style.display = 'flex';
  block.style.alignItems = 'center';
  block.style.justifyContent = 'center';
  block.style.height = '100vh';
  block.style.background = 'var(--background-color)';
  
  const img = block.querySelector('img');
  if (img) {
    img.style.display = 'none';
  }

  const heroText = block.querySelector('.hero-text');
  if (heroText) {
    heroText.style.textAlign = 'left';
    heroText.style.margin = '0';
  }

  const h1 = block.querySelector('h1');
  if (h1) {
    h1.style.fontSize = 'var(--heading-font-size-xl)';
    h1.style.fontWeight = '700';
    h1.style.color = 'var(--text-color)';
  }

  const p = block.querySelectorAll('p');
  if (p && p.length > 0) {
    p[0].style.fontSize = 'var(--body-font-size-m)';
    p[0].style.color = 'var(--text-color)';
    p[0].style.marginBottom = '1em';
  }

  const links = block.querySelectorAll('a');
  if (links && links.length > 0) {
    links.forEach((link) => {
      link.style.display = 'inline-block';
      link.style.padding = '10px 20px';
      link.style.marginRight = '10px';
      link.style.border = '2px solid var(--link-color)';
      link.style.borderRadius = '30px';
      link.style.color = 'var(--link-color)';
      link.style.textDecoration = 'none';
      link.style.fontWeight = '600';
      link.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });

    links[0].addEventListener('mouseover', () => {
      links[0].style.backgroundColor = 'var(--link-hover-color)';
      links[0].style.color = 'var(--background-color)';
    });

    links[0].addEventListener('mouseout', () => {
      links[0].style.backgroundColor = 'transparent';
      links[0].style.color = 'var(--link-color)';
    });

    links[1].addEventListener('mouseover', () => {
      links[1].style.backgroundColor = 'var(--link-hover-color)';
      links[1].style.color = 'var(--background-color)';
    });

    links[1].addEventListener('mouseout', () => {
      links[1].style.backgroundColor = 'transparent';
      links[1].style.color = 'var(--link-color)';
    });
  }
}

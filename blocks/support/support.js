
export default function decorate(block) {
  const sections = block.querySelectorAll('div > div');
  block.style.display = 'flex';
  block.style.justifyContent = 'space-between';

  sections.forEach((section) => {
    section.style.flex = '1';
    section.style.margin = '0 10px';
  });

  const moreTipsLink = block.querySelector('a[href*="support_manage"]');
  if (moreTipsLink) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.style.textAlign = 'center';
    buttonWrapper.style.marginTop = '20px';

    const button = document.createElement('a');
    button.href = moreTipsLink.href;
    button.textContent = moreTipsLink.textContent;
    button.className = 'button secondary';
    button.style.display = 'inline-block';
    button.style.padding = '10px 20px';
    button.style.borderRadius = '30px';
    button.style.border = '2px solid black';
    button.style.textDecoration = 'none';
    button.style.fontWeight = '600';
    button.style.color = 'black';
    button.style.backgroundColor = 'white';
    button.style.cursor = 'pointer';

    buttonWrapper.appendChild(button);
    moreTipsLink.parentNode.replaceChild(buttonWrapper, moreTipsLink);
  }
}

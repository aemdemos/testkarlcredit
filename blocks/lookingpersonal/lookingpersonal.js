
export default function decorate(block) {
  const heading = block.querySelector('.lookingpersonal-heading');
  const linkWrapper = block.querySelector('.lookingpersonal-link-wrapper');
  const link = block.querySelector('.lookingpersonal-link');

  if (heading && linkWrapper && link) {
    // Apply styles directly via JavaScript if necessary
    heading.style.marginRight = '20px';
    linkWrapper.style.display = 'inline-block';
    
    // Ensure heading and link are side by side
    block.style.display = 'flex';
    block.style.alignItems = 'center';
    block.style.justifyContent = 'center';
  }
}

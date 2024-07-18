
export default function decorate(block) {
  // Set up the block with a flex container
  block.style.display = 'flex';
  block.style.justifyContent = 'space-between';

  // Iterate through each child of the block
  Array.from(block.children[0].children).forEach((child) => {
    // Style each child (the inner div)
    child.style.flex = '1';
    child.style.border = '1px solid var(--dark-color)';
    child.style.borderRadius = '4px';
    child.style.padding = '16px';
    child.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    child.style.margin = '0 8px';
    child.style.backgroundColor = 'var(--background-color)';
  });
}


export default function decorate(block) {
  // Add class to the outer block
  block.classList.add('columns');

  // Select the inner elements
  const columnsInner = block.querySelector('.columns-inner');
  const columnsImage = block.querySelector('.columns-image');
  const columnsText = block.querySelector('.columns-text');

  // Add classes to inner elements
  columnsInner.classList.add('columns-inner-styled');
  columnsImage.classList.add('columns-image-styled');
  columnsText.classList.add('columns-text-styled');
}

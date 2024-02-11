function addToCart(name, price) {
  // Find the parent figure element of the clicked button
  var figure = event.target.closest('figure');

  // Get the image source from the figure element
  var imgSrc = figure.querySelector('.homeimg').getAttribute('src');

  // Display product details in a dialog box
  var dialogContent = `
      <div>
          <img src="${imgSrc}" alt="${name}" style="max-width: 100%; height: auto;">
          <p class="name">${name}</p>
          <p class="price">Rs. ${price}</p>
          <p>Product added to the cart!</p>
      </div>
  `;

  // Open a dialog box with the product details
  showDialog(dialogContent);
}

function showDialog(content) {
  // Create a dialog element
  var dialog = document.createElement('div');
  dialog.classList.add('dialog');
  dialog.innerHTML = content;

  // Append the dialog to the body
  document.body.appendChild(dialog);

  // Add a close button to the dialog
  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', function () {
      // Remove the dialog when the close button is clicked
      document.body.removeChild(dialog);
  });

  // Append the close button to the dialog
  dialog.appendChild(closeButton);
}

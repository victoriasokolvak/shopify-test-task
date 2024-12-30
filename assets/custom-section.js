function addToCart(productId) {
  fetch('/cart/add.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: productId }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Failed to add to cart');
      return response.json();
    })
    .then(() => {
      updateProductList();
      updateCartCounter();
      showCartPopup()
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to add product to cart.');
    });
}

function updateProductList() {
  fetch('/?section_id=custom-section')
    .then((response) => response.text())
    .then((html) => document.getElementById('custom-section').innerHTML = html)
    .catch((error) => console.error('Error updating product list:', error));
}

function updateCartCounter() {
  fetch('/cart.js')
    .then((response) => response.json())
    .then((cart) => {
      const cartIcon = document.getElementById('cart-icon-bubble');
      let bubble = cartIcon.querySelector('.cart-count-bubble');
      if (!bubble) {
        bubble = document.createElement('div');
        cartIcon.appendChild(bubble);
      }

      const cartCounter = bubble.querySelector('span') || document.createElement('span');
      bubble.classList.add('cart-count-bubble');
      bubble.appendChild(cartCounter);

      cartCounter.textContent = cart.item_count > 0 
        ? (cart.item_count < 100
          ? cart.item_count
          : '99+')
        : '';

      if (!cart.item_count) bubble.remove();
    })
    .catch((error) => console.error('Error updating cart counter:', error));
}

function showCartPopup() {
  const cartNotification = document.getElementById('cart-notification');
  if (cartNotification) {
    cartNotification.classList.add('active');
    setTimeout(() => {
      cartNotification.classList.remove('active');
    }, 5000);
  }
}

// Function to add a product to the shopping cart
function addToCart(productId, productName, price) {
    // Check if the product already exists in the cart
    var existingProduct = localStorage.getItem(productId);
    if (existingProduct) {
      // If the product exists, update the quantity
      var existingQuantity = parseInt(existingProduct);
      localStorage.setItem(productId, existingQuantity + 1);
    } else {
      // If the product doesn't exist, add it to the cart with a quantity of 1
      localStorage.setItem(productId, 1);
    }
  }
  
  // Function to update the quantity of a product in the shopping cart
  function updateCartQuantity(productId, quantity) {
    localStorage.setItem(productId, quantity);
  }
  
  // Function to remove a product from the shopping cart
  function removeFromCart(productId) {
    localStorage.removeItem(productId);
  }
  
  // Function to get the total quantity of items in the shopping cart
  function getCartTotalQuantity() {
    var totalQuantity = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      totalQuantity += parseInt(value);
    }
    return totalQuantity;
  }
  
  // Function to calculate the total price of items in the shopping cart
  function getCartTotalPrice() {
    var totalPrice = 0;
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      var price = getProductPrice(key);
      totalPrice += parseInt(value) * parseFloat(price);
    }
    return totalPrice.toFixed(2);
  }
  
  // Function to get the price of a product by its ID
  function getProductPrice(productId) {
    // Make an API call or retrieve the price from your product data source
    // Replace this with your actual code or data
    var products = {
      'Vegetables': '19.99',
      'Spices': '24.99'
    };
    return products[productId];
  }
  
  // Example usage:
  
  // Adding a product to the cart
  addToCart('Vegetables', 'Vegetables', '19.99');
  
  // Updating the quantity of a product in the cart
  updateCartQuantity('Vegetables', 3);
  
  // Removing a product from the cart
  removeFromCart('Spices');
  
  // Getting the total quantity of items in the cart
  var totalQuantity = getCartTotalQuantity();
  console.log('Total Quantity:', totalQuantity);
  
  // Getting the total price of items in the cart
  var totalPrice = getCartTotalPrice();
  console.log('Total Price:', totalPrice);
  
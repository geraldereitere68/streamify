/*
Filename: ComplexApp.js
Content: A complex JavaScript application that simulates an online shopping cart system with various features such as adding products, calculating prices, applying discounts, and generating invoices.
*/

// Define product class
class Product {
  constructor(id, name, price, discount = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}

// Define shopping cart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  calculateTotal() {
    let total = 0;

    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      const discountedPrice = product.price - (product.price * product.discount);
      total += discountedPrice;
    }

    return total;
  }

  generateInvoice() {
    console.log("=== Invoice ===");
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      console.log(`${product.name} - Price: $${product.price.toFixed(2)} - Discount: ${product.discount * 100}%`);
    }
    console.log("---------------");
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    console.log("================");
  }
}

// Create product instances
const product1 = new Product(1, "Product 1", 10.99, 0.1);
const product2 = new Product(2, "Product 2", 19.99, 0.05);
const product3 = new Product(3, "Product 3", 5.99);
const product4 = new Product(4, "Product 4", 24.99, 0.2);

// Create shopping cart instance
const cart = new ShoppingCart();

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
cart.addProduct(product4);

// Calculate and display total
console.log("Total amount: $" + cart.calculateTotal().toFixed(2));

// Generate invoice
cart.generateInvoice();
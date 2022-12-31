function hasValidPrice(product) {
    return   product.price >= 0  
  }

console.log(hasValidPrice(hasValidPrice({ "product": "Milk", price: 1.50 })));

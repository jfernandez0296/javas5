function hasValidPrice(product) {
  if(product={})
  { return false}
  else
  return (product.hasOwnProperty("product") && typeof product.price === 'number' && product.price>=0)
}

console.log(hasValidPrice({ "product": "Cheese", price: -1 }));

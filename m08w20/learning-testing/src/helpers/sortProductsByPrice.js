const sortProductsByPrice = (array) => {
  const sortedProducts = [...array].sort((a, b) => a.price - b.price);
  return sortedProducts;
};

export default sortProductsByPrice;

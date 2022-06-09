const fetchProducts = async (produto) => {
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const response = await url.json();
  return response;
  
};


  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }
  
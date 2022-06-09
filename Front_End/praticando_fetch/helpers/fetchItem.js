const fetchItem = async (produto) => {
  try {
    const url = await fetch(`https://api.mercadolibre.com/items/${produto}`);
    const response = await url.json();
    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}

require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
    const fetchUrl = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
  test('Testa se fetchProducts é uma função', () => {
      expect(fetchProducts).toBeInstanceOf(Function);
  });
  test('ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', async () => {
      await fetchProducts('computador');
      expect(fetch).toHaveBeenCalled();
      expect(fetch).toHaveBeenCalledWith(fetchUrl);
  });
  test('o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
      await fetchProducts('computador');
      expect(fetchProducts).toBeCalledWith(computadorSearch);
  });
  test('ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
      await fetchProducts();
      const error = new Error('You must provide an url');
      expect(fetchProducts).toBeCalledWith(error);
  })
});

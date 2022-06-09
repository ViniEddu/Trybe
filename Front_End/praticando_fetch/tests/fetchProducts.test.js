require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
  // Constantes globais acima
  
  // testes abaixo
  test('Ao executar a função fetchProducts é verificado se a mesma é de fato uma função', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  test('Ao executar a função fetchProducts("computador") é verificado se fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(fetchUrl);
  });
  test('Ao executar a função fetchProducts("computador") é verificado se seu retorno é uma estrutura de dados igual ao objeto /computadorSearch/ que se encontra importado no arquivo', async () => {
    const functionCalled = fetchProducts('computador');
    await expect(functionCalled).resolves.toEqual(computadorSearch);
  });
  test('Ao executar a função fetchProducts sem parametro é verificado se o retorno é um erro igual á "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchProducts()).resolves.toThrow(error);
  });
});

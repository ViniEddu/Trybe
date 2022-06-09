require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  const fetchUrl = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
  test('Verifica se a fetchProducts é uma função', () => {
    expect(fetchProducts).toBeInstanceOf(Function);
  });
  test('Verifica se a fetch é chamada ao executar a função fetchProducts', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(fetchUrl);
  });
  test('Verifica se a função retorna uma estrutura de dados igual a computadorSearch', async ()=> {
   const chamada = fetchProducts('computador');
  await expect(chamada).resolves.toEqual(computadorSearch);
  });
  test('verifica se a função sem argumentos retorna o erro You must provide an url', async () => {
    const error = new Error('You must provide an url')
    await expect(fetchProducts()).resolves.toThrow(error);
  })
});

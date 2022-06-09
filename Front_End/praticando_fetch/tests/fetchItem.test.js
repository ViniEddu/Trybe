require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  const fetchUrl = `https://api.mercadolibre.com/items/MLB1615760527`;
  test('Verifica se a fetchItems é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  test('Verifica se a fetch é chamada ao executar a função fetchItems', async () => {
    expect.assertions(2);
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(fetchUrl);
  });
  test('Verifica se a função retorna uma estrutura de dados igual a /item/', async ()=> {
   const chamada = fetchItem('MLB1615760527');
  await expect(chamada).resolves.toEqual(item);
  });
  test('verifica se a função sem argumentos retorna o erro You must provide an url', async () => {
    const error = new Error('You must provide an url')
    await expect(fetchItem()).resolves.toThrow(error);
  })
});

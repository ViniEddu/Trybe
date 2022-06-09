require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // Testes abaixo
  test('Ao executar a função fetchItem é verificado se a mesma é uma função', () => {
    expect(fetchItem).toBeInstanceOf(Function);
  });
  test('Ao executar a função fetchItem("MLB1615760527") é verificado se fetch foi chamado', async () => {
    await fetchItem('MLB1615760527');
    const fetchUrl = `https://api.mercadolibre.com/items/MLB1615760527`
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith(fetchUrl);
  });
  test('Ao executar a função fetchItem("MLB1615760527"), é verificado se é retornado uma estrutura de dados igual ao objeto /item/ que já está importado no arquivo', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  });
  test('Ao executar a função fetchItem sem nenhum parametro, é verificado se o retorno é um erro com a mensagem "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchItem()).resolves.toThrow(error);
  });
});

const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('ao executar saveCartItems com o argumento <li>Item</li>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<li>Item</li>')
    expect(localStorage.setItem).toHaveBeenCalled()
  })

  test('ao executar saveCartItems com o argumento <li>Item</li>, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    saveCartItems('<li>Item</li>')
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<li>Item</li>')
  })
});

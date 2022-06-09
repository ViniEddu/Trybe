const items = document.querySelector('.items'); // Section que contém os itens dentro
const cartItems = document.querySelector('.cart__items'); // Ol que contém os itens adicionados ao carrinho
const btnEmpty = document.querySelector('.empty-cart');
// Acima estão as constantes globais

// Abaixo está a função que cria as tags de img com o src de cada imagem que for adicionado
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const esvaziaCarrinho = () => {
  cartItems.innerHTML = '';
};

btnEmpty.addEventListener('click', esvaziaCarrinho);

// A função abaixo remove os itens do carrinho ao clicar neles.
const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(cartItems);
};

cartItems.addEventListener('click', cartItemClickListener);

// A função abaixo recebe um item como parametro, sendo ele o ID de cada produto
const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

// A função abaixo cria elementos dos produtos passados como parametros a ele (Carrinho)
const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// A função abaixo adiciona os itens ao carrinho
function addItemCart(event) {
  if (event.target.classList.contains('item__add')) {
  const getSku = getSkuFromProductItem(event.target.parentElement);
  fetchItem(getSku).then((objeto) => {
   cartItems.appendChild(createCartItemElement(objeto));
   saveCartItems(cartItems);
  });
  }
}

// Abaixo está a função que cria qualquer elemento que eu queira, passando os paramentros corretos
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  // Aqui foi adicionado o eventListener que quando esta criando os elementos, já adiciona um evento de click que executa a função de addItemCart(), cuja qual está responsável por adicionar os itens ao carrinho
  e.addEventListener('click', addItemCart);
  return e;
};

// A função abaixo cria os elementos baseados nos produtos passados como parametros a ele
const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

// Essa função é utilizada para criar a lista de produtos e exibi-la na tela
// Essa função será async pois está lidando com os dados da API que precisam ser resolvidos antes de serem retornados
const productList = async () => {
  // Criação de uma constante para armazenar o array de resultados da API
  const dataResult = await fetchProducts('computador').then((data) => data.results);
  // Criando um forEach para percorrer cada elemento do Array de objetos para adiciona-los um a um dentro da section de classe .items
  dataResult.forEach((element) => {
    const item = createProductItemElement(element);
    items.appendChild(item);
  });
};

// Ao carregar a página as funções abaixo são automaticamente executadas
window.onload = () => {
  productList();
  getSavedCartItems();
};
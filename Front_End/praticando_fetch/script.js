const classCartItems = '.cart__items';
const items = document.querySelector('.items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const sumPrices = () => {
  let sum = 0;
  const total = document.querySelector('.total-price');
  const arrayList = document.querySelectorAll('li');
  arrayList.forEach((element) => {
    sum += parseFloat(element.innerHTML.split('$')[1] * 100);
  });
  total.innerHTML = sum / 100;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
  const olHtml = document.querySelector(classCartItems).innerHTML;
  saveCartItems(olHtml);
  sumPrices();
};

const createCartItemElement = ({ id: sku, title: name, price: salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductList = async () => {
  const loading = document.createElement('span');
  loading.innerHTML = 'carregando...';
  loading.className = 'loading';
  document.querySelector('.items').appendChild(loading);
  const data = await fetchProducts('computador');
  document.querySelector('.loading').remove();
  const arrayProducts = data.results;
  arrayProducts.forEach((element) => {
    const item = createProductItemElement(element);
    items.appendChild(item);
  });
};

const addToCart = (data) => {
  const cart = document.querySelector(classCartItems);
  const itemCart = createCartItemElement(data);
  itemCart.addEventListener('click', cartItemClickListener);
  cart.appendChild(itemCart);
};

const addEventToItems = () => {
  items.addEventListener('click', (event) => {
    if (event.target.classList.contains('item__add')) {
      const id = getSkuFromProductItem(event.target.parentNode);
      fetchItem(id).then((data) => {
        addToCart(data);
        const olHtml = document.querySelector(classCartItems).innerHTML;
        saveCartItems(olHtml);
        sumPrices();
      });  
    }
  });
};

const loadLocalStorage = () => {
  const olList = document.querySelector('ol');
  olList.innerHTML = getSavedCartItems();
  document.querySelectorAll('li').forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

document.querySelector('.empty-cart').addEventListener('click', () => {
  localStorage.clear();
  document.querySelector('ol').innerHTML = '';
});

window.onload = () => { 
  createProductList();
  addEventToItems();
  loadLocalStorage();
};
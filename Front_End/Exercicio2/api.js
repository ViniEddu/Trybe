const fetchCryptoOSuperCao = async () => {
    const URL = `https://api.coincap.io/v2/assets`;
    const promisse = await fetch(URL)
        .then(response => response.json())
        .then(data => data.data)
    return promisse;
}

const fetchCryptoCurrency = async () => {
    const cryptoURL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json`;
    const promessa = await fetch(cryptoURL)
    .then(response => response.json())
    .then(data => data.usd.brl)
    return promessa
};

const criaLi = async () => {
    const currencyBrl = await fetchCryptoCurrency();
    const data = await fetchCryptoOSuperCao();
    const ul = document.getElementById('crypto-coins');

    data.filter((elemento) => elemento.rank <= 10)
        .forEach((element) => {
            const newLi = document.createElement('li');
            newLi.className = 'itemList'
            const usdPrice = Number(element.priceUsd * currencyBrl);
            newLi.innerHTML = `${element.id} ${element.symbol}: ${usdPrice.toFixed(2)}`
            ul.appendChild(newLi);
        });  
};

window.onload = () => criaLi();


// Retorna atualmente (usdPrice = Valor em dólar) => brlPrice = Valor em Real
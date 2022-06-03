const fetchCryptoOSuperCao = async () => {
    const URL = `https://api.coincap.io/v2/assets`;
    const promisse = await fetch(URL)
        .then(response => response.json())
        .then(data => data.data)
    return promisse;
}

const criaLi = async () => {

    const data = await fetchCryptoOSuperCao();
    const ul = document.getElementById('crypto-coins');

    data.filter((elemento) => elemento.rank <= 10)
        .forEach((element) => {
            const newLi = document.createElement('li');
            newLi.className = 'itemList'
            const usdPrice = Number(element.priceUsd)
            newLi.innerHTML = `${element.id} ${element.symbol}: ${usdPrice.toFixed(2)}`
            ul.appendChild(newLi);
        });
};

window.onload = () => criaLi()
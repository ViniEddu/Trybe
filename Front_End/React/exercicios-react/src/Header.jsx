import React from 'react'
const imagem1 = 'https://s2.glbimg.com/SkyLTd6VJy8WiUMg5L6EeUwgyMw=/0x0:620x548/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/t/limPwzQmSeI4WJO7haZg/2012-08-15-mf1.jpg';

const arrayImage = [imagem1];

const criaImage = (value) => {
    return (
        <img className='photo-logo' src={value} alt="off" key={value}/>
    )
}

const imageList = () => {
    return (
        arrayImage.map((imagem) => criaImage(imagem))
    )
}

const arrayMenu = ['Módulos SAP', 'Inbox', 'Tickets KWS', 'Tickets']

const criaLi = (value) => {
    return (
        <li className='menu-item' key={value}>{value}</li>
    )
}

const menuList = () => {
    return (
        arrayMenu.map((item) => {
            return criaLi(item)
        })
    )
}

class Header extends React.Component {
    render() {
       return (
    <header className='cabecalho'>
    <div className='div-logo'>    
        {imageList()}
        <h1>Front-End</h1>
    </div>
    <nav className='menu'>
        {menuList()}
    </nav>
    </header>
    )}
}


export default Header

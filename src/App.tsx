import React from 'react';
import cart from './img/cart.svg';
import './css/App.css';

function Logo() {
  return <span className="logo">Goods4you</span>;
}

function Cart() {
  return <div className="cart-block">
    <a className="menu__link" href="#">Cart</a>
    <div className="cart">
      <button className="cart__button"><img src={cart} alt="cart" /><span className="cart__count">1</span></button>
    </div>
  </div>;
}

interface Button {
  text: string;
}

function Button({ text }: Button) {
  return <button className="button">{text}</button>;
}

const menuLinks = [
  { title: 'Catalog', id: 1 },
  { title: 'About us', id: 2 },
  { title: 'Product selection', id: 3 },
  { title: 'Our team', id: 4 },
  { title: 'Shipping and payment', id: 5 },
  { title: 'Contacts', id: 6 },
];
const listMenuLinks = menuLinks.map((link) => (
    <li key={link.id}><a className="menu__link" href="#">{link.title}</a></li>
));

function Menu() {
  return <nav className="menu"><ul>{listMenuLinks}</ul></nav>;
}

function Header() {
  return <header>
    <Logo />
    <div className="header-right-block">
      <Menu />
      <Cart />
    </div>
  </header>;
}

function HeaderContainer() {
  return <div className="header-container"><div className="width-limiter">
      <Header />
      <h1>Any products from famous brands with worldwide delivery</h1>
      <p>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
      <Button text={'Go to shopping'} />
      <span>Goods4you</span>
  </div></div>;
}

function Main() {
  return <main><div className="width-limiter"></div></main>;
}

function Footer() {
  return <footer><div className="footer-content width-limiter">
    <Logo />
    <Menu />
  </div></footer>;
}

function App() {
  return (
      <div className="app">
        <HeaderContainer />
        <Main />
        <Footer />
      </div>
  );
}

export default App;

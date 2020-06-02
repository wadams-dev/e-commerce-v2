import React from 'react';
const products = require ('./products.json'); 

class Products extends React.Component {
    render() {
        return (
            <React.Fragment>
    <header id="top">
      <nav>
        <ul className="nav-bar">
          <li className="list-items"><a className="link" href="index.html">home</a></li>
          <li className="list-items">
            <a className="link active-page" href="inventory.html">inventory</a>
          </li>
          <li className="list-items">
            <a className="link" href="contact.html">contact</a>
          </li>
        </ul>
      </nav>
      <div className="hero-img">
        <h1 className="hero-text">Inventory</h1>
      </div>
    </header>
    <main>
      <div className="container">
          {products.products.map((item,key) => {
              return (
                <div className="card">
                <img
                  className="card__image"
                  src={item.image_url}
                  alt=""
                />
                <h2 className="card__title">{item.name}</h2>
                <p><span className="card__subtitle">Price</span> : {item.price}</p>
                <p>
                  <span className="card__subtitle">Description</span> : {item.description}
                </p>
                <a
                  href="https://www.charlottemclaren.com/2014-mclaren-p1-c-446.htm"
                  ><button className="dealer__button">BUY NOW</button></a
                >
              </div>
              )
          })}
      </div>
    </main>
    <footer className="footer">
      <div>
        <p><a href="#top">back to top</a></p>
        <a
          className="footer-links"
          href="https://www.facebook.com/"
          title="Go to Facebook.com"
          >Facebook</a
        >
        <a
          className="footer-links"
          href="https://www.instagram.com/"
          title="Go to Instagram.com"
          >Instagram</a
        >
        <a
          className="footer-links"
          href="https://twitter.com/"
          title="Go to Twitter.com"
          >Twitter</a
        >
      </div>
      <div className="logo-container">
        <img className="logo" src="images/steering-wheel.png" alt="company logo" />
      </div>
      <p className="copyright">&copy;Grid Motorsports 2020</p>
    </footer>
            </React.Fragment>
        )
    }
}

export default Products;
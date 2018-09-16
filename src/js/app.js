import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, HashRouter as Router} from 'react-router-dom'

// Import specific icons
import { FiHome } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

import { IconContext } from "react-icons";

import './../css/styles.css';

const { render } = ReactDOM;

const menuLinks = [
  {id: 'home', link: "/", text: "Home", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiHome /></IconContext.Provider>},
  {id: 'products', link: "/products", text: "Products", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiShoppingBag /></IconContext.Provider>},
  {id: 'wholesale', link: "/wholesale", text: "Wholesale", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiBriefcase /></IconContext.Provider>},
  {id: 'contact', link: "/contact-us", text: "Contact", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiMail /></IconContext.Provider>},
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <Logo title="Amm Zap" />
        </Link>
        <Nav links={menuLinks} />
      </header>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <h2>
        <img src="assets/img/logo/logoAmmZapWhite.png" alt={this.props.title} className="logoImg" />
      </h2>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <nav>
        {this.props.links.map((menuLink) => {
          return (
            <li key={menuLink.id}>
              <Link to={menuLink.link}>
                {menuLink.icon} <span className="nav-icon-text">{menuLink.text}</span>
              </Link>
            </li>
          );
        })}
      </nav>
    );
  }
}

class BottomRightSticky extends React.Component {
  render() {
    return (
      <div className="bottomright"></div>
    );
  }
}

class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <video key="hero-video" id="video-background" autoPlay loop muted plays-inline="true" src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4" />
        <h3>Welcome to ZenThai</h3>

        <p>ZenThai Trading Ltd. specialises in sourcing unique products from Thailand to the world’s kitchen. Our new product line is a specially selected dried fruit chilli paste which is high quality and suitable for vegans. These natural ingredients will make your dishes tastier but still remain healthy.</p>

        <hr />

        <img src="assets/img/products/Apple-Chilli.png" width="220px" />

        <Link to="/products" className="btn">
          See our full product range
        </Link>

      </section>
    );
  }
}

class SocialLinks extends React.Component {
  render() {
    return (
      <section className="features">
        <h3 className="title">Find out more</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
        <hr />
        <ul className="grid">
          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-instagram-custom" }}>
              <FiInstagram />
            </IconContext.Provider>
            <h4>Instagram</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
          </li>

          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-fb-custom" }}>
              <FiFacebook />
            </IconContext.Provider>
            <h4>Facebook</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
          </li>

          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-mail-custom" }}>
              <FiMail />
            </IconContext.Provider>
            <h4>E-mail</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
          </li>
        </ul>
      </section>
    );
  }
}

/**
 * Wrapper component
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={ListProducts} />
        <Route path='/wholesale' component={Wholesale} />
        <Route path='/contact-us' component={ContactPage} />
      </React.Fragment>
    );
  }
}

/**
 * Landing page component
 */
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Hero />
        <SocialLinks />
        <BottomRightSticky />
      </div>
    );
  }
}

/**
 * ListProducts page component
 */
class ListProducts extends React.Component {
  render() {
    return (
      <div className="product-list">
        <Header />
        <section className="features">
          <h3 className="title">Our Products</h3>

          <p>
          Some of our nice products
          </p>
        </section>
        <SocialLinks />
        <BottomRightSticky />
      </div>
    );
  }
}

/**
 * Wholesale page component
 */
class Wholesale extends React.Component {
  render() {
    return (
      <div className="wholesale">
        <Header />
        <section className="features">
          <h3 className="title">Wholesale</h3>

          <p>
            If you interested to buy products from us in bigger batch please contact us and we will come back to you.
          </p>

          <div>
            <ul className="list-visible">
              <li className="list-circle">See our chilli paste range <a href="assets/pdf/zenthai-chilli.pdf" target="_blank"><b>here</b></a>.</li>
              <li className="list-circle">See our NEW chilli herbs range <a href="assets/pdf/zenthai-chilli-herbs.pdf" target="_blank"><b>here</b></a>.</li>
            </ul>

            <p></p>
            <ul className="list-visible">
              <li className="list-circle"><b>Full price list available <a href="assets/pdf/zenthai-price-list-2018.pdf" target="_blank">here</a></b></li>
            </ul>

            <p>
              <h4>Sachet size:</h4>
              <img src="assets/img/sachet-size.jpg" alt="chilli sprinkle sachet size" className="img-responsive" />
            </p>

            <p>
              <h4>Sachet types</h4>
              <img src="assets/img/packaging-new.jpg" alt="chilli sprinkle sachet packaging" className="img-responsive" />
            </p>

            <p>
              <h4>Box size:</h4>
              <img src="assets/img/box-size.png" alt="chilli sprinkle box size" className="img-responsive" />
            </p>
            
          </div>

        </section>
        <SocialLinks />
        <BottomRightSticky />
      </div>
    );
  }
}

/**
 * Contact page component
 */
class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-us">
        <Header />
        <section className="contact">
          <h3 className="title">Any questions please contact us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
            <hr />
            <form>
              <p>
                <input type="name" placeholder="Your name" />
                <input type="email" placeholder="Email" />
              </p>
              <p>
                <textarea rows="5" cols="50" value="Your query" />
              </p>
              <p>
                <a href="#" className="btn">Send <FiSend /></a>
              </p>
            </form>
        </section>
        <SocialLinks />
        <BottomRightSticky />
      </div>
    );
  }
}

render(
  <Router basename="/page/">
    <App />
  </Router>,
  document.getElementById('react-container')
);

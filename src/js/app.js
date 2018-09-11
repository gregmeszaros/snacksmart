import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, HashRouter as Router} from 'react-router-dom'

// Import specific icons
import { FiHome } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const { render } = ReactDOM;

const menuLinks = [
  {id: 'home', link: "/", text: "Home", icon: <FiHome />},
  {id: 'products', link: "/products", text: "Products", icon: <FiShoppingBag />},
  {id: 'wholesale', link: "/wholesale", text: "Wholesale", icon: <FiBriefcase />},
  {id: 'contact', link: "/contact-us", text: "Contact Us", icon: <FiMail />},
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo title="Amm Zap" />
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
              <Link to= {menuLink.link}>
                {menuLink.icon} {menuLink.text}
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
        <img src="assets/img/products/Apple-Chilli.png" />
        <a href="http://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" className="btn">See our product range</a>
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
            <i className="fa fa-camera-retro"></i>
            <h4>Instagram</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
          </li>

          <li>
            <i className="fa fa-cubes"></i>
            <h4>Facebook</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
          </li>

          <li>
            <i className="fa fa-newspaper-o"></i>
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
          <p>
          If you interested to buy products from us in bigger batch please contact us and we will come back to you.
          <br />
          Please see our price list!
          </p>
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
                <a href="#" className="btn">Send</a>
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

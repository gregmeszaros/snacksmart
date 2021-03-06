import React from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, Link, HashRouter as Router, browserHistory} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

// Header components
import Header from "./components/Header/Header";

// Async components
import asyncComponent from "./AsyncComponent";

// Import specific icons
import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { FiShoppingCart} from "react-icons/fi";

import { IconContext } from "react-icons";

import './../css/styles.css';
import './../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const { render } = ReactDOM;

const productList = [
  {prodId: "1", textId: "text-1", "imgUrl": "assets/img/products/Apple-Chilli.png", "short_title": "Apple", "title": "Apple chilli Sprinkle", "byline": "some short description 1", "text": "long text"},
  {prodId: "2", textId: "text-2", "imgUrl": "assets/img/products/Longan-Chilli.png", "short_title": "Longan", "title": "Longan chilli Sprinkle", "byline": "some short description 2", "text": "long text"},
  {prodId: "3", textId: "text-3", "imgUrl": "assets/img/products/Lychee-Chilli.png", "short_title": "Lychee", "title": "Lychee chilli Sprinkle", "byline": "some short description 2", "text": "long text"},
  {prodId: "4", textId: "text-4", "imgUrl": "assets/img/products/Mango-Chilli.png",  "short_title": "Mango", "title": "Mango chilli Sprinkle", "byline": "some short description 2", "text": "long text"},
  {prodId: "5", textId: "text-5", "imgUrl": "assets/img/products/Pineapple-Chilli.png", "short_title": "Pineapple", "title": "Pineapple chilli Sprinkle", "byline": "some short description 2", "text": "long text"},
];

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
        <div className="background-image"></div>
        <h3>Welcome to Zen Thai</h3>

        <p>Here at Zen Thai we specialise in sourcing unique food products from Thailand to the European market. <br />
          Our latest product line are specially selected dried fruits with chilli paste sprinkles which are high in quality and also suitable for vegans.
          The product comes in 5 different flavours; mango, apple, pineapple, lychee and longan.
          The combination of exotic dried fruits and chilli will surprisingly make your simple dishes tastier.
        </p>

        <hr />

        <Carousel showArrows={true} autoPlay interval={5000} infiniteLoop emulateTouch>
          <div>
            <img src="assets/img/products/Apple-Chilli.png" />
            <p className="legend">Apple Chilli Sprinkle</p>
          </div>
          <div>
            <img src="assets/img/products/Longan-Chilli.png" />
            <p className="legend">Longan Chilli Sprinkle</p>
          </div>
          <div>
            <img src="assets/img/products/Lychee-Chilli.png" />
            <p className="legend">Lychee Chilli Sprinkle</p>
          </div>
          <div>
            <img src="assets/img/products/Mango-Chilli.png" />
            <p className="legend">Mango Chilli Sprinkle</p>
          </div>
          <div>
            <img src="assets/img/products/Pineapple-Chilli.png" />
            <p className="legend">Pineapple Chilli Sprinkle</p>
          </div>
        </Carousel>

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
      <section className="features top-border">
        <h3 className="title">Find out more</h3>
        <p>Follow us on Facebook or Instagram. If you have any questions or you interested to buy from us please do not hesitate to <Link to="/contact-us"><strong>contact us</strong></Link>.</p>
        <hr />
        <ul className="grid">
          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-instagram-custom" }}>
              <FiInstagram />
            </IconContext.Provider>
            <h4>Instagram</h4>
            <p>Follow us on Instagram.</p>
          </li>

          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-fb-custom" }}>
              <FiFacebook />
            </IconContext.Provider>
            <h4>Facebook</h4>
            <p>Connect with us on Facebook.</p>
          </li>

          <li>
            <IconContext.Provider value={{ size: "2em", className: "social-mail-custom" }}>
              <FiMail />
            </IconContext.Provider>
            <h4><Link to="/contact-us">E-mail</Link></h4>
            <p>Interested to order from us, let us know.</p>
          </li>
        </ul>
      </section>
    );
  }
}

// Setup Cart route
const CartPage = asyncComponent(() =>
    import('./components/Cart/CartPage').then(module => module.default)
)

/**
 * Wrapper component
 */
class App extends React.Component {

  componentDidUpdate(prevProps) {
    // Changed scroll to top
    console.log('changed');
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={() => (
          <Redirect to="/home"/>
        )}/>
        <Route exact path='/home' component={Home} />
        <Route path='/products' component={ListProducts} />
        <Route path='/wholesale' component={Wholesale} />
        <Route path='/contact-us' component={ContactPage} />
        <Route path='/cart' component={CartPage} />
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
        <section className="our-work">
          <h3 className="title">Our Products</h3>

          <ul className="grid">
            {productList.map((productData, key) => {
              return (
                <React.Fragment key={key}>
                  <li key={productData.prodId} className="small">
                    <img src={productData.imgUrl} className="img-responsive max-400" />
                  </li>
                  <li key={productData.textId} className="large">
                    <h4>{productData.title}</h4>

                    <ul className="list-visible">
                      <li className="list-circle">Dried {productData.short_title} 40%</li>
                      <li className="list-circle">Garlic 20%</li>
                      <li className="list-circle">Onion 20%</li>
                      <li className="list-circle">Dried chilli 10%</li>
                      <li className="list-circle">Sugar 9%</li>
                      <li className="list-circle">Salt 1%</li>
                      <li className="list-circle">No preservatives</li>
                      <li className="list-circle">Vegan friendly</li>
                      <li className="list-circle">No MSG</li>
                    </ul>

                  </li>

                  <li className="cart">
                    <button id={productData.prodId} className="btn">Add to Cart <FiShoppingCart /></button>
                  </li>

                </React.Fragment>
              );
            })}
          </ul>

          <hr />
          <img src="assets/img/am-zap-product-how.jpg" className="img-responsive max-400" />

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
             If you are interested in buying any of our products from us in wholesale then please <Link to="/contact-us"><strong>contact us</strong></Link> and we will be in touch.
          </p>

          <ul className="list-visible">
            <li className="list-circle">See our chilli paste sprinkles range <a className="green-href" href="assets/pdf/zenthai-chilli.pdf" target="_blank"><b>here</b></a>.</li>
            <li className="list-circle">See our NEW chilli herb sprinkles range <a className="green-href" href="assets/pdf/zenthai-chilli-herbs.pdf" target="_blank"><b>here</b></a>.</li>
          </ul>

          <p></p>
          <ul className="list-visible">
            <li className="list-circle"><b>Full price list available <a className="green-href" href="assets/pdf/zenthai-price-list-2018.pdf" target="_blank">here</a></b>.</li>
          </ul>


          <h4>Sachet size:</h4>
          <p>
            <img src="assets/img/sachet-size.jpg" alt="chilli sprinkle sachet size" className="img-responsive" />
          </p>

          <h4>Sachet types</h4>
          <p>
            <img src="assets/img/packaging-new.jpg" alt="chilli sprinkle sachet packaging" className="img-responsive" />
          </p>

          <h4>Box size:</h4>
          <p>
            <img src="assets/img/box-size.png" alt="chilli sprinkle box size" className="img-responsive" />
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
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {response: ""};
  }

  componentDidMount() {
    // Only load on specific route
    const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;

      document.body.appendChild(script);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('contact.php', {
      method: 'POST',
      body: data,
    })
    .then(response => response.json())
    .then(json => {
        // After form successfully submitted we reset recaptcha
        grecaptcha.reset();

        // We show detailed information to the user
        this.setState({ response: json.data.response });
        console.log(json);
      }
    )
  }

  render() {
    return (
      <div className="contact-us">
        <Header />
        <section className="contact">
          <h3 className="title">Contact us</h3>
            <p>At Zen Thai we always like to hear your feedback or any questions that you might have, you can contact us via our email address <strong> <a href="mailto:zenthailtd@gmail.com" data-rel="external"> zenthailtd@gmail.com </a> </strong> or by filling the form below.</p>
            <hr />
            <form onSubmit={this.handleSubmit}>
              <p>
                <input name="name" type="name" placeholder="Your name" required />
                <input name="email" type="email" placeholder="Email" required />
              </p>
              <p>
                <textarea name="query" rows="5" cols="50" placeholder="Your query" />
              </p>
              <p>
                <div className="g-recaptcha" data-sitekey="6LciUXEUAAAAAJ7jWX891bqSHmTKskNxHYg8S3dp"></div>
                <div className="form-response-info">{this.state.response}</div>
                <button className="btn">Send <FiSend /></button>
              </p>
            </form>

            <p>
              <img src="assets/img/zen-thai-logo.png" width="150px" /><br />
              <strong>ZEN THAI LTD</strong><br />
              <strong>Tel: 074-956-66-956</strong><br />
              <address className="vcard">
                <span className="adr">
                  <span className="street-address">35 Stainland Road</span><br />
                  <span className="locality">Greetland, Halifax </span>
                  <span className="postal-code">HX4 8AD</span><br />
                  <span className="country-name">United Kingdom</span>
                </span>
              </address>
            </p>
        </section>
        <SocialLinks />
        <BottomRightSticky />
      </div>
    );
  }
}

render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('react-container')
);

export default App;
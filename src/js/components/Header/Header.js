import React from "react";
import { Link, NavLink } from "react-router-dom";

// Import icons used in header
import { FiHome } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import { IconContext } from "react-icons";

const menuLinks = [
  {id: "home", link: "/home", text: "Home", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiHome /></IconContext.Provider>},
  {id: "products", link: "/products", text: "Products", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiShoppingBag /></IconContext.Provider>},
  {id: "wholesale", link: "/wholesale", text: "Wholesale", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiBriefcase /></IconContext.Provider>},
  {id: "contact", link: "/contact-us", text: "Contact", icon: <IconContext.Provider value={{ className: "nav-icon"}}><FiMail /></IconContext.Provider>},
];

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/home">
          <Logo title="Am Zap" />
        </Link>
        <Nav links={menuLinks} />
      </header>
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
              <NavLink to={menuLink.link} activeClassName="selected">
                {menuLink.icon} <span className="nav-icon-text">{menuLink.text}</span>
              </NavLink>
            </li>
          );
        })}
      </nav>
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

export default Header;
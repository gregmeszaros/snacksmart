import React from "react";

class CartPage extends React.Component {
  componentDidMount() {
    paypal.Buttons({
      createOrder: function(data, actions) {
        // Set up the transaction
        return actions.order.create({
          application_context: {
            brand_name: "GadgetLand Store",
            shipping_preference: "SET_PROVIDED_ADDRESS"
          },
          purchase_units: [{
            description: "ORDER NUMBER 1 - GM Store",
            amount: {
              currency_code: "GBP",
              value: "0.1"
            },
            shipping: {
              name: {
                full_name: "Greg Here Meszaros"
              },
              address: {
                address_line_1: "8",
                address_line_2: "Medland Mews",
                admin_area_2: "Chertsey",
                admin_area_1: "Surrey",
                postal_code: "KT16 9FZ",
                country_code: "GB"
              }
            }
          }]
        });
      }
    }).render('#paypal-button-container');
  }
  render() {
    return (
      <div className="cart">
        <div id="paypal-button-container"></div>
        custom cart route
      </div>
    );
  }
}

export default CartPage;

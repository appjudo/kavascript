// Generated by KavaScript 1.10.0
var Account;

Account = function(customer, cart) {
  this.customer = customer;
  this.cart = cart;
  return $('.shopping_cart').on('click', (function(_this) {
    return function(event) {
      return _this.customer.purchase(_this.cart);
    };
  })(this));
};

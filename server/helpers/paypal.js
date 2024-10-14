const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AUY6EMgWMPSeHKGCd7W3VbSqoYfReNnUNelUSnaMnGj8YGLBNjdKgIbN7jnIWWK0b-KVEQbPufQh9oQV",
  client_secret: "EFuKhbO7H65wegVNoHv2UD42e0hwKN7BVTGOFoVFb0H4GSLL5-2mrAHPWKhDPGpqR-oAiovsdfI_jeW-",
});

module.exports = paypal;

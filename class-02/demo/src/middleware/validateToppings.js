// middleware for checking toppings per request
function validateToppings(req, res, next) {
  let toppings = ['lettuce', 'bacon', 'cheese', 'tomatoes'];
  if (!toppings.includes(req.params.topping)) {
    // passes an error to our error handler
    next('Invalid topping for a sandwich');
  } else {
    // passes the request object down to the next middleware
    next();
  }
}

module.exports = validateToppings;

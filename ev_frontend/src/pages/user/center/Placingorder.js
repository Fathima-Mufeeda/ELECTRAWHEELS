import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Placingorder = () => {
  // Dummy cart data; in a real app, cart data would be shared via context or retrieved from backend/localStorage.
  const [cart, setCart] = useState([
    { id: 101, name: "Brake Pad", price: 50, quantity: 1 },
    { id: 102, name: "Air Filter", price: 20, quantity: 2 }
  ]);

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  };

  const placeOrder = () => {
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Order placed successfully! Total amount: $${total}`);
    // Clear cart after placing order
    setCart([]);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cart.map(item => (
            <div key={item.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-success" onClick={placeOrder}>
            Place Order & Make Payment
          </button>
        </div>
      )}
      <div className="text-center mt-3">
        <Link to="/sparedetails/1" className="btn btn-secondary">Back to Spare Parts</Link>
      </div>
    </div>
  );
};

export default Placingorder;

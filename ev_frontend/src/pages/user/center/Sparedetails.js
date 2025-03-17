import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Sparedetails = () => {
  const { centerId } = useParams(); // Get service center ID from URL

  // Dummy service center details and spare parts list
  const serviceCenter = {
    id: centerId,
    name: "Service Center Alpha",
    address: "123 Main St",
    spareParts: [
      { id: 101, name: "Brake Pad", description: "High quality brake pad", available: 20, price: 50 },
      { id: 102, name: "Air Filter", description: "Durable and efficient", available: 15, price: 20 },
      { id: 103, name: "Oil Filter", description: "Long lasting oil filter", available: 30, price: 30 }
    ]
  };

  // State to simulate a cart (for adding spare parts)
  const [cart, setCart] = useState([]);

  const addToCart = (part) => {
    setCart([...cart, part]);
    alert(`${part.name} added to cart!`);
  };

  return (
    <div className="container mt-5">
      {/* Navigation link to view cart */}
      <div className="text-end mb-3">
        <Link to="/placingorder" className="btn btn-info">
          View Cart ({cart.length})
        </Link>
      </div>
      <h2 className="text-center mb-3">{serviceCenter.name}</h2>
      <p className="text-center">{serviceCenter.address}</p>
      <div className="row">
        {serviceCenter.spareParts.map(part => (
          <div key={part.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{part.name}</h5>
                <p className="card-text">{part.description}</p>
                <p className="card-text">Available: {part.available}</p>
                <p className="card-text">Price: ${part.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(part)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <Link to="/searchcenter" className="btn btn-secondary">
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default Sparedetails;

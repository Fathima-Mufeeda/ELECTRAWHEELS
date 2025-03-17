import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Spareorder = () => {
    const [orderData, setOrderData] = useState({
        productId: "",
        productName: "",
        quantity: 1,
        preferredTime: "",
        customerName: "",
        contact: ""
    });

    const handleChange = (e) => {
        setOrderData({ ...orderData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, we're just showing an alert. Later, integrate an API call.
        alert("Order placed successfully (Static for now)");
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Place Your Order</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow">
                <div className="mb-3">
                    <label className="form-label">Product ID</label>
                    <input
                        type="text"
                        name="productId"
                        value={orderData.productId}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        value={orderData.productName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={orderData.quantity}
                        onChange={handleChange}
                        className="form-control"
                        min="1"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Preferred Delivery Time</label>
                    <input
                        type="text"
                        name="preferredTime"
                        value={orderData.preferredTime}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g., 2 PM - 4 PM"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Customer Name</label>
                    <input
                        type="text"
                        name="customerName"
                        value={orderData.customerName}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Info</label>
                    <input
                        type="text"
                        name="contact"
                        value={orderData.contact}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </form>
            <div className="mt-3">
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </div>
        </div>
    );
};

export default Spareorder;

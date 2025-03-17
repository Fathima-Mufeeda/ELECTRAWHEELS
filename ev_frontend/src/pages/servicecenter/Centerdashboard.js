import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Centerdashboard = () => {
  const [activeTab, setActiveTab] = useState("spares");

  // Spares Management state
  const [spareDetails, setSpareDetails] = useState({ id: "", name: "", price: "", description: "" });
  const [spares, setSpares] = useState([]);

  // Dummy Enquiries data
  const [enquiries, setEnquiries] = useState([
    { id: 1, question: "When will spare part A be available?", response: "" },
    { id: 2, question: "Do you offer discounts on spare parts?", response: "" }
  ]);

  // Dummy Orders data
  const [orders] = useState([
  { id: 1, product: "Spare Part A", paymentStatus: "Paid", deliveryStatus: "Delivered" },
  { id: 2, product: "Spare Part B", paymentStatus: "Pending", deliveryStatus: "Processing" }
]);


  // Handlers for Spares
  const handleSpareChange = (e) => {
    setSpareDetails({ ...spareDetails, [e.target.name]: e.target.value });
  };

  const addSpare = () => {
    setSpares([...spares, spareDetails]);
    setSpareDetails({ id: "", name: "", price: "", description: "" });
  };

  const removeSpare = (index) => {
    setSpares(spares.filter((_, i) => i !== index));
  };

  // Handler for Enquiry responses
  const handleEnquiryResponseChange = (index, response) => {
    const updatedEnquiries = [...enquiries];
    updatedEnquiries[index].response = response;
    setEnquiries(updatedEnquiries);
  };
  // Handler for confirming order
  const confirmOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].confirmed = true;
    updatedOrders[index].deliveryStatus = "Confirmed";
//    setOrders(updatedOrders);
  };


  // Render tab content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
       case "spares":
        return (
          <div className="card p-4 shadow mt-3">
            <h4>Manage Spares</h4>
            <div className="mb-3">
              <input type="text" name="id" placeholder="Spare ID" value={spareDetails.id} onChange={handleSpareChange} className="form-control mb-2" />
              <input type="text" name="name" placeholder="Spare Name" value={spareDetails.name} onChange={handleSpareChange} className="form-control mb-2" />
              <input type="text" name="price" placeholder="Price" value={spareDetails.price} onChange={handleSpareChange} className="form-control mb-2" />
              <input type="text" name="brand" placeholder="Brand" value={spareDetails.brand} onChange={handleSpareChange} className="form-control mb-2" />
              <input type="text" name="model" placeholder="Model" value={spareDetails.model} onChange={handleSpareChange} className="form-control mb-2" />
              <input type="text" name="wheels" placeholder="No. of Wheels" value={spareDetails.wheels} onChange={handleSpareChange} className="form-control mb-2" />
              <textarea name="description" placeholder="Description" value={spareDetails.description} onChange={handleSpareChange} className="form-control mb-2"></textarea>
              <button onClick={addSpare} className="btn btn-primary">Add Spare</button>
            </div>
            <ul className="list-group mt-3">
              {spares.map((spare, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{spare.name}</strong> - ${spare.price} <br />
                    <small>{spare.brand} - {spare.model} - {spare.wheels} Wheels</small> <br />
                    <small>{spare.description}</small>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => removeSpare(index)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        );
      case "enquiries":
        return (
          <div className="card p-4 shadow mt-3">
            <h4>Enquiries</h4>
            <ul className="list-group mt-3">
              {enquiries.map((enquiry, index) => (
                <li key={enquiry.id} className="list-group-item">
                  <div>
                    <strong>Enquiry {enquiry.id}:</strong> {enquiry.question}
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Your Response"
                      value={enquiry.response}
                      onChange={(e) => handleEnquiryResponseChange(index, e.target.value)}
                      className="form-control"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
       case "orders":
        return (
          <div className="card p-4 shadow mt-3">
            <h4>Manage Orders</h4>
            <ul className="list-group mt-3">
              {orders.map((order, index) => (
                <li key={order.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>Order {order.id}:</strong> {order.product} <br />
                    Payment: {order.paymentStatus} | Delivery: {order.deliveryStatus}
                  </div>
                  {!order.confirmed && (
                    <button className="btn btn-success btn-sm" onClick={() => confirmOrder(index)}>Confirm Order</button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand" style={{ fontFamily: "'Cinzel', serif", fontSize: "28px" }}>
            ELECTRAWHEELS
          </Link>
        </div>
      </nav>

      {/* Tab Navigation */}
      <div className="container mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "spares" ? "active" : ""}`} onClick={() => setActiveTab("spares")}>
              Spares
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "enquiries" ? "active" : ""}`} onClick={() => setActiveTab("enquiries")}>
              Enquiries
            </button>
          </li>
          <li className="nav-item">
            <button className={`nav-link ${activeTab === "orders" ? "active" : ""}`} onClick={() => setActiveTab("orders")}>
              Orders
            </button>
          </li>
        </ul>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Centerdashboard;

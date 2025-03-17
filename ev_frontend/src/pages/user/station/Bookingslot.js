import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Bookingslot = () => {
  const [bookingData, setBookingData] = useState({
    phone: "",
    vehicleNumber: "",
    chargingTime: ""
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we simply show an alert confirming the booking.
    alert(
      `Booking confirmed!\nVehicle: ${bookingData.vehicleNumber}\nCharging Time: ${bookingData.chargingTime}\nContact: ${bookingData.phone}`
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontFamily: "'Cinzel', serif", fontSize: "28px" }}
          >
            ELECTRAWHEELS
          </Link>
        </div>
      </nav>

      {/* Booking Form */}
      <div className="container mt-5">
        <h2 className="text-center">Book a Charging Slot</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow mt-4">
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              value={bookingData.vehicleNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Time for Charging</label>
            <input
              type="datetime-local"
              name="chargingTime"
              value={bookingData.chargingTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bookingslot;

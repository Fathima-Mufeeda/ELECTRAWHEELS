import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Bookingrequests = () => {
  // Dummy booking requests data
  const [bookings, setBookings] = useState([
    { id: 1, phone: "1234567890", vehicleNumber: "ABC-123", chargingTime: "2023-03-25 10:00 AM", approved: false },
    { id: 2, phone: "9876543210", vehicleNumber: "XYZ-789", chargingTime: "2023-03-25 11:00 AM", approved: false },
  ]);

  // Function to approve a booking
  const approveBooking = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, approved: true } : booking
    );
    setBookings(updatedBookings);
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

      {/* Booking Requests Content */}
      <div className="container mt-5">
        <h2 className="text-center">Booking Requests</h2>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Phone</th>
              <th>Vehicle Number</th>
              <th>Charging Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.phone}</td>
                <td>{booking.vehicleNumber}</td>
                <td>{booking.chargingTime}</td>
                <td>{booking.approved ? "Approved" : "Pending"}</td>
                <td>
                  {booking.approved ? (
                    <button className="btn btn-success btn-sm" disabled>
                      Approved
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => approveBooking(booking.id)}
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-3">
          <Link to="/station-dashboard" className="btn btn-secondary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bookingrequests;

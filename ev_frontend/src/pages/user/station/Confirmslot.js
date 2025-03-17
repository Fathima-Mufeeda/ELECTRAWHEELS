import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Confirmslot = () => {
  const { id } = useParams(); // station id from URL
  const [booking, setBooking] = useState({
    vehicleNumber: "",
    phone: "",
    userName: "",
    bookingTime: ""
  });

  // Dummy times list for booking
  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"
  ];

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send booking details to backend and update status based on station confirmation
    alert(`Booking request sent for station ${id}!
Vehicle: ${booking.vehicleNumber}
Name: ${booking.userName}
Phone: ${booking.phone}
Time: ${booking.bookingTime}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Confirm Slot Booking</h2>
      <Link to={`/battery-hub/${id}`} className="btn btn-info mb-3">
  View Battery Hub Availability
</Link>
      <form onSubmit={handleSubmit} className="card p-4 shadow">

        <div className="mb-3">
          <label className="form-label">Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            value={booking.vehicleNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={booking.phone}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            name="userName"
            value={booking.userName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Select Booking Time</label>
          <select
            name="bookingTime"
            value={booking.bookingTime}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">Choose a time</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Book Slot</button>
      </form>
      <div className="text-center mt-3">
        <Link to={`/chargingstation/${id}`} className="btn btn-secondary">Back to Station Details</Link>
      </div>
    </div>
  );
};

export default Confirmslot;

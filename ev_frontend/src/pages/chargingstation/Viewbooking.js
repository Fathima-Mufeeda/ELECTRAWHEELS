import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Form } from "react-bootstrap";

const Viewbooking = () => {
  const [bookings, setBookings] = useState([
    { id: 1, vehicleNumber: "KL07AB1234", userName: "John Doe", phone: "9876543210", time: "10:00 AM", wheels: 2, brand: "Honda", model: "Activa", status: "Pending" },
    { id: 2, vehicleNumber: "KL08CD5678", userName: "Jane Smith", phone: "9876543222", time: "11:30 AM", wheels: 4, brand: "Tesla", model: "Model 3", status: "Pending" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">View Slot Bookings</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Filter by Vehicle Type</Form.Label>
          <Form.Select>
            <option>All</option>
            <option>2-Wheeler</option>
            <option>3-Wheeler</option>
            <option>4-Wheeler</option>
          </Form.Select>
        </Form.Group>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Vehicle No.</th>
            <th>User Name</th>
            <th>Phone</th>
            <th>Booking Time</th>
            <th>Vehicle Type</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.vehicleNumber}</td>
              <td>{booking.userName}</td>
              <td>{booking.phone}</td>
              <td>{booking.time}</td>
              <td>{booking.wheels}-Wheeler</td>
              <td>{booking.brand}</td>
              <td>{booking.model}</td>
              <td>{booking.status}</td>
              <td>
                {booking.status === "Pending" && (
                  <>
                    <Button variant="success" size="sm" onClick={() => handleStatusChange(booking.id, "Confirmed")} className="me-2">Confirm</Button>
                    <Button variant="danger" size="sm" onClick={() => handleStatusChange(booking.id, "Rejected")} >Reject</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Viewbooking;

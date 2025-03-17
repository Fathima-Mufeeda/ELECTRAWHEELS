import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Stationdetails = () => {
  // Dummy data; in a real app, fetch station details using the id from params
  const { id } = useParams();
  const station = {
    id,
    name: "GreenCharge Station",
    totalSlots: 10,
    availableSlots: 4,
    address: "123 EV Road, CityName"
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">{station.name}</h2>
      <p>{station.address}</p>
      <div className="card p-4">
        <p><strong>Total Slots:</strong> {station.totalSlots}</p>
        <p><strong>Available Slots:</strong> {station.availableSlots}</p>
        <Link to={`/confirmslot/${station.id}`} className="btn btn-primary w-100">
          Book Slot
        </Link>
      </div>
    </div>
  );
};

export default Stationdetails;

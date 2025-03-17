import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Hubavailability = () => {
  const { stationId } = useParams(); // Get station ID from the URL

  // Dummy data for battery hubs at this station
  const dummyBatteryHubs = [
    { id: 1, type: "Standard Battery", availability: "Available" },
    { id: 2, type: "Fast Charge Battery", availability: "Occupied" },
    { id: 3, type: "Long Life Battery", availability: "Available" }
  ];

  // Dummy charging station contact details (in a real app, fetch based on stationId)
  const stationDetails = {
    name: "GreenCharge Station",
    phone: "123-456-7890",
    address: "123 EV Road, CityName"
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Battery Hub Availability</h2>
      <div className="text-center mb-3">
        <p>
          <strong>{stationDetails.name}</strong>
        </p>
        <p>
          Contact: {stationDetails.phone} <br />
          {stationDetails.address}
        </p>
      </div>
      <div className="card p-4">
        <h4>Available Battery Hubs:</h4>
        <ul className="list-group">
          {dummyBatteryHubs.map((hub) => (
            <li key={hub.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{hub.type}</span>
              <span>{hub.availability}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-4">
        <Link to={`/confirm-slot/${stationId}`} className="btn btn-secondary">
          Back to Confirm Slot
        </Link>
      </div>
    </div>
  );
};

export default Hubavailability;

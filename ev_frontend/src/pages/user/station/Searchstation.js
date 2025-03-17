import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Searchstation = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy results based on form inputs (replace with API call later)
    const dummyStations = [
      { id: 1, name: "GreenCharge Station", address: "123 EV Road", distance: 2.5 },
      { id: 2, name: "EcoPower Hub", address: "456 Battery Blvd", distance: 3.2 },
      { id: 3, name: "ChargeUp Point", address: "789 Energy Ave", distance: 4.0 },
    ];
    setResults(dummyStations);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Search for Charging Stations</h2>
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label className="form-label">Vehicle Type</label>
          <select className="form-select" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="2 Wheeler">2 Wheeler</option>
            <option value="3 Wheeler">3 Wheeler</option>
            <option value="4 Wheeler">4 Wheeler</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Brand</label>
          <select className="form-select" value={brand} onChange={(e) => setBrand(e.target.value)} required>
            <option value="">Select Brand</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Model</label>
          <select className="form-select" value={model} onChange={(e) => setModel(e.target.value)} required>
            <option value="">Select Model</option>
            <option value="Model X">Model X</option>
            <option value="Model Y">Model Y</option>
            <option value="Model Z">Model Z</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Search</button>
      </form>
      {/* Display search results */}
      {results.length > 0 && (
        <div className="mt-4">
          <h4>Available Charging Stations:</h4>
          <ul className="list-group">
            {results.map(station => (
              <li key={station.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{station.name}</strong> <br />
                  {station.address} <br />
                  <small>{station.distance} km away</small>
                </div>
                <Link to={`/charging-station/${station.id}`} className="btn btn-outline-primary">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searchstation;

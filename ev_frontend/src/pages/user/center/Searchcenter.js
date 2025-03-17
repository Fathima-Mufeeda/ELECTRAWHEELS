import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Searchcenter = () => {
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Dummy results; in production, use API call with vehicleType, brand, and model.
    const dummyCenters = [
      { id: 1, name: "Service Center Alpha", address: "123 Main St", distance: 2.1 },
      { id: 2, name: "Service Center Beta", address: "456 Side Ave", distance: 3.5 },
      { id: 3, name: "Service Center Gamma", address: "789 Center Blvd", distance: 4.0 }
    ];
    setResults(dummyCenters);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Search for Service Centers</h2>
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
      {results.length > 0 && (
        <div className="mt-4">
          <h4>Nearby Service Centers:</h4>
          <ul className="list-group">
            {results.map(center => (
              <li key={center.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{center.name}</strong>
                  <br />
                  {center.address}
                  <br />
                  <small>{center.distance} km away</small>
                </div>
                <Link to={`/spareparts-details/${center.id}`} className="btn btn-outline-primary">
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

export default Searchcenter;

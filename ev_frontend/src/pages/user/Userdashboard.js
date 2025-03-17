import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Userdashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Welcome to ELECTRAWHEELS</h2>
      <div className="row">
        {/* Card for Finding Station */}
        <div className="col-md-6">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h4 className="card-title">Find Charging Station</h4>
              <p className="card-text">Locate and book charging slots near you.</p>
              <Link to="/searchstation" className="btn btn-primary">
                Find Station
              </Link>
            </div>
          </div>
        </div>
        {/* Card for Finding Service Center */}
        <div className="col-md-6">
          <div className="card text-center mb-3">
            <div className="card-body">
              <h4 className="card-title">Find Service Center</h4>
              <p className="card-text">View and order spare parts from service centers.</p>
              <Link to="/searchcenter" className="btn btn-success">
                Find Service Center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdashboard;

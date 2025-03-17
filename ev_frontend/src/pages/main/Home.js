import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            {/* Navbar */}
           <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand" style={{ fontFamily: "'Cinzel', serif", fontSize: "28px" }}>
                        ELECTRAWHEELS
                    </Link>
                </div>
            </nav>

            {/* Card Section */}
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
                <div className="card text-center p-4 shadow" style={{ width: "22rem" }}>
                    <h2 className="mb-4">Login as</h2>
                    <Link to="/userlogin" className="btn btn-primary mb-3">EV User</Link>
                    <Link to="/login" className="btn btn-success mb-3">Charging Station</Link>
                    <Link to="/login" className="btn btn-warning">Service Center</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;

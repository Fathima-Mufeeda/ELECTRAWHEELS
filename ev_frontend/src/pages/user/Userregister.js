import { Link } from "react-router-dom";
const Userregister = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Register</h1>
            <form className="w-50 mx-auto p-4 border rounded">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-success w-100">Register</button>
                <Link to="/userlogin" >already user?</Link>
            </form>

        </div>
    );
};

export default Userregister;

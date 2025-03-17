import { Link } from "react-router-dom";
const Userlogin = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Login</h1>
            <form className="w-50 mx-auto p-4 border rounded">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <Link to="/userregister" >newuser?</Link>

            </form>
                 </div>
    );
};

export default Userlogin;

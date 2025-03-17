import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import UserFeedback from "./pages/main/UserFeedback";
import Userlogin from "./pages/user/Userlogin";

import Userregister from "./pages/user/Userregister";
import Userdashboard from "./pages/user/Userdashboard";
import Searchstation from "./pages/user/station/Searchstation";
import Hubavailability from "./pages/user/station/Hubavailability";
import Stationdetails from "./pages/user/station/Stationdetails";
import Confirmslot from "./pages/user/station/Confirmslot";
import Bookingslot from "./pages/user/station/Bookingslot";

import Bookingrequest from "./pages/chargingstation/Bookingrequest";
import Viewbooking from "./pages/chargingstation/Viewbooking";

import Spareorder from "./pages/user/center/Spareorder";
import Sparedetails from "./pages/user/center/Sparedetails";
import Searchcenter from "./pages/user/center/Searchcenter";
import Placingorder from "./pages/user/center/Placingorder";

import Stationdashboard from "./pages/chargingstation/Stationdashboard";
import Centerdashboard from "./pages/servicecenter/Centerdashboard";

function App() {
    return (
        <Router>


            <Routes>
                <Route path="/feedback" element={<UserFeedback />} />
                <Route path="/" element={<Home />} />
                <Route path="/userlogin" element={<Userlogin />} />
                <Route path="/userregister" element={<Userregister />} />
                <Route path="/bookingrequest" element={<Bookingrequest />} />
                <Route path="/spareorder" element={<Spareorder />} />
                <Route path="/searchstation" element={<Searchstation />} />
                <Route path="/stationdetails" element={<Stationdetails />} />
                <Route path="/confirmslot" element={<Confirmslot />} />
                <Route path="/hub" element={<Hubavailability />} />
                <Route path="/userdashboard" element={<Userdashboard />} />
                <Route path="/stationdashboard" element={<Stationdashboard />} />
                <Route path="/centerdashboard" element={<Centerdashboard />} />
                <Route path="/sparedetails" element={<Sparedetails />} />
                <Route path="/searchcenter" element={<Searchcenter />} />
                <Route path="/placingorder" element={<Placingorder />} />
                <Route path="/viewbooking" element={<Viewbooking />} />
//                <Route path="/bookingslot" element={<Bookingslot />} />
            </Routes>
        </Router>
    );
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Stationdashboard = () => {
    const [activeTab, setActiveTab] = useState("batteryHubs");

    // Battery Hubs state
    const [batteryHubs, setBatteryHubs] = useState([]);
    const [batteryHubDetails, setBatteryHubDetails] = useState({ id: "", availability: "Available" });

    // Charging Slots state
    const [chargingSlots, setChargingSlots] = useState([]);
    const [slotDetails, setSlotDetails] = useState({ id: "", availability: "Available" });

    // Dummy Emergency Requests
    const [emergencyRequests] = useState([
        { id: 1, message: "Power outage in slot area" },
        { id: 2, message: "Faulty charging station reported" }
    ]);

    // Dummy Reviews
    const [reviews] = useState([
        { id: 1, review: "Excellent charging experience!" },
        { id: 2, review: "Service could be improved." }
    ]);

    // Dummy Complaints with reply
    const [complaints, setComplaints] = useState([
        { id: 1, complaint: "No available slots during peak hours", reply: "" },
        { id: 2, complaint: "Battery hub malfunctioning", reply: "" }
    ]);

    // Handlers for Battery Hubs
    const handleBatteryHubChange = (e) => {
        setBatteryHubDetails({ ...batteryHubDetails, [e.target.name]: e.target.value });
    };

    const addBatteryHub = () => {
        setBatteryHubs([...batteryHubs, batteryHubDetails]);
        setBatteryHubDetails({ id: "", availability: "Available" });
    };

    const removeBatteryHub = (index) => {
        setBatteryHubs(batteryHubs.filter((_, i) => i !== index));
    };

    // Handlers for Charging Slots
    const handleSlotChange = (e) => {
        setSlotDetails({ ...slotDetails, [e.target.name]: e.target.value });
    };

    const addChargingSlot = () => {
        setChargingSlots([...chargingSlots, slotDetails]);
        setSlotDetails({ id: "", availability: "Available" });
    };

    const removeChargingSlot = (index) => {
        setChargingSlots(chargingSlots.filter((_, i) => i !== index));
    };

    // Handler for complaint reply
    const handleComplaintReplyChange = (index, reply) => {
        const updatedComplaints = [...complaints];
        updatedComplaints[index].reply = reply;
        setComplaints(updatedComplaints);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "batteryHubs":
                return (
                    <div className="card p-4 shadow mt-3">
                        <h4>Manage Battery Hubs</h4>
                        <div className="mb-2">
                            <input
                                type="text"
                                name="id"
                                placeholder="Battery Hub ID"
                                value={batteryHubDetails.id}
                                onChange={handleBatteryHubChange}
                                className="form-control mb-2"
                            />
                            <select
                                name="availability"
                                value={batteryHubDetails.availability}
                                onChange={handleBatteryHubChange}
                                className="form-control mb-2"
                            >
                                <option>Available</option>
                                <option>Occupied</option>
                            </select>
                            <button onClick={addBatteryHub} className="btn btn-success">
                                Add Battery Hub
                            </button>
                        </div>
                        <ul className="list-group mt-3">
                            {batteryHubs.map((hub, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between">
                                    Battery Hub {hub.id}: {hub.availability}
                                    <button className="btn btn-danger btn-sm" onClick={() => removeBatteryHub(index)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "chargingSlots":
                return (
                    <div className="card p-4 shadow mt-3">
                        <h4>Manage Charging Slots</h4>
                        <div className="mb-2">
                            <input
                                type="text"
                                name="id"
                                placeholder="Slot ID"
                                value={slotDetails.id}
                                onChange={handleSlotChange}
                                className="form-control mb-2"
                            />
                            <select name="wheels" value={slotDetails.wheels} onChange={handleSlotChange} className="form-control mb-2">
                                <option value="2">2 Wheeler</option>
                                <option value="3">3 Wheeler</option>
                                <option value="4">4 Wheeler</option>
                            </select>
                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand"
                                value={slotDetails.brand}
                                onChange={handleSlotChange}
                                className="form-control mb-2"
                            />
                            <input
                                type="text"
                                name="model"
                                placeholder="Model"
                                value={slotDetails.model}
                                onChange={handleSlotChange}
                                className="form-control mb-2"
                            />
                            <select
                                name="availability"
                                value={slotDetails.availability}
                                onChange={handleSlotChange}
                                className="form-control mb-2"
                            >
                                <option>Available</option>
                                <option>Occupied</option>
                            </select>
                            <button onClick={addChargingSlot} className="btn btn-primary">
                                Add Charging Slot
                            </button>
                        </div>
                        <ul className="list-group mt-3">
                            {chargingSlots.map((slot, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between">
                                    Slot {slot.id} ({slot.wheels} Wheeler, {slot.brand}, {slot.model}): {slot.availability}
                                    <button className="btn btn-danger btn-sm" onClick={() => removeChargingSlot(index)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "emergency":
                return (
                    <div className="card p-4 shadow mt-3">
                        <h4>Emergency Requests</h4>
                        <ul className="list-group mt-3">
                            {emergencyRequests.map((req) => (
                                <li key={req.id} className="list-group-item">
                                    Request {req.id}: {req.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "reviews":
                return (
                    <div className="card p-4 shadow mt-3">
                        <h4>Reviews</h4>
                        <ul className="list-group mt-3">
                            {reviews.map((review) => (
                                <li key={review.id} className="list-group-item">
                                    Review {review.id}: {review.review}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "complaints":
                return (
                    <div className="card p-4 shadow mt-3">
                        <h4>Complaints</h4>
                        <ul className="list-group mt-3">
                            {complaints.map((complaint, index) => (
                                <li key={complaint.id} className="list-group-item">
                                    <div>
                                        <strong>Complaint {complaint.id}:</strong> {complaint.complaint}
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            placeholder="Reply"
                                            value={complaint.reply}
                                            onChange={(e) => handleComplaintReplyChange(index, e.target.value)}
                                            className="form-control"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            {/* Navbar */}
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link
                        to="/"
                        className="navbar-brand"
                        style={{ fontFamily: "'Cinzel', serif", fontSize: "28px" }}
                    >
                        ELECTRAWHEELS
                    </Link>
                </div>
            </nav>

            {/* Tab Navigation */}
            <div className="container mt-4">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "batteryHubs" ? "active" : ""}`}
                            onClick={() => setActiveTab("batteryHubs")}
                        >
                            Battery Hubs
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "chargingSlots" ? "active" : ""}`}
                            onClick={() => setActiveTab("chargingSlots")}
                        >
                            Charging Slots
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "emergency" ? "active" : ""}`}
                            onClick={() => setActiveTab("emergency")}
                        >
                            Emergency Requests
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
                            onClick={() => setActiveTab("reviews")}
                        >
                            Reviews
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === "complaints" ? "active" : ""}`}
                            onClick={() => setActiveTab("complaints")}
                        >
                            Complaints
                        </button>
                    </li>
                </ul>
                {/* Render Active Tab Content */}
                {renderTabContent()}
            </div>
        </div>
    );
};

export default Stationdashboard;

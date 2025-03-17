import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserFeedback = () => {
  // Dummy reviews and complaints data
  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", review: "Great service!", date: "2023-03-24" },
    { id: 2, user: "Bob", review: "Could be better.", date: "2023-03-23" }
  ]);
  const [complaints, setComplaints] = useState([
    { id: 1, user: "Charlie", complaint: "Slots not available on time.", date: "2023-03-22" }
  ]);

  const [newReview, setNewReview] = useState("");
  const [newComplaint, setNewComplaint] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: reviews.length + 1,
      user: "CurrentUser",
      review: newReview,
      date: new Date().toISOString().slice(0, 10)
    };
    setReviews([...reviews, review]);
    setNewReview("");
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    const complaint = {
      id: complaints.length + 1,
      user: "CurrentUser",
      complaint: newComplaint,
      date: new Date().toISOString().slice(0, 10)
    };
    setComplaints([...complaints, complaint]);
    setNewComplaint("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Feedback & Communication</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Reviews</h4>
          <ul className="list-group">
            {reviews.map(r => (
              <li key={r.id} className="list-group-item">
                <strong>{r.user}</strong> ({r.date}): {r.review}
              </li>
            ))}
          </ul>
          <form onSubmit={handleReviewSubmit} className="mt-3">
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Write a review"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
          </form>
        </div>
        <div className="col-md-6">
          <h4>Complaints</h4>
          <ul className="list-group">
            {complaints.map(c => (
              <li key={c.id} className="list-group-item">
                <strong>{c.user}</strong> ({c.date}): {c.complaint}
              </li>
            ))}
          </ul>
          <form onSubmit={handleComplaintSubmit} className="mt-3">
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Write a complaint"
                value={newComplaint}
                onChange={(e) => setNewComplaint(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-warning">Submit Complaint</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;

// Dummy Orders state (already defined in your code)
const [orders] = useState([
  { id: 1, product: "Spare Part A", paymentStatus: "Paid", deliveryStatus: "Delivered" },
  { id: 2, product: "Spare Part B", paymentStatus: "Pending", deliveryStatus: "Processing" }
]);

// In the renderTabContent switch-case:
case "orders":
  return (
    <div className="card p-4 shadow mt-3">
      <h4>Manage Orders</h4>
      <ul className="list-group mt-3">
        {orders.map((order) => (
          <li key={order.id} className="list-group-item">
            <div>
              <strong>Order {order.id}:</strong> {order.product}
            </div>
            <div>
              Payment: {order.paymentStatus} | Delivery: {order.deliveryStatus}
            </div>
            {/* Later, you can add buttons to update statuses or mark orders as completed */}
          </li>
        ))}
      </ul>
    </div>
  );

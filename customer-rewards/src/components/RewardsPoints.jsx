import { useState } from "react";
import RenderCustomerPoints from "./RenderCustomerPoints.jsx";
import { getCustomerPoints, getAllCustomerPoints } from "./utils.jsx";

function RewardsPoints({ view }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [customerNumber, setCustomerNumber] = useState(null);
  const [customerPoints, setCustomerPoints] = useState(null);
  const [allCustomerPoints, setAllCustomerPoints] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const points = await getCustomerPoints(customerNumber);
      setCustomerPoints(points);
      setIsSubmitted(true);
    } catch (error) {
      alert("Error getting points:" + error.message);
    }
  };

  const handleAllCustomers = async () => {
    try {
      const allPoints = await getAllCustomerPoints();
      setAllCustomerPoints(allPoints);
    } catch (error) {
      alert("Error fetching all customer points: " + error.message);
    }
  };

  return (
    <div className="booking-form-wrap">
      <div className="row">
        <div className="text-center mb-4 pb-lg-2">
          <h2 className="text-white">Rewards Points</h2>
          <h3 className="text-white">{`(${view})`}</h3>
          {isSubmitted && customerPoints && (
            <RenderCustomerPoints customerPoints={customerPoints} />
          )}

          {view !== "Admin View" ? (
            <em className="text-white">
              Enter your customer number to see your rewards points.
            </em>
          ) : (
            <em className="text-white">
              Enter a customer number to see their rewards points.
            </em>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="(Enter a number from 1-50)"
              onChange={(e) => setCustomerNumber(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
      {view == "Admin View" && (
        <>
          <h5 className="text-white">View All Customers Points</h5>
          <button className="text-white" onClick={handleAllCustomers}>
            Get All Customer Points
          </button>
          {allCustomerPoints && (
            <div className="list-group list-group-flush">
              {Object.entries(allCustomerPoints).map(
                ([customerId, customerPoints]) => (
                  <div key={customerId} className="mb-4 border p-3 rounded">
                    <h6 className="text-white">Customer ID: {customerId}</h6>
                    <RenderCustomerPoints customerPoints={customerPoints} />
                  </div>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RewardsPoints;

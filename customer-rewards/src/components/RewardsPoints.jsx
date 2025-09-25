import { memo, useState, useEffect } from "react";
import RenderCustomerPoints from "./RenderCustomerPoints.jsx";
import { getCustomerPoints } from "./utils.jsx";
import { Alert } from "react-bootstrap";

function RewardsPoints() {
  const [customerNumber, setCustomerNumber] = useState(null);
  const [customerPoints, setCustomerPoints] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleInput = (e) => setCustomerNumber(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const points = await getCustomerPoints(customerNumber);
      setCustomerPoints(points);
      setIsLoading(false);
    } catch (error) {
      setShowError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    customerPoints && setIsLoading(false);
  }, [customerPoints]);

  return (
    <div className="rewards-form-wrap">
      <div className="row">
        <div className="text-center mb-4 pb-lg-2">
          <h2 className="text-white">Rewards Points</h2>
          {customerPoints && !isLoading && (
            <RenderCustomerPoints customerPoints={customerPoints} />
          )}

          <em className="text-white">
            Enter your customer number to see your rewards points.
          </em>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="(Enter a number from 1-50)"
              onChange={handleInput}
              required
            />
            {showError && (
              <Alert
                variant="secondary"
                onClose={() => setShowError(false)}
                dismissible
              >
                Error fetching points.
              </Alert>
            )}
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default memo(RewardsPoints);

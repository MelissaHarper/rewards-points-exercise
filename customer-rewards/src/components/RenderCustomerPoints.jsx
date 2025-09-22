import { memo } from "react";

const monthOrder = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function RenderCustomerPoints({ customerPoints }) {
  return (
    <>
      <ul className="list-group list-group-flush">
        {Object.entries(customerPoints)
          .filter(([key]) => key !== "totalPoints")
          .sort(([a], [b]) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
          .map(([month, points]) => (
            <li className="list-group-item" key={month}>
              <strong>{month}:</strong> {points} points
            </li>
          ))}
      </ul>
      <h3 className="text-white mt-3">
        Total Points: {customerPoints.totalPoints}
      </h3>
    </>
  );
}

export default memo(RenderCustomerPoints);

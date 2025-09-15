import transactions from "../assets/transactions.json";

export const calculateRewards = (total) => {
  let totalPoints = 0;
  total = Math.round(total);
  if (total > 100) {
    const over100 = total - 100;
    totalPoints += over100 * 2 + 50;
  } else if (total > 50) {
    totalPoints += total - 50;
  }

  return totalPoints;
};

/**
 * Fetches all transactions made by the given customerId, calculates rewards points using the given criteria in README.md and returns an object of the total points for each month and total points overall
 *
 * @async
 * @param {int} customerId
 * @returns {unknown}
 */
export const getCustomerPoints = async (customerId) => {
  let data = transactions.filter(
    (transaction) => transaction.customerId === customerId
  );

  let customerPoints = { totalPoints: 0 };

  data.forEach((transaction) => {
    let transactionPoints = calculateRewards(transaction.total);
    let month = new Date(transaction.date).toLocaleString("default", {
      month: "long",
    });

    // Add monthly points
    if (month in customerPoints) {
      customerPoints[month] += transactionPoints;
    } else {
      customerPoints[month] = transactionPoints;
    }

    // Add to total
    customerPoints.totalPoints += transactionPoints;
  });

  return customerPoints;
};

import transactions from "../assets/transactions.json";

/**
 * Calculates rewards points using the given criteria in README.md
 *
 * @param {number} total
 * @returns {number}
 */
export const calculateRewards = (total) => {
  let totalPoints = 0;
  total = Math.floor(total);
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
 * @returns
 * @typedef {Object} customerPoints
 * @property {int} totalPoints
 * @property {int} month // month iterated according to number of months in given array adding total points for each month
 */
export const getCustomerPoints = async (customerId) => {
  let data = transactions.filter(
    (transaction) => transaction.customerId == customerId
  );
  if (data.length === 0) {
    throw new Error(
      `No transactions in this time period for Customer Id: ${customerId}`
    );
  }

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

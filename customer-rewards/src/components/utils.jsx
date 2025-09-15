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
  const response = await fetch("/transactions.json"); // Fetch from public folder
  const transactions = await response.json();
  const data = transactions.filter(
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

/**
 * Fetches all transactions for all customer, calculates rewards points using the given criteria in README.md and returns total points for each month and total points overall for each customer
 *
 * @async
 * @param {int} customerId
 * @returns
 * @typedef {Object} customerPoints
 * @property {int} totalPoints
 * @property {int} month // month iterated according to number of months in given array adding total points for each month
 */
export const getAllCustomerPoints = async () => {
  try {
    const response = await fetch("/transactions.json"); // from public folder
    const transactions = await response.json();

    const customerPoints = {};

    transactions.forEach((transaction) => {
      const { customerId, total, date } = transaction;
      const month = new Date(date).toLocaleString("default", { month: "long" });
      const points = calculateRewards(total);

      // Initialize customer entry if needed
      if (!customerPoints[customerId]) {
        customerPoints[customerId] = { totalPoints: 0 };
      }

      // Add monthly points
      customerPoints[customerId][month] =
        (customerPoints[customerId][month] || 0) + points;

      // Add total points
      customerPoints[customerId].totalPoints += points;
    });

    return customerPoints;
  } catch (error) {
    console.error("Error loading transactions:", error);
    throw error;
  }
};

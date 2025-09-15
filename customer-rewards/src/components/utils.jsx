import transactions from "../assets/transactions.json";

export const calculateRewards = (arr) => {
  let totalPoints = 0;
  for (let i of arr) {
    if (i > 100) {
      const over100 = i - 100;
      totalPoints += over100 * 2 + 50;
    } else if (i > 50) {
      totalPoints += i - 50;
    }
  }
  return totalPoints;
};

export const getCustomerPoints = async (customerId) => {
  let data = transactions.filter(
    (transaction) => transaction.customerId === customerId
  );
  let customerPoints = data.map((transaction) => {
    let transactionPoints = calculateRewards(transaction.total);
    let month = transaction.date.getMonth();
    if (`${month}Transactions` in customerPoints) {
      let previousValue = customerPoints[`${month}Transactions`];
      customerPoints[`${month}Transactions`] =
        previousValue + transactionPoints;
    } else {
      customerPoints[`${month}Transactions`] = transactionPoints;
    }
    customerPoints.totalPoints += customerPoints;
  });
  return customerPoints;
};

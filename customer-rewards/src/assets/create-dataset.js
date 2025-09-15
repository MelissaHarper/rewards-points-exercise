/**
 * Generate a dataset of 500 transactions between $1 and $400 from 50 customers
 * returning array of transaction objects in a Json file
 * @typedef {Object} transactions
 * @property {int} customerId
 * @property {string} transactionId
 * @property {Date} date
 * @property {number} total
 */

import fs from "fs";

// Data parameters
const numCustomers = 50;
const numTransactions = 500;
const startDate = new Date("01/01/2025");
const endDate = new Date("03/31/2025");
const transactions = [{}];

// Functions
/**
 * Generates a random date string between a start and end date.
 * The date is formatted according to the "en-US" locale.
 * @param {Date} startDate - The beginning of the date range.
 * @param {Date} endDate - The end of the date range.
 * @returns {string} A random date string in "en-US" format.
 */

function getRandomDate(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();

  const randomTimestamp = Math.floor(
    Math.random() * (endTimestamp - startTimestamp + 1) + startTimestamp
  );

  const date = new Date(randomTimestamp);

  return date.toLocaleDateString("en-US");
}

/**
 * Generates a random transaction amount between $1 and $400, rounded to two decimal places.
 * @returns {number} A random monetary amount.
 */

function getRandomTransactionTotal() {
  const randomNumber = Math.random() * 400 + 1;
  const rounded = Number(randomNumber.toFixed(2));

  return rounded;
}

/**
 * Gets random index number in array
 *
 * @param {Array} arr
 * @returns {int} A random index from the length of the array
 */
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Create customer ids
const customerIds = [];

for (let i = 1; i < numCustomers + 1; i++) {
  customerIds.push(i);
}

// Create transactions
for (let i = 1; i < numTransactions + 1; i++) {
  const customerId = customerIds[getRandomIndex(customerIds)]; // set customerId
  const transactionId = `t000${i}`; // generate transaction number
  const date = getRandomDate(startDate, endDate); // set transaction date
  const total = getRandomTransactionTotal(); // generate transaction amount
  const transaction = {
    customerId: customerId,
    transactionId: transactionId,
    date: date,
    total: total,
  }; // create transaction object

  transactions.push(transaction); // add transaction object to array
}

// Write to file
fs.writeFile(
  "./public/transactions.json",
  JSON.stringify(transactions, null, 2),
  (writeErr) => {
    if (writeErr) {
      console.error("Failed to write to file:", writeErr);
      return;
    }
    console.log("Success! File has been created.");
  }
);

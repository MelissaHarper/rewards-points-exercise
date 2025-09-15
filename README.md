# rewards-points-exercise

This is a quick rendering of a retail store's rewards points page. It isn't meant to be a "production" page, but just a quick and dirty mock up to show the calculated logic. The calculation logic can be found in the [utils.jsx file](./customer-rewards/src/components/utils.jsx)

The website template can be found at [toolplate.com](https://www.tooplate.com/view/2137-barista-cafe). It was initially a Bootstrap 5 HTML layout template that I tweaked to use within a React JS app.

## Scenario

- A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
- A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction. (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
- Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.

## Criteria

- Use React JS (do not use TypeScript)
- Simulate an asynchronous API call to fetch data
- No redux
- Make up a data set to best demonstrate your solution
- Check solution into GitHub

## Installation

To install and run this example locally, follow these steps:

1. Clone the repository:
```
git clone https://github.com/MelissaHarper/rewards-points-exercise.git
```

2. Navigate to the project directory:
```
cd ./customer-rewards
```

3. Install the dependencies:
```
npm install
```

4. Start the development server:
```
npm run dev
```

The application will be available at `http://localhost:5173`.

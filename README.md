# rewards-points-exercise

This is a quick rendering of a retail store's rewards points page. It isn't meant to be a "production" page, but just a quick and dirty mock up to show the calculated logic. The calculation logic can be found in the [utils.jsx file](./customer-rewards/src/components/utils.jsx)

The website template can be found at [toolplate.com](https://www.tooplate.com/view/2137-barista-cafe). It was initially a Bootstrap 5 HTML layout template that I tweaked to use within a React JS app.

As on other projects, I would typically have the user sign in to see their rewards points and include authorization with a call to the backend. The endpoint would look something like "api/users/${userId}/points". For the sake of demonstration simplicity, here you'll simply enter a customer number between 1 and 50. 

I've included on the single page, an example of a customer view for rewards points as well as the view an admin might use to see rewards points from a single customer or from all customers. 

While the scenario includes only a three month period, I chose to write the code to be flexible in accepting any period of time and/or any three month period, dynamically rendering the months provided in the data.

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

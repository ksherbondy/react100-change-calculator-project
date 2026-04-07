## Project: Change Calculator


## Objectives

-   Convert visual wireframe to JSX markup.
-   Setup state management using `useState`.
-   Setup event binding for the button elements.
-   Update view state based on calculation results.

![React change calculator mockup](https://d10o33fm60zzm6.cloudfront.net/react100-img/change-calculator-1.png)

React change calculator mockup: a section to enter information (How much is due? and How much was received?, along with a calculate button), and a section to display the results with a plain text result and cards displaying the quantities of twenties, tens, fives, ones, quarters, dimes, nickels, and pennies.

## Start with a Wireframe (React)

Before you write any code, sketch the UI and translate it into a **component wireframe**. Identify the main regions of the page and name them as React components (e.g., `<Header />`, `<Sidebar />`, `<TodoList />`, `<TodoItem />`). Create a simple **component tree** that shows parent/child relationships, note where **state** should live, what **props** each child needs, and how **events** (clicks, form submits) flow upward. Look for opportunities to make pieces **reusable** (e.g., `<Button />`, `<Card />`, `<Modal />`). Keep this artifact with your repo (e.g., `/docs/wireframe.png` or a short section in `README.md`) so it guides your implementation throughout the project.

## Setup

1.  Open Terminal if you are on a Mac, Git Bash if you are on Windows.
    
2.  Clone the starter files from `https://github.com/cccareers/react100-change-calculator-project.git` and open the project in VS Code.
    
3.  Run `npm install` to install all the dependencies.
    
4.  The tests will confirm if you have completed the requirements. Type `npm test` and hit enter to run the tests. Then, write your code using the steps below. When you have written all the code to complete the project (based on the exit criteria) and the tests are passing, submit the assignment.
    

> **REMINDER:** Any time you make a change to your code, you will see the change in the browser in real-time as long as you save your files.

> **IMPORTANT:** Don't forget to add the proper `data-testid` attribute for the relevant components.

## Convert Visual Wireframe to JSX Markup

For this project, we must first tackle the visual aspect of the application. To start, add a `<link>` element in the `<head>` section to include Bootstrap styling in your project.

Once you have included Bootstrap's CSS styling, add the following elements to the page ensuring the user interface matches the screenshot at the top of this document.

-   Header
-   Tagline
-   Bootstrap Row
    -   Bootstrap Column (4 columns wide)
        -   Bootstrap Panel
            -   How much is due?
            -   How much was received?
            -   Calculate button
    -   Bootstrap Column (8 columns wide)
        -   Outcome alerts
            -   Success: Total change due is
            -   Danger: Additional money owed is
        -   Grid for Denominations
            -   Twenties
            -   Tens
            -   Fives
            -   Ones
            -   Quarters
            -   Dimes
            -   Nickels
            -   Pennies

> You must add a `data-testid` attribute to both inputs and the calculate button as well. The `data-testid` values are `amountDue`, `amountReceived`, and `calculate`.

Here is an example

```jsx
  <div>
    <label htmlFor="amountDue">How much is due?</label>
    <input
      id="amountDue"
      data-testid="amountDue"
      /*... your other attributes here ...*/
    />
  </div>
```

## Setup State Management

![Circular state/element relationship](https://d10o33fm60zzm6.cloudfront.net/react100-img/react-100-change-calculator-state-management.png)

Circular state/element relationship: Bind state to input value and on input change update state

We will need to change our input elements such that:

-   The value of the input elements are bound to the corresponding state variables.
-   When a user changes the input element, it updates the corresponding state variable.

For a refresher on how this is accomplished, check out [this page](https://react.dev/learn/managing-state) from the React website.

## Setup Event Binding for Button Elements

After completing the above step, the next piece of the puzzle is to connect the click event of your button to a calculate function that you will add to your component. This is similar to passing an event listener to `$('button').click()` in jQuery.

## Port Calculation Logic from Web 102 Change Calculator

Once your button has been set up to call your component function whenever the click event is fired, you should take your calculation logic that you wrote for the [Web 102 Change Calculator](https://sdcs.tempurl.host/lessons/change-calculator/) and port it to this application. If you have not taken Web 102, you will need to write the logic from scratch.

Your function should calculate the value for the following 11 variables:

-   amountDue - Amount due as entered by user.
-   amountReceived - Amount received as entered by user.
-   changeDue - Subtract amount due from amount received.
-   twenties - # of $20 bills.
-   tens - # of $10 bills.
-   fives - # of $5 bills.
-   ones - # of $1 bills.
-   quarters - # of 25 cent coins.
-   dimes - # of 10 cent coins.
-   nickels - # of 5 cent coins.
-   pennies - # of 1 cent coins.

## Update View State Based on Calculation Results

Once you have calculated the above 11 variables, you need to call `setState` to update the state with the values calculated by your function.

For a refresher on `setState`, you should check out the [React documentation](https://react.dev/reference/react/useState) on the `useState` hook.

## Show State Values in the DOM

Now that you have the calculated counts for each denomination contained in a state in the component, the final step is to print the number of denominations to the correct area of the application.

For example, the markup for showing the number of twenties to dispense would look something like this:

```jsx
<div className='well'>
  <h1>Twenties</h1>
  <p data-testid="twenties">{twenties}</p>
</div>
```

> **HINT:** Make sure you add the `data-testid` attribute for all elements as seen in the example above. Otherwise, your tests will not pass!

## Exit Criteria

-   Should pass all provided test cases.

Submit a screenshot of your wireframe and your GitHub repository URL in the next course activities.

## Bonus

-   Find and include images of each denomination, changing styling as necessary.
-   Modify the app so that it calculates change in another currency such as Euros or Mexican Peso. Additionally, you could also try to allow users to switch between USD and another currency.

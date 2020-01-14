<p align="center">
  <img src="https://pbs.twimg.com/profile_images/512615819260350464/WBaDCSWI.jpeg"/>
<p>

# Korrila React Receipts

Korilla is Korean barbecue tacos truck that makes thousands of hungry customers happy every year.

The CEO is thinking of updating their short order tracking system to use React.

Build a prototype of this short order receipts tracker.

## Part 1: Get Started

- Fork and clone!

- This assignment should include at least **6 commits**.

- Inside your cloned directory, spin up a new react app called "korilla" with `npx create-react-app korrila`.

## Part 2: Sample Receipts

You'll be rendering some sample receipts:

```js
export const receiptData = [
  {
    person: 'Steve',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Angie',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Erinn',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: false
  }
]

```
- Normally the above data would probably come from an API call. As we are not using an API, we will have to simulate one by creating a helper file. Inside `src`, create a new directory called `data`. Inside `data`, create a new file called `receipts.js`. Paste the above code into this new file.
- To access this data we need to import it at the top of `App.js` with `import { receiptData } from "./data/receipts";`
- This app is going to use state. Prep `App.js` by converting it into a class component.
  - As you are new to React, **you are _HIGHLY_ encouraged to code this out manually**, rather than copy pasting the below code. The more you practice, the sooner you will get these boilerplates into your fingertips. As you'll be creating many more React components throughout the cohort, consider it an immensely good idea to be able to cook this up from memory.
  - Seriously, look at the code below and type out what you need by hand.
```js
class App extends React.Component {

  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
```

- Oh yeah, React has provided some default code inside of `App.js`. Strip out the info you don't need if you haven't already.
- Add the first receipt to the state of the app:

```js
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = ({
      firstReceipt: receiptData[0]
    })
  }
```

   - **Optional Practice:** Since we're only simulating API data, we don't need to use the `componentDidMount()` lifecycle method to setState, but give it a try if you're up for it. Set up a `componentDidMount()` to set the receiptData to state after the component loads.
   
     - Warning: this will likely give you some additional rendering errors to troubleshoot. These errors can be pretty common, so it's really, really good practice to tackle them now. See if you can figure out the `&&` Gaurd Operator.
     
- Create a new `Receipt.jsx` component that renders the following by passing down props:
  - person
  - order
      - main
      - protein
      - rice
      - sauce
      - drink
      - cost
  - paid status

  - **More Optional Practice:** Create and render another component inside this one called `Toppings.jsx` and render the toppings inside by passing down additional props.
- Render the `Receipt.jsx` component in the return of `App.js`. Don't forget to import new components at the top of your code when you need them!
- Add the two remaining receipts to state and render them inside two more `Receipt` components. **DO NOT** make new components, instead pass down different prop values.

## Part 3: Refactor for Dynamic Rendering

- Three seperately coded receipt components is pretty inefficient. Let's redefine our state to be the entire array of receipts:
```
this.state = ({
      receipts: receiptData
    })
 ```
- Now we can map over our array of receipts to render each one! Update your code so it renders the same as before, but instead of hard coding three receipts, use a map so you only have to code the `Receipt` component once.

- You should have all three receipts rendered by now. Add some basic styling (at the very least) to make it easier to distinguish them from each other.

## Part 4: Update State, Mate

- Add a button with an onClick to each receipt that toggles the value of `paid` on that specific receipt between **false** and **true**.

- Make sure you can see the change rendering in your browser when you click the button.

## Bonus/CSS Bonus

Update your code so that when the value of `paid` on a receipt becomes **true**, the receipt disappears from the browser.

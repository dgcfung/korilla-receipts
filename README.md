<p align="center">
  <img src="https://pbs.twimg.com/profile_images/512615819260350464/WBaDCSWI.jpeg"/>
<p>

# Korrila React Receipts

Korilla is Korean barbecue tacos truck that makes thousands of hungry customers happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Part 1: Get Started

- Fork and clone!

- This assignment should include at least **6 commits**.

- Inside your cloned directory, spin up a new react app called "korilla" with `create-react-app korrila`.

## Part 2: Sample Receipts

You'll be rendering some sample receipts:

```js
export const receipts = [
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
- Normally this data would probably come from an API call. We're not using an API, so we'll have to simulate one by creating a helper file inside the `src` directory called `receipts.js`. Paste the above code into this new file.
- To access this data from inside `App.js` we need to import it at the top of our code with `import { receipts } from "./receipts";`
- This app is going to use state. Prep `App.js` by converting it to a class component.
  - As you are new to React, **you are _highly_ encouraged to code this out manually,** rather than copy pasting from another source. The more you practice, the sooner you will get these boilerplates into your fingertips. As you'll be creating many more React components throughout the cohort, consider it an immensely good idea to be able to cook this up from memory.
```
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
      firstReceipt: receipts[0]
    })
  }
```

- Create a new `Receipt.jsx` component that renders the following by passing down props:
  - person
  - order
      - main
      - protein
      - rice
      - sauce
      - drink
      - cost

  - **Optional Practice:** Create and render another component inside this one called `Toppings.jsx` and render the toppings inside by passing down additional props.
- Render the `Receipt.jsx` component in the return of `App.js`. Don't forget to import new components at the top of your code when you need them!
- Add the two remaining receipts to state and render them inside two more `Receipt` components. **DO NOT** make new components, instead pass down different prop values.

## Part 3: Refactor for Dynamic Rendering

- Three seperately coded receipt components is pretty inefficient. Let's redefine our state to be the entire array of receipts:
```
this.state = ({
      receipts: receipts
    })
 ```
- Now we can map over our array of receipts to render each one! Update your code so it renders the same as before, but instead of hard coding three receipts, use a map so you only have to code the `Receipt` component once.

- You should have all three receipts rendered by now. Add some basic styling (at the very least) to make it easier to distinguish them from each other.

## Bonus

Add a button with an onClick to your receipts that changes the value of paid from **false** to **true**. Once clicked the receipt should immediately disappear from the browser view.

This may require some additional research...

## CSS Bonus

Animate each receipt to uniformly transition to a bigger size on a mouse hover.

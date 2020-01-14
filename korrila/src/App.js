import React from 'react';
import logo from './logo.svg';
import './App.css';
import {receiptData} from "./data/receipts"
import Receipt from "./data/Receipt"

// initialgit 

class App extends React.Component {
constructor(props){
  super(props)
  this.state=({
    // firstReceipt: receiptData[0],
    receipts: receiptData,
    // secondReceipt: receiptData[1],
    // thirdReceipt: receiptData[2]
  })
}

// this.state = ({
//   receipts: receiptData
// })

// componentDidMount(){
//   // inside api call return
//   setTimeout(()=>{
//     this.setState({firstReceipt: receiptData[1]})
//   }, 5000)
  
// }

 render(){
   console.log(this.state)
   return(
     <div className="App">
       {this.state.receipts.map(receipt=> (
      //  <h1>hihi</h1>
       <Receipt receipt= {receipt}/>
       ))}

     </div>
   );
 }
}
// part

export default App;

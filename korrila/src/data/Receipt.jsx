import React from 'react';

// class App extends React.Component {
//     constructor(props){
//       super(props)
//       this.state=({
//         receipt: receiptData[0]
//       })
//     }

// }

// render(){
//     return(
//       <div className="App">
//         <h1>hihi</h1>
//         <Receipt receipt= {receiptData}/>
//       </div>
//     );
//   }

function Receipt(props) {
    return (
        <div>
        <div>
            <h1>{props.receipt.person}</h1>
            <h4>{props.receipt.order.main}</h4>
            <h4>{props.receipt.order.protein}</h4>
            <h4>{props.receipt.order.rice}</h4>
            <h4>{props.receipt.order.sauce}</h4>
            <h4>{props.receipt.order.drink}</h4>
            <h4>{props.receipt.order.cost}</h4>
            <h3>{props.receipt.paid.toString()}</h3>
        </div>
        </div>
    )
}

export default Receipt

import React, {Component}from 'react';


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

// hhhahahaha

class Receipt extends Component {

    constructor(props){
        super(props)

        this.state= {
            paid: props.receipt.paid
        }
        this.paid = this.paid.bind(this)
    }

    paid(e){
        console.log('hello')
        this.setState({
            paid: true
        })
        
    }

    render(){
    return (
        <div>
        <div>
            <h1>{this.props.receipt.person}</h1>
            <h4>{this.props.receipt.order.main}</h4>
            <h4>{this.props.receipt.order.protein}</h4>
            <h4>{this.props.receipt.order.rice}</h4>
            <h4>{this.props.receipt.order.sauce}</h4>
            <h4>{this.props.receipt.order.drink}</h4>
            <h4>Total: ${this.props.receipt.order.cost}</h4>
            <h4>Tender: {this.state.paid.toString()}</h4>
            <button onClick={this.paid}>Pay Now</button>
        </div>
        </div>
    )
    }
}

export default Receipt

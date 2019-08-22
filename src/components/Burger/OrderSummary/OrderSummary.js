import React, { Component } from "react"
import Aux from "../../../hoc/Aux/Aux"
import Button from "../../UI/Button/Button"

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log("order summary will update");
  }


  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>
          :{this.props.ingredients[igKey]}</li>
      })

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A burger with the following ingredients</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>Total Price: </strong> ${this.props.price.toFixed(2)}</p>
        <p>continue to checkout?</p>
        <Button
          clicked={this.props.purchaseCancelled}
          btnType={"Danger"}
        >CANCEL</Button>
        <Button
          clicked={this.props.purchaseContinue}
          btnType="Success"
        >CONTINUE</Button>
      </Aux>
    )

  }
}

export default OrderSummary
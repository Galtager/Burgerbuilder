import React,{ Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES= {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.3,
    bacon:0.8
}

class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 5,
        purchasable: false,
        purchasing: false
    }
addIngredientHandler=(type)=>{
    let count = this.state.ingredients[type];
    count=count+1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type]=count;
    const priceUpdate = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({totalPrice:priceUpdate, ingredients:updatedIngredients});
    this.updatePurchaseState(updatedIngredients);


}
removeIngredientHandler=(type)=>{
    let count = this.state.ingredients[type];
    if(count > 0){
    count=count-1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type]=count;
    const priceUpdate =this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({totalPrice:priceUpdate, ingredients:updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
    }

}

updatePurchaseState (ingredients) {

    const sum = Object.keys(ingredients)
    .map(igKey=>{
        return ingredients[igKey];
    })
    .reduce((sum,el)=>{
        return sum + el;
    }, 0);
    this.setState({purchasable : sum > 0});
}

purchaseHandler =() =>{
    this.setState({purchasing: true});
}

purchaseCancelHandler =()=>{
    this.setState({purchasing: false});
}
purchaseContinuHandler=()=>{
    alert('you continue');
}
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Modal 
                show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingredients={this.state.ingredients}
                    canceled={this.purchaseCancelHandler}
                    continued={this.purchaseContinuHandler}
                    price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>

                <BuildControls 
                ingredientAdded={this.addIngredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable={this.state.purchasable}
                ordered={this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
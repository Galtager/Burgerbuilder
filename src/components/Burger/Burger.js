import React from 'react';
import style from "./Burger.module.css";
import BurgerIng from './Burgering/BurgerIng';

const burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return[...Array(props.ingredients[igKey])].map((_,i)=>{
            return <BurgerIng key={igKey + i} type={igKey}/>;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length === 0)
        transformedIngredients = <p> Please start adding ingredients!</p>

    return (
        <div className={style.Burger}>
            <BurgerIng type="bread-top"/>
            {transformedIngredients}
            <BurgerIng type="bread-bottom"/>
        </div>
    );
};

export default burger;
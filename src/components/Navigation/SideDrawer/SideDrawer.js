import React from 'react';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer =(props)=>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <BackDrop show={props.show} clicked={props.closed}/>
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}><Logo/></div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;
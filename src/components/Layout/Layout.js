import React,{Component} from "react";
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from "./Layout.module.css";

class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer :false});
    }
    sideDraweropenedHandler=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer :!prevState.showSideDrawer};
        });

    }
    render(){
        return(
            <Aux>
            <Toolbar open={this.sideDraweropenedHandler}/>
            <SideDrawer show={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <div>Toolbar,SideDrawer,BackDrop</div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;
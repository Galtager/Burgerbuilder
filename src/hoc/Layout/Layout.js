import React,{Component} from "react";
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
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
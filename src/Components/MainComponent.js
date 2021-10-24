import React, { Component } from 'react'
import NavMenu from "./Main/NavMenu";
import Menu from "./Main/Menu";
import MenuComponent from "./Main/MenuComponent";
import { DISHES } from './Main/shared/dishes'
class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES
        }
    }

    render() {
        return (
            <div className="main">
                <header className="main-header">
                    <NavMenu />
                </header>
                <Menu />
                <MenuComponent dishes={this.state.dishes} />
            </div>
        );
    }

}

export default Main;

import React, { Component } from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from 'components/layout/header/Header'
import Footer from 'components/layout/footer/Footer'
import HomeComponent from "./views/home/Home"
import MenuComponent from "./views/menu/Menu"
import AboutComponent from "./views/about/About"
import ContactComponent from "./views/contact/Contact"

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/menu" component={MenuComponent} />
                    <Route exact path="/about" component={AboutComponent} />
                    <Route exact path="/contact" component={ContactComponent} />
                    <Redirect to="/" component={HomeComponent} />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;

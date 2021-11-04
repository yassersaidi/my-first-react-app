import React, { Component } from 'react'
import Menu from "./Menu";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="d-flex justify-content-center content flex-column align-items-center">
                        <div className="d-flex align-items-center flex-column def">
                            <h1>Marina Food: Sea Food Restaurant</h1>
                            <p className="text-center home">Welcome to Marina Food, Here you will have a delicious sea food, and all what are you lookig for is Here.</p>
                        </div>
                        <div className="buttons">
                            <a href="/menu">Explore</a>
                        </div>
                        {/* {this.addPlates()} */}
                </div>
                <Menu />
            </div>
        );
    }
}
export default Home;

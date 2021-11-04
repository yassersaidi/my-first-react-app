import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from "./Navbar"


class Header extends Component {
    // addPlates() {
    //     const imagePath = []
    //     function importAll(r) {
    //         return r.keys().map(r);
    //     }
    //     const images = importAll(require.context('../../images/plates', false, /\.(png|jpe?g|svg)$/));
    //     images.forEach(image => {
    //         imagePath.push(image.default)
    //     });
    //     const plates = imagePath.map((image,index)=>{
    //         return(
    //             <img key={index} src={image} alt="plate" className="header-plate-image"></img>
    //         )
    //     })
    //     return (
    //         <div className="plates-animation h-100 w-100">
    //             {plates}
    //         </div>
    //     )
    // }
    // animatePlates(plate_images) {

    // }
    // componentDidMount() {
        
    //     // this.mountTheImages("../../images/plates")
    //     window.addEventListener('scroll', this.addPlates());
    // }
    // componentWillUnmount() {
    //     // this.mountTheImages("../../images/plates")
    //     window.removeEventListener('scroll', this.addPlates());
    // }
    render() {
        return (
            <div className="Header">
                <Container className="h-100">
                    <Navbar />
                    <div className="d-flex justify-content-between content flex-column align-items-center">
                        <div className="d-flex align-items-center flex-column def">
                            <h1>Marina Food: Sea Food Restaurant</h1>
                            <p className="text-center">Welcome to Marina Food, Here you will have a delicious sea food, and all what are you lookig for is Here.</p>
                        </div>
                        <div className="buttons">
                            <a href="/menu">Explore</a>
                        </div>
                        {/* {this.addPlates()} */}
                    </div>
                    <div className="fishes"></div>
                </Container>
            </div>
        )
    }
}

export default Header;
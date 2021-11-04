import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'
class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showHide: false,
            fullname:"",
            email: "",
            subject: "",
            message: ""
        }
        this.handleInputChanges = this.handleInputChanges.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChanges(event){
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }
    handleSubmit(event) {
        event.preventDefault();
        console.table(this.state)
        this.handleModalShowHide()
    }
    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }
    render() {
        return (
            <div className="contact content text-center d-flex justify-content-center align-items-center">
                <div className="contact-holder">
                    <h1>Contact Us</h1>
                    <p>Feel free to contact us</p>
                    <form className="d-flex justify-content-center align-items-center" onSubmit={this.handleSubmit} method="POST">
                        <div className="form-holder w-100 text-start">
                            <div>
                                <input type="text" name="fullname" id="fullname" placeholder=" " value={this.state.fullname} onChange={this.handleInputChanges} required/>
                                <label htmlFor="fullname">Full Name</label>
                                <span className="input-border"></span>
                            </div>
                            <div>
                                <input type="email" name="email" id="email" placeholder=" " value={this.state.email} onChange={this.handleInputChanges} required/>
                                <label htmlFor="email">Email</label>
                                <span className="input-border"></span>
                            </div>
                            <div>
                                <input type="text" name="subject" id="subject" placeholder=" " value={this.state.subject} onChange={this.handleInputChanges} required/>
                                <label htmlFor="subject">Subject</label>
                                <span className="input-border"></span>
                            </div>
                            <div className="text-area">
                                <textarea type="text" name="message" id="message" placeholder=" " value={this.state.message} onChange={this.handleInputChanges} required/>
                                <label htmlFor="message">Message</label>
                                <span className="input-border"></span>
                            </div>
                            <div className="contact-button">
                                <button type="submit">
                                    <span className="mr-1"><i className="fa fa-paper-plane"></i></span>
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title>Thanks 😍 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Thanks for your message, {this.state.fullname}</p>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }

}
export default Contact;

import { Component } from 'react'
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import DishDetailes from './DishDetailes'
class MenuComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderedDish: null,
        };
    }


    onOrder(dish) {
        this.setState({
            orderedDish: dish
        })
    }
    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetailes dish={this.state.orderedDish} />
            )
        } else {
            return (
                <div></div>
            )

        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="menu-card col-lg-3 me-1 col-sm-12 col-md-4 flex-column justify-content-between">
                    <div style={{ backgroundImage: "url(" + dish.image + ")" }}></div>
                    <div className="menu-preview" style={{ backgroundImage: "url(" + dish.image + ")" }}>
                    </div>
                    <div className="menu-description p-1">
                        <div>
                            {dish.label.length > 0 ? <span className='menu-label'>{dish.label}</span> : ""}
                            <span className="menu-cat">{dish.category}</span>
                        </div>
                        <div className="d-flex justify-content-between align-content-center w-100 align-items-end mt-1">
                            <span className="menu-name">{dish.name}</span>
                            <span className="menu-price">{dish.price}</span>
                        </div>
                        <div className="menu-info d-flex justify-content-between w-100">

                        </div>
                        <div className="menu-desc">
                            <p>{dish.description}</p>
                        </div>
                        <div className="menu-order w-100">
                            <ButtonGroup>
                                <Button variant="success" onClick={() => this.onOrder(dish)}>
                                    Read More
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <Container className="position-relative">
                <div className="full-menu position-absolute w-100 h-100"></div>
                <Row className="text-center justify-content-between align-items-center">
                    {menu}
                </Row>
                <div>
                    {this.renderDish(this.state.orderedDish)}
                </div>
            </Container>
        )
    }
}
export default MenuComponent;
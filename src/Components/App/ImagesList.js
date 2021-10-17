import React, { Component } from 'react'
import { Container, Row,Button,ButtonGroup} from 'react-bootstrap';
import "../../css/menu-card.css"
class ImagesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="menu-card col-lg-3 me-1 col-sm-12 col-md-4 flex-column justify-content-between">
                    <div style={{backgroundImage: "url("+dish.image+")"}}></div>
                    <div className="menu-preview"  style={{backgroundImage: "url("+dish.image+")"}}>
                    </div>
                    <div className="menu-description p-1">
                        <div>
                            {dish.label.length > 0 ? <span className='menu-label'>{dish.label}</span>:""}
                            <span className="menu-cat">{dish.category}</span>
                        </div>
                        <div class="d-flex justify-content-between align-content-center w-100 align-items-end mt-1">
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
                                <Button  variant="success" onClick={() => console.log("Success")}>
                                    Order
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
            </Container>
        )
    }
}
export default ImagesList;
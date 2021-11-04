import { Component } from 'react'
class DishDetailes extends Component {
    constructor(props) {
        super(props);
        console.log(props.dish)
    }
    render() {
        const dish = this.props.dish
        const dish_comment= dish.comments.map((comment)=>{
            return (
                <li key={comment.id}>
                    <div className="comment-content">{comment.comment}</div>
                    <div>
                        <span className="comment-info">{comment.author}</span>
                        <span className="comment-info">{comment.rating}/5</span>
                        <span className="comment-info">{comment.date}</span>
                    </div>
                </li>
            )
        })
        return (
            <div className="menu-card h-100 w-100 col-lg-3 me-1 col-sm-12 col-md-4 flex-column justify-content-between">
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
                </div>
                <div className="comments">
                    <span className="review">Reviews:</span>
                    {
                        (dish.comments != null) ? <ul>{dish_comment}</ul>:"No Reviews"
                    }
                </div>
            </div>
        )
    }
}
export default DishDetailes;
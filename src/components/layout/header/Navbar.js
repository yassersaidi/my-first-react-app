import {Link} from 'react-router-dom'
const Navbar = () => {
    return (

        <div className="header">
            <div className="navbar">
                <div className="brand-nb">
                    <Link to="/">Marina Food</Link>
                </div>
                <div className="menu">
                    <ul className="justify-content-between">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
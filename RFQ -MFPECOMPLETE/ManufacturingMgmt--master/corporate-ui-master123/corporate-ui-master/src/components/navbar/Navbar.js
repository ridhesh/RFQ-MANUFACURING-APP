import { Link } from "react-router-dom";
import "./navbarStyle.css"

const Navbar = () => {
    return (
        <div className="header-main">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
              RFQ Manufacturing & Supplier
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/dashboard" class="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dash-contact" class="nav-link">Contact Us</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" class="nav-link">Logout</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar;


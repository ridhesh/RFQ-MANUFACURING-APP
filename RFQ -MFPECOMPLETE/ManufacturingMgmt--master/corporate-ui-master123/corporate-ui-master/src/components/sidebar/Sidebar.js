import './sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div id="wrapper">
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Plant Items</Link>
                    </li>
                    <li>
                        <Link to="/rfq">RFQ</Link>
                    </li>

                    <li>
                        <Link to="/recent-liked">View All the Suppliers</Link>
                    </li>
                    <li>
                        <Link to="/post-offer">Add Supplier</Link>
                    </li>
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
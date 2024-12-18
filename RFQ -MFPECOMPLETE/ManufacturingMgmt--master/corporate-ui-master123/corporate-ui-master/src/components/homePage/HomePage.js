import { Link } from "react-router-dom";
import Header from "../header/Header";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="d-flex align-items-center min-vh-100">
                <div class="container text-center">
                    <h1>Welcome to RFQ Manufacturing and supplier</h1><br />
                    <h2>Your deals your suppliers </h2><br />
                    <h6>Login and get started</h6>
                    <Link to="/login" className="btn btn-success">Login</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage;
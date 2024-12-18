import "./myOffer-style.css";

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Link, useLocation } from "react-router-dom";

const EditMyOffer = () => {
    const location = useLocation();
    console.log(location.state);

    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="editOffer-div px-4">
                <h1 className='pt-4 pb-3'>Edit Offer</h1>
                <form action="#">
                    <table class="table">
                        <tbody>
                            <tr className="form-group">
                                <th scope="row">Name</th>
                                <td><input type="text" class="form-control" id="editName" placeholder={location.state.offerName} required /></td>
                            </tr>
                            <tr className="form-group">
                                <th scope="row">Description</th>
                                <td><input type="text" class="form-control" id="editDesc" value="dgkjdj djgkjdgd kgjd" required /></td>
                            </tr>

                            <tr>
                                <th scope="row">Category</th>
                                <td><input type="text" class="form-control" id="editCategory" placeholder={location.state.offerCategory.offCategoryName} required /></td>
                            </tr>

                            <tr>
                                <th scope="row">Posted on</th>
                                <td>{location.state.openedDate}</td>
                            </tr>

                            <tr>
                                <th scope="row">Engaged on</th>
                                <td>Jacob</td>
                            </tr>

                            <tr>
                                <th scope="row">Status</th>
                                <td>Jacob</td>
                            </tr>

                            <tr>
                                <th scope="row">Points Gained</th>
                                <td>Jacob</td>
                            </tr>

                            <Link to="/my-offer" type="submit" className="btn btn-dark mt-4 mr-3">Go Back</Link>
                            <button type="submit" className="btn btn-success mt-4">Update</button>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    )
}

export default EditMyOffer;

import React, { useState } from 'react';
import axios from "axios";
import './offerStyle.scss';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import { Link, useLocation } from 'react-router-dom';
const ViewOtherOffer = () => {
    const location = useLocation();
    console.log(location.state);
    const [state, setState] = useState(JSON.parse(location.state));

    const likePost = (offerId, empId) => {

        axios.post(`http://localhost:8003/offer/updateoffer/${offerId}/${empId}`, { data: null }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            setState(res.data);
        })
    }
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="offer-main-div">
                <div className="container-fluid">
                    <div className="row">
                        <div><h1 className='pl-4 pt-4 pb-3'>Offer Details</h1></div>
                        <table class="table table-striped mb-4">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Properties</th>
                                    <th scope="col">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{state.offerName}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Category</th>
                                    <td>{state.offerCategory.offCategoryName}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Posted on</th>
                                    <td>{state.openedDate}</td>
                                </tr>

                                <tr>
                                    <th scope="row">Engaged</th>
                                    <td>Not yet</td>
                                </tr>

                                <tr>
                                    <th scope="row">Status</th>
                                    <td>Open</td>
                                </tr>

                                <tr>
                                    <th scope="row">Likes</th>
                                    <td>{state.likes}</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <Link to="/dashboard" className='btn btn-dark mr-3'>Go back</Link>
                    <button className='btn btn-outline-danger' onClick={() => likePost(state.offerId, state.empId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                        </svg>
                        &nbsp;Like
                    </button>
                </div>
            </div>
        </>
    )
}

export default ViewOtherOffer;
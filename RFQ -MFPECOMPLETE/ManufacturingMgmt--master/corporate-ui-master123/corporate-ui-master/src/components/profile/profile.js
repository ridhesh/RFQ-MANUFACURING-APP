import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
//import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./profile-style.css";

const MyProfile = () => {
   // const [item, setItem] = useState({
   // });

    
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="profile-div pl-4">
                <h1 className='pt-4 pb-3'>HELLO AND WELCOME </h1>
                <table class="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row">Get RFQ Details</th>
                            <td> <Link to="/rfq" className="btn btn-dark mr-3 mt-4">CLICK</Link></td>
                        </tr>
                        <tr>
                            <th scope="row">        </th>
                            <td></td>
                        </tr>

                        <tr>
                            <th scope="row">Get SUPPLIERS Details</th>
                            <td> <Link to="/recent-liked" className="btn btn-dark mr-3 mt-4">CLICK</Link></td>
                        </tr>

                        <tr>
                            <th scope="row">     </th>
                            <td> </td>
                        </tr>

                        <tr>
                            <th scope="row">Get Plant Details</th>
                            <td> <Link to="/dashboard" className="btn btn-dark mr-3 mt-4">CLICK</Link></td>
                        </tr>

                        <tr>
                            <th scope="row">    </th>
                            <td> </td>
                        </tr>

                        <tr>
                            <th scope="row">Explore more within these links</th>
                            <td> </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default MyProfile;
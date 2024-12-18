import { useEffect, useState } from 'react';
import React from 'react';
import './offerStyle.scss';
import OfferCards from './OfferCards';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import axios from "axios";

const OtherOffers = () => {
    const [item, setItem] = useState();
    useEffect(() => {
        console.log(localStorage.getItem("token"));
        let req = {
            method: "get",
            url: `http://localhost:8082/plant/viewPartsReOrder`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }

        }
        axios(req)
            .then((res) => {
                setItem(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {

        }
    }, [])


    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="offer-main-div">
                <div className="container-fluid">
                    <div className="row">
                        <div><h1 className='pl-4 pt-4 pb-3'>Offers</h1></div>

                        <OfferCards item={item} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherOffers;
import { useEffect, useState } from 'react';
import React from 'react';
import RecentLikedCards from './RecentLikedCards';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import axios from "axios";


const RecentLiked = () => {
    const [item, setItem] = useState();
    useEffect(() => {
        console.log(localStorage.getItem("token"));
        let req = {
            method: "get",
            url: `http://localhost:8080/supplier/getAllSuppliers`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }

        }
        axios(req)
            .then((res) => {
                setItem(res.data);
                console.log(res.data);
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
                        <div><h1 className='pl-4 pt-4 pb-3'>VIEW ALL THE SUPPLIERS</h1></div>

                        <RecentLikedCards item={item} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentLiked;
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./post-style.css";
import axios from "axios";





const PostOffer = () => {
    const postOffer = async (e) => {
        e.preventDefault();
        console.log(e.target);
        let data = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            feedback: e.target[3].value,
            location: e.target[4].value,
           
        };
        console.log(data);
        axios.post("http://localhost:8080/supplier/addSupplier", data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            }
        }).then((res) => {
            console.log(res.data);
            alert("Offer posted successfully!");
        })

    }
    
    
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="post-div pl-4">
                <h1 className='pt-4 pb-3'>ADD Supplier</h1>
                <form onSubmit={postOffer}>
            
                    <table class="table">
                        <tbody>
                            <tr className="form-group">
                                <th>Offer Name</th>
                                <td>
                                    <input type="text" class="form-control" id="name" placeholder="Enter offer name" pattern="[a-zA-Z\s]+" required />
                                </td>
                            </tr>
                            <tr >
                                <th>email</th>
                                <input type="text" class="form-control" id="email" placeholder="Enter offer email" minLength = '3' required />
                            </tr>

                            <tr >
                                <th>phone</th>
                                <input type="text" class="form-control" id="phone" placeholder="Enter offer phone" pattern="^[7-9][0-9]{9}$" maxlength="10" minLength = '10' required />
                            </tr>
                            <tr >
                                <th>feedback</th>
                                <input type="text" class="form-control" id="feedback" placeholder="Enter offer feedback" required />
                            </tr>
                            <tr >
                                <th>location</th>
                                <input type="text" class="form-control" id="location" placeholder="Enter offer location" minLength = '3' required />
                            </tr>

                          

                            <Link to="/" className="btn btn-dark mr-3 mt-4">Go back</Link>
                            <button type="submit" className="btn btn-success mt-4">Post</button>
                        </tbody>

                    </table>
                </form>

            </div>
        </>
    );
};

export default PostOffer;
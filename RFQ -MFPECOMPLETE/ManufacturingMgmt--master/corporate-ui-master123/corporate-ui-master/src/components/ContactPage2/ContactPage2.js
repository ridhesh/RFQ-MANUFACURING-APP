import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
const ContactPage2 = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="offer-main-div  pl-4">
                <div className="container-fluid">
                    <div className="row">
                        <div><h1 className='pt-4 pb-3'>Contact Details</h1></div>

                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <th scope="row" className="w-25">Phone</th>
                                    <td>+1234567890</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>rfqss@gmail.com</td>
                                </tr>

                                <tr>
                                    <th scope="row">Address</th>
                                    <td>A9, New Ashok Nagar, R C Nagar, Vashi Naka,f.c.i. Mumbai, Chembur (east), Mumbai</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage2;
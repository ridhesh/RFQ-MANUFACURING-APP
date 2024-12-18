import Header from "../header/Header";
import "./contactStyle.css";
const ContactPage = () => {
    return (
        <>
            <Header />
            <div className="min-vh-100">
                <div class="container contact-div">
                    <div className="contact-heading text-center">
                        <h1>Contact Details</h1><br />
                        <p>Your problems are our priority</p><br />
                    </div>

                    <div className="contact-details">
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

export default ContactPage;
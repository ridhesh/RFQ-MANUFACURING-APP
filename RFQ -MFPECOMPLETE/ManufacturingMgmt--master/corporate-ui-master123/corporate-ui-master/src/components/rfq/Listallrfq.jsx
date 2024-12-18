import { Component } from 'react';

import rfqservices from  './rfqservices' ;
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

class Listallrfq extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            message: null
        }
        this.refreshRooms = this.refreshRooms.bind(this);
    }

    componentDidMount() {
        this.refreshRooms();
    }

    refreshRooms()
    {
        rfqservices.getRoomsData().then((res) => {
            this.setState({ rooms: res.data });
        });
    }
    render() {
        return (
            <>  <Navbar />
            <Sidebar/>
            
            <div>
                

                
                                <section>
                    <div>
                        <div className="container">
                            <div className="masthead-subheading">  <h3>. . . . .       List of  RFQ </h3> </div>
                        </div>
                        <div>{ this.state.message && <div className='alert alert-success'>{this.state.message}</div> }</div>
                        <div className="contact-details">
                        
                        <br/>
                        <table class="table table-striped">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Rfq fdfbfgbfgId</th>
                                        <th>Demand Id</th>
                                        <th>Rfq   Id</th>
                                        <th>Demand Id</th>
       
     
                                        <th>Part Id</th>
                                        <th>Quantity</th>
                                        <th>Part Name</th>
                                        <th>Time To supply</th>
                                        <th>Specification</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.rooms.map(
                                            room =>
                                                <tr key={room.rfqId}>
                                                    <td>{room.rfqId}</td>
                                                    <td>{room.demandid}</td>
                                                    <td>{room.rfqId}</td>
                                                    <td>{room.demandid}</td>
                                                    <td>{room.partId}</td>
                                                    <td>{room.partName}</td>
                                                    <td>{room.quantity}</td>
                                                    <td>{room.timetoSupply}</td>
                                                    <td>{room.specification}</td>
                                  
                                                   
                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            </>
        );
    }
}

export default Listallrfq;
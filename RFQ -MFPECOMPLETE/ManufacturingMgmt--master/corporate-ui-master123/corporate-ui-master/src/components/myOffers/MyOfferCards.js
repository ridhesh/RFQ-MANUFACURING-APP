import { Link } from 'react-router-dom';
import './myOffer-style.css';

const MyOfferCards = ({ item }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {item !== undefined && item.map((Val) => {
                        return (
                            <div
                                className="card offer-card my-3 ml-4"
                                key={Val.id}
                            >
                                <div class="card-header text-center font-weight-bold">
                                    {Val.offerName}
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Posted On: </span>
                                        {Val.openedDate}
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Engaged: </span>
                                        Not yet
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Status: </span>
                                        Open
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Category: </span>
                                        {Val.offerCategory.offCategoryName}
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Likes: </span>
                                        {Val.likes}
                                    </div>

                                    

                                </div>

                                <div className="card-footer text-center">
                                    <Link to="/edit-myOffer" className='text-success' state={Val}>Edit</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MyOfferCards;



import './offerStyle.scss';
import { Link } from 'react-router-dom';

const OfferCards = ({ item }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {item !== undefined && item.map((Val) => {
                        return (
                            <div
                                className="card offer-card my-3 ml-4"
                                key={Val.partId}
                            >
                                <div className="card-header text-center font-weight-bold">
                                    {Val.partDescription}
                                </div>
                                
                                <div className="card-body">

                                <div className="card-text">
                                        <span className='font-weight-bold'>Part Description : </span>
                                        {Val.partDescription}
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Part Specification : </span>
                                        {Val.partSpecification}
                                    </div>
                            
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Stock In Hand : </span>
                                        {Val.stockInHand}
                                    </div>

                                </div>
                                <div className="card-footer text-center">
                                    <Link to="/view-otherOffer" className='text-primary' state={JSON.stringify(Val)}>Open</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default OfferCards;
/*import './offerStyle.scss';
import { Link } from 'react-router-dom';

const OfferCards = ({ item }) => {
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
                                <div className="card-header text-center font-weight-bold">
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
                                    <Link to="/view-otherOffer" className='text-primary' state={JSON.stringify(Val)}>Open</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default OfferCards;*/


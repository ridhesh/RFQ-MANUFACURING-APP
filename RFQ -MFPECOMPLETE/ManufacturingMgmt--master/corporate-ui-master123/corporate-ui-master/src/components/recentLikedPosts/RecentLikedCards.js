// import { Link } from 'react-router-dom';

const RecentLikedCards = ({ item }) => {
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
                                    {Val.name}
                                </div>
                                <div className="card-body">

                                    <div className="card-text">
                                        <span className='font-weight-bold'>Email :  </span>
                                        {Val.email}
                                    </div>
                                    <div className="card-text">
                                        <span className='font-weight-bold'>Phone : </span>
                                        {Val.phone}
                                    </div>

                                    <div className="card-text">
                                        <span className='font-weight-bold'>Location: </span>
                                        {Val.location}
                                    </div>

                                    <div className="card-text">
                                        <span className='font-weight-bold'>Feedback: </span>
                                        {Val.feedback}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default RecentLikedCards;


/*const RecentLikedCards = ({ item }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {item !== undefined && item.map((Val) => {
                        return (
                            <div
                                className="card offer-card my-3 ml-4"
                                key={Val.supplier_id}
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
                                        {Val.openedDate}
                                    </div>

                                    <div className="card-text">
                                        <span className='font-weight-bold'>Status: </span>
                                        {Val.openedDate}
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default RecentLikedCards;*/


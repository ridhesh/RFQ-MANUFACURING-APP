import axios from 'axios';
const USER_API_BASE_URL = "http://localhost:8081/rfq/getRFQOfPlant"

class rfqservices
{
    

    getRoomsData()
    {
        return axios.get(USER_API_BASE_URL);
    }

   
}

export default new rfqservices();
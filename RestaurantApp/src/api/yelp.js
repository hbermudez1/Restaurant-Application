//HTTP Client
import axios from 'axios';

//Yelp Api
//This will allow us to search for businesses based on user searches. 
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer sINjMn38ub3uVbbDgIOJzL_4D07VHwVPuCBRSKeCxor7nGiip5vvaqhOiTunAYHHGSTRh7Gm5ml-Takm1pof7RL98jE84X8d49jPfvOjctxjzEmNjyVzF6lH69bHZXYx'
    }
});


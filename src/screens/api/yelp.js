import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 9iJinnKiFbmQJXb8CwC_yp89-gDR1te8C1Rf6SYmOaXyCDP68OISEVkuRGvrbLVh01A3-yY1OZ_ttQ816mmJ2EIprUvT2ZkZ6OU188S6dxxLsM10oiHegpA9nkK0XnYx',
    }
});


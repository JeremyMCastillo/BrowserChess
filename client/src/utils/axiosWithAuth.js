import axios from 'axios';

//We might need to implement this syncronously with PlayerStart and PlayerJoin to work with PrivateRoute

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:3030', /*Update for final url when dev is complete*/
        headers: {
            authorization : localStorage.getItem('gameID')
        }
    });
}
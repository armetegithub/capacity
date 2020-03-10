import axios from 'axios';

class UsersService {
        
    constructor() {
      this.service = axios.create({
        baseURL:`${process.env.REACT_APP_API_URL}/users`,
        withCredentials: true
      });
    }

    oneUser = id => this.service.get(`/account/${id}`).then(response => response.data);

}

export default UsersService;


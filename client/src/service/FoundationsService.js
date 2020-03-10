import axios from 'axios';

class FoundationsService {
    constructor() {
      this.service = axios.create({
        baseURL:`${process.env.REACT_APP_API_URL}/foundations`,
        withCredentials: true
      });
    }

    allFoundations = () => {
        return this.service.get('/')
        .then(response => {
            return response.data
        });
    }


    addFoundation = foundation => {
      console.log(foundation)
      this.service.post('/addFoundation', foundation).then(response => response.data);
    };



    oneFoundation = id => this.service.get(`/${id}`).then(response => response.data);
}



export default FoundationsService;
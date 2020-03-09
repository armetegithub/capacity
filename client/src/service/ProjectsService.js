import axios from 'axios';

class ProjectsService {
    constructor() {
      this.service = axios.create({
        baseURL:`${process.env.REACT_APP_API_URL}/projects`,
        withCredentials: true
      });
    }

    allProjects = () => {
        return this.service.get('/')
        .then(response => {
            return response.data
        });
    }

    oneProject = id => this.service.get(`/${id}`).then(response => response.data);
  }

  






export default ProjectsService;
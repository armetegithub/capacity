import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3001/api/auth',
      withCredentials: true
    });
  }

  signup = (username, password, email, comunidad) => {
    return this.service.post('/signup', {username, password, email, comunidad})
    .then(response => response.data)
  }

  login = (username, password) => {
    console.log(username, password)
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }
}

export default AuthService;
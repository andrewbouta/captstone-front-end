import axios from 'axios';

const API_URL = "http://localhost:8080/authenticate/";

class AuthService {
    login(username, password) {
        return axios
        .post(API_URL + "Login", {
            username,
            password
        })
        .then(response => {
            if (response.data.JWT_TOKEN) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(firstname, lastname, email, username, password) {
        return axios.post(API_URL + "SignUp", {
            firstname,
            lastname,
            email,
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();
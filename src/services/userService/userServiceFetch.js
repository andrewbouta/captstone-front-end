// Not  functional
const USERS_URL = 'http://localhost:8080/user';

class userServiceFetch {
    getUser() {
        return fetch(USERS_URL).then((res => res.json)); // return response body as a JSON
    }
    
}

export default new userServiceFetch();
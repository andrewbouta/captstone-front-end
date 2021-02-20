import axios from 'axios';

const HOME_API = 'http://localhost:8080'

class AccountHolderService {
    retrieveAccountHolder(name) {
        return axios.get(`{}`);
    }
}
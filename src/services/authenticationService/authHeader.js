export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.JWT_TOKEN) {
        return { Authorization: 'Bearer ' + user.JWT_TOKEN }; 

    } else {
        return {};
    }
}
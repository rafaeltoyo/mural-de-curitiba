export default class ServiceLogin {
    login(username, password) {
        let users = {users: []};

        users = require("login.json");

        let user = {
            username: "",
            password: "",
            profileImg: "",
            roles: []
        }

        return users.users.find(e => {
            user = e;

            return user.username == username && user.password == password;
        });
    }
}
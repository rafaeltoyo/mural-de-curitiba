
export default class LoginService {
    static login(username, password) {
        let users = {users: []};

        users = require("./login.json");

        if (username == null || username == "")
            throw Error("Usuário vazio");
        if (password == null || password == "")
            throw Error("Senha vazia");

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

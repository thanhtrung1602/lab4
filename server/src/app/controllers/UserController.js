class UsersController {
    index(req, res) {
        res.send("this is users");
    }
}

module.exports = new UsersController;
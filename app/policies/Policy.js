const { User } = require('../models/index');

module.exports = {

    product(req, res, next) {
        if(User.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    }

}
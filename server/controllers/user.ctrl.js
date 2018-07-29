const User = require('./../models/User');

module.exports = {
  addUser: (req, res, next) => {
    let { name, email } = req.body;

    saveUser({ name, email });

    function saveUser(obj) {
      new User(obj).save((err, user) => {
        if (err) {
          res.send(err);
        } else if (!user) {
          res.send(400);
        } else {
          return res.send(user);
        }
        next();
      });
    }
  },
  getUser: (req, res, next) => {
    User.findById(req.params.id)
    .exec((err, user) => {
      if (err) {
        res.send(err);
      } else if (!user) {
        res.send(400);
      } else {
        res.send(user);
      }
      next();
    })
  }
}

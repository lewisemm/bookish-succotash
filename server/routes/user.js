const user = require('./../controllers/user.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = (router) => {
  
  // add a user
  router.route('/user').post(multipartWare, user.addUser);

  // get a particular article to view
  router.route('/user/:id').get(user.getUser);
}
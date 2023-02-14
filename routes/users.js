const  Controller = require('..controllers/users');

const router =require ('express').router();

// CRUD Routes /Users

router.get('/',Controller.getUsers);  //user
router.get ('/:userId',Controller.getUser); //user/: userId
router.post('/', Controller.createUser);  //user
// router.post('/:userId', Controller.updateUser);
router.delete('/:userId',Controller.updateUser); //users /userId
router.delete('/:userId',Controller.deleteUser);///users/:usersid


module.exports= router;
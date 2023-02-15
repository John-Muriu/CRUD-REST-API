// this file contains all the functions to excute in order to interact with database and hvae the 4 basic functionalities

const User = require('../models/user')

//CRUD controllers

// get all users

exports.getUsers = (req,res, next) => {
    User.findAll()
    .then(users =>{
        res.status(200).json({users:users});
     })
     .catch(err => console.log(err));
}

// get user by id

exports.getUsers = (req,res,next) =>{
    const userId = req.param.userId
    User.findByPk(userId)
        .then(user => {
            if(!user){
                return res.status(404).json({message: 'uer not Found'});

            }

            res.status(200).json({user:user});
        })
        .catch(err => console(err));

}


// Create user
exports.createUser = (res,req,next) => {

    const name=req.body.name;
    const email = req.body.email;

    User.create({
        name:name,
        email:email
    })

    .then (result => {
        console.log('User Created');
        res.status(201).json({
            message:'User Created sucessfuly!',
            user:result
        });
    })
    .catch(err => {
        console.log(err);
    
    });
}


// update user

exports.updateUser =(req, res, next) => {
    const userId = req.param.userId;
    const UpdateName = req.param.name;
    const UpdateEmail =req.param.email;

    User.findByPk(userId)
    .then(user =>{
        if (!user) {
            return res.status(404).json({message:'User not found!'})
        }

        user.name = UpdateName;
        user.email=UpdateEmail;
        return user.save();
    })
    .then(result => {
        res.status(200).json({message:'user Updated',user: result})

    })

    .catch(err => console.log(err));
     
}


// delete Users

exports.deleteUsers =(req,res, next ) => {

    const userId = req.param.userId;
    User.findByPk(userId)
    .then(user =>{
        if (!user) {
            return res.status(404).json({message:'user not found'})

        }
        return User.destroy({
            where:{
                id:userId
            }
        });
    })
    .then (result => {
        res.status(200).json({message: 'user deleted!!'});
    })
    .catch(err => console.log(err));

}
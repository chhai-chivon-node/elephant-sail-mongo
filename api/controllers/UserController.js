/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    findall:function(req,res){
        return User.find().then(function(users){
                return res.json(users);
        }).catch(function(err){
            console.log("Error :", err);
        }); 
    },

    find:function(req,res){
        var uId = req.params.id;
        return User.find({id: uId}).then(function(user){
            return res.json(user);
        }).catch(function(err){
            console.log("Error :", err);
        });
    },
    
    create:function(req,res){
        var user ={
            firstName:req.param("firstName"),
            lastName:req.param("lastName"),
            email:req.param("email"),
            phoneNumber:req.param("phoneNumber"),
            address:req.param("address"),
            password:req.param("password"),
            confirmPassword:req.param("confirmPassword")
        };
        return User.create(user).then(function(user){
            return res.json(user);
        }).catch(function(err){
            console.log("Error :", err);
        });

    },

    update:function(req,res){
        var uId = req.params.id;
        var user ={
            firstName:req.param("firstName"),
            lastName:req.param("lastName"),
            email:req.param("email"),
            phoneNumber:req.param("phoneNumber"),
            address:req.param("address"),
            password:req.param("password"),
            confirmPassword:req.param("confirmPassword")
        };
        return User.update(uId, user).then(function(user){
                return res.json(user);
        }).catch(function(err){
            console.log("Error : ", err);
        });
    },

    delete:function(req,res){
        var uId = req.params.id;
        return User.destroy(uId).then(function(user){
                return res.json(user);
        }).catch(function(err){
                console.log(err);
        });
    }
};


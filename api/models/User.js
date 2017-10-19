/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    firstName:{
      type:'string'
    },
    lastName:{
      type:'string'
    },
    email:{
      type:'email', 
      required: true,
      unique: true
    },
    phoneNumber:{
      type:'string'
    },
    address:{
      type:'string'
    },
    password:{
      type:'string',
      required: true,
    },
    confirmPassword:{
      type:'string',
      required: true,
    },
  }
};


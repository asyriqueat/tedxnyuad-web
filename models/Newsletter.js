var keystone = require('keystone');
    Types = keystone.Field.Types;

var Newsletter = new keystone.List('Newsletter',{
    autokey:{from:'email',path:'key', unique:true},
    map:{name:'email'}
});

Newsletter.add({
    firstName: {type:String,required:true,initial:false},
    lastName: {type:String,required:true,initial:false},
    email: {type:Types.Email,required:true},
    signedUp: {type:Date, default:Date.now}
});

Newsletter.defaultSort = '-signedUp';
Newsletter.defaultColumns = 'firstName, lastName, email, signedUp';

Newsletter.register();
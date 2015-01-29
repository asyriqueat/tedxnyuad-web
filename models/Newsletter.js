var keystone = require('keystone');
    Types = keystone.Field.types;

var Newsletter = new keystone.List('Newsletter',{
    autokey:{from:'email',path:'key', unique:true},
    map:{name:'email'}
});

Newsletter.add({
    email: {type:String,required:true},
    signedUp: {type:Date, default:Date.now}
});

Newsletter.defaultSort = '-signedUp';
Newsletter.defaultColumns = 'email, signedUp';

Newsletter.register();
var keystone = require('keystone'),
    Types = keystone.Field.Types;
    
var Registration = new keystone.List('Registration',{
    autokey:{path:'attendee',from:'email',unique:true}
});

Registration.add({
    name:{type:Types.Name,required:true,initial:true},
    email:{type:Types.Email,required:true,initial:true},
    phone:{type:String,initial:true},
    affiliation:{type:Types.Select,options:'public,faculty,staff,student',required:true,initial:true},
    raffle:{type:Types.Boolean,initial:true,default:false},
    streaming:{type:Types.Boolean,initial:true,default:false}
});

Registration.defaultSort = '-name';
Registration.defaultColumns = 'name, email, phone, affiliation, raffle, streaming';
Registration.register();
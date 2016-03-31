var keystone = require('keystone'),
    Types = keystone.Field.Types;
    
var Registration = new keystone.List('Registration',{
    autokey:{path:'attendee',from:'email',unique:true}
});

Registration.add({
    fullName:{type:String,required:true,initial:true},
    email:{type:Types.Email,required:true,initial:true},
    affiliation:{type:Types.Select,options:'public,facultyStaff,student',required:true,initial:true},
    tickets:{type:Types.Select,options:'1,2,3,4',required:true,initial:true}
});

Registration.defaultSort = '-fullName';
Registration.defaultColumns = 'fullName, email, affiliation, tickets';
Registration.register();
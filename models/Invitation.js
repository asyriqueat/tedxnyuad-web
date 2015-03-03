var keystone = require('keystone'),
    Types = keystone.Field.Types;
    
var Invitation = new keystone.List('Invitation',{
    autokey:{path:'guest',from:'guestName',unique:true}
});

Invitation.add({
    guestName:{type:String,required:true,initial:true},
    invitationCode:{type:String,initial:true},
    going:{type:Types.Boolean,initial:true,default:false}
});

Invitation.defaultSort = '-guestName';
Invitation.defaultColumns = 'guestName, invitationCode, going';
Invitation.register();
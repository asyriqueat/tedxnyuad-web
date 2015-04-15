var config = require('./participants.json');
console.log(config);
var fs = require('fs');
var json2csv = require('json2csv');

json2csv({data: config, fields: ['attendee', 'affiliation', 'phone','email','waitlist','streaming','raffle','name']}, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('file.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});
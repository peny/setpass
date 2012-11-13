var readline = require('readline');
var _   = require('underscore');
var argv   = require('optimist').usage('Usage: $0 --service [string] --username [string] --password [string] --newpassword [string]').demand(['service']).argv;
var client = require('../lib/client');

var service = require('../services/'+argv.service)();

var user = {
  username    : '',
  password    : '',
  newpassword : ''
};

var generateUser = function(username,password,newpassword,callback){
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function checkData(){
    if(!username){
      rl.question("Input username:",function(answer){
        username = answer;
        checkData();
      });
    } else if(!password){
      rl.question("Input current password:",function(answer){
        password = answer;
        checkData();
      });
    } else if(!newpassword){
      rl.question("Input new password:",function(answer){
        newpassword = answer;
        checkData();
      });
    } else {
      callback(null,{
        username    : username,
        password    : password,
        newpassword : newpassword
      });
    }
  }

  checkData();
}

generateUser(argv.username,argv.password,argv.newpassword,function(err,res){
  client.changePassword(service,res,function(err,res){
    if(err){
      console.log(err);
    } else {
      console.log(res);
    }
    process.exit();
  });
});


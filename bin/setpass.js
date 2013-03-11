var _   = require('underscore');
var argv   = require('optimist').usage('Usage: $0 --service [string] --username [string] --password [string] --newpassword [string] --silent [boolean]').demand(['service'])
    .alias('s', 'service')
    .alias('u', 'username')
    .alias('p', 'password')
    .alias('n', 'newpassword')
    .argv;
var client = require('../lib/client');
var program = require('commander');

var service = require('../services/'+argv.service)();
var options = {
    service     : service,
    silent      : argv.silent
};

var user = {
  username    : '',
  password    : '',
  newpassword : ''
};

var generateUser = function(username,password,newpassword,callback){

  function checkData(){
    if(!username){
        program.prompt('Username: ', function(name){
            username = name;
            checkData();
        });
    } else if(!password){
        program.password('Current password: ', '*', function(pass){
            password = pass;
            //process.stdin.destroy();
            checkData();
        });
    } else if(!newpassword){
        program.password('New password: ', '*', function(pass){
            newpassword = pass;
            //process.stdin.destroy();
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
  client.changePassword(options,res,function(err,res){
    if(err){
      console.log(err);
    } else {
        !options.silent ? console.log(res) : '';
    }
    process.exit();
  });
});


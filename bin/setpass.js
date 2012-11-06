var readline = require('readline');
var _   = require('underscore');
var argv   = require('optimist').usage('Usage: $0 --service [string] --username [string] --password [string] --newpassword [string]').argv;
var client = require('../lib/client');

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

    var cb = _.after(3,function(){
        callback(null,{
            username    : username,
            password    : password,
            newpassword : newpassword
        });
    });
    if(!username){
        rl.question("Input username:",function(answer){
            username = answer;
            rl.resume();
            cb();
        });
    } else {
        cb();
    }
    if(!password){
        rl.question("Input current password:",function(answer){
            password = answer;
            cb();
        });
     } else {
        cb();
     }
    if(!newpassword){
        rl.question("Input new password:",function(answer){
            newpassword = answer;
            cb();
        });
    } else {
        cb();
    }
};

generateUser('','','',function(err,res){
    console.log(res);
});

var service = require('../services/twitter');

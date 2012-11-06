var Browser = require('zombie');

exports.changePassword = function(service, user, callback){
    var browser = new Browser();
    browser.visit(service.loginlink,function(){
        browser.
            fill(service.loginfield, user.username).
            fill(service.passwordfield, user.password).
            pressButton(service.signinfield, function(){
            browser.visit(service.changelink,function(){
                browser.evaluate('document.querySelector("'+service.change_save+'").removeAttribute("disabled");');
                browser.
                    fill(service.change_current, user.password).
                    fill(service.change_new, user.newpassword).
                    fill(service.change_confirm, user.newpassword);
                    browser.pressButton(service.change_save,function(){
                        //For debugging
                        console.log('PATH:', browser.location.pathname);
                        callback(null,'Password changed!');
                });

            });
        });
    });
};
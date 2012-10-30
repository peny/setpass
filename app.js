var Browser = require('zombie');

var facebook = {
    changelink : 'https://www.facebook.com/settings?tab=account&section=password&view'
};

var twitter = {
    loginlink       : 'https://twitter.com/login/?lang=en',
    loginfield      : 'Username or email',
    passwordfield   : 'Password',
    signinfield     : 'Sign in',
    changelink      : 'https://twitter.com/settings/password',
    change_current  : 'current_password',
    change_new      : 'user_password',
    change_confirm  : 'user_password_confimation',
    change_save     : 'Save changes'
};

var user = {
    username    : '',
    password    : '',
    newpassword : ''
};

var service = twitter;

var browser = new Browser();
browser.visit(service.loginlink,function(){
    browser.
        fill(service.loginfield, user.username). 
        fill(service.passwordfield, user.password).
        pressButton(service.signinfield, function(){
            browser.visit(service.changelink,function(){
                console.log(browser.location.pathname);
                console.log(browser.text("body"));
                browser.
                    fill(service.change_current, user.password).
                    fill(service.change_new, user.newpassword).
                    fill(service.change_confirm, user.newpassword).
                    pressButton(service.change_save,function(){
                        console.log(browser.location.pathname);
                        console.log(browser.text("body"));
                    });
            });
        });
});

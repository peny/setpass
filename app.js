var Browser = require('zombie');

var facebook = {
    name            : 'facebook',
    loginlink       : 'https://www.facebook.com',
    loginfield      : '#email',
    passwordfield   : '#pass',
    signinfield     : '#loginbutton > input',
    changelink      : 'https://www.facebook.com/settings?tab=account&section=password&view',
    change_current  : 'password_old',
    change_new      : 'password_new',
    change_confirm  : 'password_confirm',
    change_save     : '.submit > input'
};

var twitter = {
    name            : 'twitter',
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

var github = {
    name            : 'github',
    loginlink       : 'https://github.com/login',
    loginfield      : 'login_field',
    passwordfield   : 'password',
    signinfield     : 'commit',
    changelink      : 'https://github.com/settings/admin',
    change_current  : 'old-password',
    change_new      : 'new-password',
    change_confirm  : 'user_password_confimation',
    change_save     : 'Update Password'
};

var gmail = {
    name            : 'gmail',
    loginlink       : 'https://accounts.google.com/ServiceLogin?service=mail',
    loginfield      : 'Email',
    passwordfield   : 'Passwd',
    signinfield     : 'SignIn',
    changelink      : 'https://accounts.google.com/b/0/EditPasswd',
    change_current  : 'OldPasswd',
    change_new      : 'Passwd',
    change_confirm  : 'PasswdAgain',
    change_save     : 'save'
};

var default_service = {
    loginlink       : '',
    loginfield      : '',
    passwordfield   : '',
    signinfield     : '',
    changelink      : '',
    change_current  : '',
    change_new      : '',
    change_confirm  : '',
    change_save     : ''
};

var user = {
    username    : '',
    password    : '',
    newpassword : ''
};

var service = facebook;

var browser = new Browser();
browser.visit(service.loginlink,function(){
    console.log(browser.text("title"));
    browser.
        fill(service.loginfield, user.username). 
        fill(service.passwordfield, user.password).
        pressButton(service.signinfield, function(){
        browser.visit(service.changelink,function(){
            console.log(browser.location.pathname);
            console.log(browser.text("title"));
            //For facebook
            browser.evaluate('document.querySelector("'+service.change_save+'").removeAttribute("disabled");');
            browser.
                fill(service.change_current, user.password).
                fill(service.change_new, user.newpassword).
                fill(service.change_confirm, user.newpassword);
                browser.pressButton(service.change_save,function(){
                console.log(browser.location.pathname);
                console.log(browser.text("title"));
            });

        });
    });
});

module.exports = function(){
    return {
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
}
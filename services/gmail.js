module.exports = function(){
    return {
        name            : 'gmail',
        loginlink       : 'https://accounts.google.com/ServiceLogin?service=mail',
        loginfield      : '#Email',
        passwordfield   : '#Passwd',
        signinfield     : '#signIn',
        changelink      : 'https://accounts.google.com/b/0/EditPasswd',
        change_current  : '#OldPasswd',
        change_new      : '#Passwd',
        change_confirm  : '#PasswdAgain',
        change_save     : '#save'
    };
}
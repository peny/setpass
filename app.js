var Browser = require('zombie');

var browser = new Browser();
browser.visit("http://twitter.com/login/?lang=en",function(){
    console.log(browser.text("body"));
    console.log(browser.text("title"));
    browser.fill("Username or email", "ledsnajocke").
    fill("Password", "").
    pressButton("Sign in", function(){
        console.log('in?!?');
        console.log(browser.location.pathname);
        console.log(browser.text("title"));
        console.log(browser.text("body"));
    });
});

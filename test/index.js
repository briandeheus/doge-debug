var Doge = require("../index");
var i = 0;

setInterval(function () {
    console.log(" info - " + new Date() + " - Dummy message");
    if (++i === 8) {
        Doge();
    }
}, 400);

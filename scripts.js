var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        myNav.style.borderBottomColor = "#DEE2E6 !important"
    } 
    else {
        myNav.style.borderBottomColor = "#FFFFFF !important"
    }
};
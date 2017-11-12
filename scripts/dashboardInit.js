/**
 * Krys Mathis
 * Purpose is to handle initializing the structure for the dashboard
*/
// get page elements
const taskWidget = require("./taskWidget/taskWidgetInit");
const chatWidgetInit = require("./chatWidget/chatWidgetInit")
const friendsWidgetInit = require("./friendsWidget/friendsWidgetInit")




// get page elements
const welcome = document.querySelector(".welcome");
const login = document.querySelector(".login");
const dashboard = document.querySelector(".dashboard");
const message = document.querySelector(".login__user-message");

// control what elements exist on the page
const dashboardInit = function(user) {
    
    message.innerHTML = "";
    welcome.style.display = "none";
    login.style.display = "none";
    dashboard.style.display = "block";

    taskWidget.populate(taskWidget.getLatest());
    chatWidgetInit();
    friendsWidgetInit();
}



module.exports = dashboardInit;
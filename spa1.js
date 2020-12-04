var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider)
{
$routeProvider.when("/",{
    templateUrl:'home.html',
    controller:'homectrl'
})
.when("/about",{
    templateUrl:'about.html',
    controller:'aboutctrl'
})
.when("/contact",{
    templateUrl:'contact.html',
    controller:'contactctrl'
})
.otherwise ({redirectTo:'/'})

});

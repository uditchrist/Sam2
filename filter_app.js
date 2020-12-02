angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    var employees=[
        {name:'Rithul',dob:new Date("July 21,1990"),gender:"Male",salary:55000.778},
        {name:'Indu',dob:new Date("July 20,1987"),gender:"Female",salary:65000.778},
        {name:'Kevin',dob:new Date("November 19,1983"),gender:"Male",salary:55000.778},
        {name:'Reena',dob:new Date("August 21,1990"),gender:"Male",salary:55000.778}
    ];
    console.log(employees);
    $scope.employees=employees;
    $scope.rowlimit=4;
});
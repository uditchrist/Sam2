
angular.module("MyApp",[])
.controller("MyCtrl",function($scope)
{
    $scope.names=[
        {name:'Rithul',country:'England',age:22},
        {name:'Kevin',country:'Denmark',age:26},
        {name:'Reenu',country:'America',age:29}
    ];
});

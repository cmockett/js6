angular.module("myApp", [])

var angFunc = function($scope){
	$scope.showFormClick = function (){
		$scope.showFormDiv=true;
	}
}





angular.module("myApp").controller("appController", ["$scope", angFunc])
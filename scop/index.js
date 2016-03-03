var sampleModule = angular.module('SampleModule',[]);


sampleModule.controller('HelloCtrl',['$scope', function ($scope){
	$scope.name = 'World';
}]);

sampleModule.controller('WorldCtrl',['$scope',function ($scope){
	$scope.population = 7000;
	$scope.countries = [
		{name: 'France', population: 63.1},
		{name: 'United Kingdom', population: 61.8},
	];
	$scope.worldsPercentage = function(countryPopulation){
		return (countryPopulation / $scope.population) * 100;
	}
}]);

sampleModule.controller('TextAreaWithLimitCtrl',['$scope',function($scope){
	var MAX_LEN = 100;
	var WARN_THRESHOLD = 10;
	$scope.message = "Hi,World!";

	$scope.remaining = function(){
		var remain = MAX_LEN - $scope.message.length;
		return remain > 0 ? remain : 0;
	};
	$scope.hasValidLength = function(){
		return MAX_LEN - $scope.message.length > 0;
	};
	$scope.shouldWarn = function(){
		return $scope.remaining() < WARN_THRESHOLD;
	};
}]);
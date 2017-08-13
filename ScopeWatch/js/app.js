var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope){
	$scope.cars=[];
	$scope.$watch('carManf', function(value) {
		console.log(value);
		$scope.selectedCar="";
		if(value=='Honda'){
			$scope.cars=["CR-V","ACCORD","CIVIC","FIT","HR-V","PILOT","ODYSSEY","RIDGELINE"];
		}else if(value=='Toyota'){
			$scope.cars=["COROLLA","CAMRY","PRIUS","MIRAI","HIGHLANDER","TACOMA","TUNDRA"];
		}else if (value=='Mazda'){
			$scope.cars=["CX-3","CX-5","MAZDA3","MAZDA6","MX-5"];
		}
	});
	
	$scope.$watch('selectedCar', function(value) {
		console.log(value);
	});
});
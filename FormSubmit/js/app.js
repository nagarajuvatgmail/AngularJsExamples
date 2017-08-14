var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http){

	$scope.persons=[{"name":"Nagaraju","location":"Charlotte","skill":"J2EE"},
					{"name":"Ramesh","location":"NewYork","skill":"Database"},
					{"name":"Kiran","location":"Virginia","skill":"DatawareHouse"},
					{"name":"Mahesh","location":"Fairfax","skill":"Testing"},
					{"name":"Krishna","location":"Frisco","skill":"Informatica"}];
	
	$scope.addPersonInfo = function() {
		var formData = {
			"name" : $scope.name,
			"location" : $scope.location,
			"skill" : $scope.skill
		};
		$scope.persons.push(formData);
		$scope.name='';
		$scope.location='';
		$scope.skill='';
	};
	
	$scope.removePersonInfo = function(person) {
		var personName = person.name;
		console.log("Person to remove: " + person.name);
		for(var i=0; i<$scope.persons.length; i++)
		{
			if($scope.persons[i].name==personName)
			$scope.persons.splice(i,1);
		}
	};
});

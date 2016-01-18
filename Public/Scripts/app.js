require('angular');

var app = angular.module("gifApp", ["gifRest"]);

app.controller("giphyCntrl", ['$scope',function ($scope) {
    
   
}]);

//Service Section

	var srvc = require('./giphyService');

	srvc.callGifRest(srvc.gifRest);

//Controller Section

	var controller = require('./controller');

	app.controller("gifController", ['$scope','gifService',controller]);

//Directive Section

	var directive = require('./directive');

	app.directive("giphyTag",directive);












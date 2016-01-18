require('angular');


var gifRest = angular.module("gifRest", []);

//module.exports = function()
//{

	function callGifRest(gifRest)
	{
		return	gifRest.service("gifService",['$http', function ($http) {
				this.hitGiphy = function (scope) {
					if (scope && $http) { 
						$http.get('/api/giphy/' + scope.Phrase.replace(/\s+/g, '+'))            //Replace space with +
						 .success(function (data) {
							scope.giphys = data;
						})
						 .error(function (data) {
							scope.giphys = [];
							console.log('Error: ' + data);
						});
					}
				}
			}]
			);
	}
//}

module.exports["gifRest"] = gifRest;
module.exports['callGifRest'] = callGifRest;




















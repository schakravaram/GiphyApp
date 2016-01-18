

module.exports = function ($scope, gifService) {
   
	//Swap the action and still images when user hovers/leaves mouse pointer from the image
	var swapImages = function(obj) {
							var tmp = obj.gif.fxHiStillImgUrl;
							obj.gif.fxHiStillImgUrl = obj.gif.fxHiImgUrl;
							obj.gif.fxHiImgUrl = tmp;
					 };	
	
	$scope.Phrase = '';     // Search string holder
    
    $scope.giphys = [];    // Result object holder            
    
    $scope.GifSearch = function () { 
        return gifService.hitGiphy($scope);          // Hit Nodejs Rest API
    };
    
    $scope.hover = function () {                    // OnHover display action image
        swapImages(this);
    };
    
    $scope.leave = function () {                    // OnLeave display still image
        swapImages(this);
    };
};






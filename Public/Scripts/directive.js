
module.exports = function () {
    return {
        restrict: "E",
        require:"^form",
        scope: {
            Search: "="
        }, 
        templateUrl: "./GiphyTemplate.html",
        controller: "gifController"
    };
};
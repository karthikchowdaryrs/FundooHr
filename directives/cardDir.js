/**
 * card directive - returns card template
 * */
angular.module('mainApp').directive('card', function () {
    return {
        restrict: 'EA',
        scope: {
            value: '='
        },
        templateUrl: 'templates/card.html'
    };
});
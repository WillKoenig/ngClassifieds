(function() {
    "use strict"
    
    angular
        .module("ngClassifieds")
        .controller("classifiedsCtrl", ['$scope', '$http', 'classifiedsFactory', function($scope, $http, classifiedsFactory) {
            
            
            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data;
            });
            
        }]);
    
})();
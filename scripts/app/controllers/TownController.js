"use strict";

app.controller('TownController', ['$scope', 'TownsResource',
    function ($scope, TownsResource) {
        $scope.towns = TownsResource.getAll();
    }]);

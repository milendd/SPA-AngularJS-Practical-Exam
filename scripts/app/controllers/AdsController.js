"use strict";

app.controller('AdsController', ['$scope', 'CategoriesResource', 'TownsResource',
    function ($scope, CategoriesResource, TownsResource) {
        $scope.categories = CategoriesResource.getAll();
        $scope.towns = TownsResource.getAll();
    }]);

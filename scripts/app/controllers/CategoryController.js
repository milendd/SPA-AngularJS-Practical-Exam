"use strict";

app.controller('CategoryController', ['$scope', 'CategoriesResource',
    function ($scope, CategoriesResource) {
        $scope.categories = CategoriesResource.getAll();
    }]);

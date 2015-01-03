"use strict";

app.controller('AdsController', ['$scope', 'pageSize', 'CategoriesResource', 'TownsResource', 'AdsResource',
    function ($scope, pageSize, CategoriesResource, TownsResource, AdsResource) {
        $scope.categories = CategoriesResource.getAll();
        $scope.towns = TownsResource.getAll();

        $scope.requestParameters = {
            startPage: 1,
            pageSize: pageSize
        };

        $scope.getAds = function (requestParameters) {
            AdsResource.getAll(requestParameters)
                .then(function (data) {
                    $scope.ads = data.ads;
                }
            )
        };

        $scope.getAds($scope.requestParameters);
    }]);

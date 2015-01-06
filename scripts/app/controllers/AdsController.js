"use strict";

app.controller('AdsController', ['$scope', 'pageSize', 'AdsResource',
    function ($scope, pageSize, AdsResource) {

        $scope.requestParameters = {
            startPage: 1,
            pageSize: pageSize
        };

        $scope.getAds = function (requestParameters) {
            AdsResource.getAll(requestParameters)
                .then(function (data) {
                    $scope.ads = data.ads;
                    $scope.pagesList = new Array(data.numPages);
                    $scope.maxPage = $scope.pagesList.length;
                }
            )
        };

        $scope.getAds($scope.requestParameters);

        // paging:
        $scope.firstPage = function () {
            $scope.requestParameters.startPage = 1;
            $scope.getAds($scope.requestParameters);
        };
        $scope.previousPage = function () {
            if ($scope.requestParameters.startPage > 1) {
                $scope.requestParameters.startPage--;
            }
            $scope.getAds($scope.requestParameters);
        };
        $scope.setStartPage = function (currentPage) {
            $scope.requestParameters.startPage = currentPage;
            $scope.getAds($scope.requestParameters);
        };
        $scope.nextPage = function () {
            if ($scope.requestParameters.startPage < $scope.maxPage) {
                $scope.requestParameters.startPage++;
            }
            $scope.getAds($scope.requestParameters);
        };
        $scope.lastPage = function () {
            $scope.requestParameters.startPage = $scope.maxPage;
            $scope.getAds($scope.requestParameters);
        };

        // filter by category and town:
        $scope.getAllCategories = function () {
            $scope.select('categories', 0, 'selected');
            delete $scope.requestParameters.categoryId;
            $scope.requestParameters.startPage = 1;
            $scope.getAds($scope.requestParameters);
        };
        $scope.getAllTowns = function () {
            $scope.select('towns', 0, 'selected');
            delete $scope.requestParameters.townId;
            $scope.requestParameters.startPage = 1;
            $scope.getAds($scope.requestParameters);
        };
        $scope.getByCategoryId = function (id) {
            $scope.select('categories', id, 'selected');
            $scope.requestParameters.startPage = 1;
            $scope.requestParameters.categoryId = id;
            $scope.getAds($scope.requestParameters);
        };
        $scope.getByTownId = function (id) {
            $scope.select('towns', id, 'selected');
            $scope.requestParameters.startPage = 1;
            $scope.requestParameters.townId = id;
            $scope.getAds($scope.requestParameters);
        };
        $scope.select = function (collection, id, className) {
            var selector = '.' + collection + ' li';
            $(selector).removeClass(className);
            $($(selector).get(id)).addClass(className);
        };
    }]);

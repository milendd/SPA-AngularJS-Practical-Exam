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
    }]);

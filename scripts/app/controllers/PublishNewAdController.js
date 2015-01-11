"use strict";

app.controller('PublishNewAdController', ['$http', '$scope', 'homeUrl', 'authentication',
    function ($http, $scope, homeUrl, authentication) {

        var currentHeaders = authentication.getHeaders();
        $scope.ad = {};

        $scope.publish = function (ad) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/ads',
                data: ad,
                headers: currentHeaders
            }).success(function (data, status, currentHeaders, config) {
                console.log('success');
            }).error(function (data, status, currentHeaders, config) {
                // TODO
            })
        }

    }]);
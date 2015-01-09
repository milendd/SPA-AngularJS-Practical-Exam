﻿app.factory('UserData', ['$http', 'authentication', 'homeUrl',
    function ($http, authentication, homeUrl) {

        function registerUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/register',
                data: user
            }).success(function (data, status, headers, config) {
                authentication.saveUser(angular.toJson(data));
            }).error(function (data, status, headers, config) {
                // TODO
            })
        }

        return {
            registerUser: registerUser
        }
    }])
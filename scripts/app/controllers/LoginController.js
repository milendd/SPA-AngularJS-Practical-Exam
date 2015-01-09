"use strict";

app.controller('LoginController', ['$scope', 'UserData',
    function ($scope, UserData) {

        $scope.user = {};

        $scope.login = function (user) {
            UserData.loginUser(user);
        }

    }]);
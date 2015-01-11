"use strict";

app.controller('LoginController', ['$scope', 'UserData', 'authentication',
    function ($scope, UserData, authentication) {

        $scope.user = {};

        $scope.login = function (user) {
            UserData.loginUser(user);
            authentication.showUserMenu();
            authentication.showHeaderMenu();
        }

    }]);
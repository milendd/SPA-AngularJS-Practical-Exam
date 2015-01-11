"use strict";

app.controller('LoginController', ['$scope', '$location', 'UserData', 'authentication',
    function ($scope, $location, UserData, authentication) {

        $scope.user = {};

        $scope.login = function (user) {
            UserData.loginUser(user);
            authentication.showUserMenu();
        }

    }]);
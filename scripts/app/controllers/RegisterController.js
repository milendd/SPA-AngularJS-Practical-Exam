"use strict";

app.controller('RegisterController', ['$scope', 'UserData', 'authentication',
    function ($scope, UserData, authentication) {

        $scope.user = {};

        $scope.register = function (user) {
            UserData.registerUser(user);
            authentication.showUserMenu();
            authentication.showHeaderMenu();
        }

    }]);
"use strict";

app.controller('RegisterController', ['$scope', 'UserData',
    function ($scope, UserData) {

        $scope.user = {};

        $scope.register = function (user) {
            UserData.registerUser(user);
        }

    }]);
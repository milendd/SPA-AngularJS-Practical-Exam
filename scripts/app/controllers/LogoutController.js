"use strict";

app.controller('LogoutController', ['$scope', 'UserData', 'authentication',
    function ($scope, UserData, authentication) {

        $scope.user = authentication.getUser();

        $scope.logout = function () {
            UserData.logoutUser($scope.user);
            authentication.hideHeaderMenu();
            authentication.showGuestMenu();
        }

    }]);
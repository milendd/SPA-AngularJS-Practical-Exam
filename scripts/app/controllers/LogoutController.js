"use strict";

app.controller('LogoutController', ['$scope', 'UserData', 'authentication',
    function ($scope, UserData, authentication) {

        var user = authentication.getUser();

        $scope.logout = function (user) {
            UserData.logoutUser(user);
            authentication.hideHeaderMenu();
            authentication.showGuestMenu();
        }

    }]);
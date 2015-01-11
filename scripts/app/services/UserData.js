app.factory('UserData', ['$http', 'authentication', 'homeUrl',
    function ($http, authentication, homeUrl) {
        var currentHeaders = authentication.getHeaders();

        function registerUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/register',
                data: user
            }).success(function (data, status, currentHeaders, config) {
                authentication.saveUser(angular.toJson(data));
            }).error(function (data, status, currentHeaders, config) {
                // TODO
            })
        }

        function loginUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/login',
                data: user
            }).success(function (data, status, currentHeaders, config) {
                authentication.saveUser(angular.toJson(data));
            }).error(function (data, status, currentHeaders, config) {
                // TODO
            })
        }

        function logoutUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/logout',
                data: user
            }).success(function (data, status, currentHeaders, config) {
                authentication.clearHeaders();
            }).error(function (data, status, currentHeaders, config) {
                // TODO
            })
        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logoutUser: logoutUser
        }
    }])
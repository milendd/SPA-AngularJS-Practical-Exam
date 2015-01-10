app.factory('UserData', ['$http', 'authentication', 'homeUrl',
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

        function loginUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/login',
                data: user
            }).success(function (data, status, headers, config) {
                authentication.saveUser(angular.toJson(data));
            }).error(function (data, status, headers, config) {
                // TODO
            })
        }

        function logoutUser(user) {
            $http({
                method: 'POST',
                url: homeUrl + '/user/logout',
                data: user
            }).success(function (data, status, headers, config) {
                authentication.clearHeaders();
            }).error(function (data, status, headers, config) {
                // TODO
            })
        }

        return {
            registerUser: registerUser,
            loginUser: loginUser,
            logoutUser: logoutUser
        }
    }])
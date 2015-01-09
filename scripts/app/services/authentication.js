app.factory('authentication', function () {

    function saveUser(data) {
        localStorage.setItem('user', data);
    }

    function getUser() {
        return angular.fromJson(localStorage.user);
    }

    return {
        saveUser: saveUser,
        getUser: getUser
    }
})
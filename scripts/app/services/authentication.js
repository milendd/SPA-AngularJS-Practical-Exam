app.factory('authentication', function () {

    function saveUser(data) {
        localStorage.setItem('user', data);
    }

    function getUser() {
        return angular.fromJson(localStorage.user);
    }

    function getHeaders(argument) {
        var headers = {};
        var userData = getUser();
        if (userData) {
            headers.Authorization = 'Bearer ' + userData.access_token;
        };
        return headers;
    }

    function isLoggedIn() {
        return !!localStorage.user;
    }

    function clearHeaders() {
        localStorage.removeItem('user');
    }

    function isAdmin() {
        var userData = getUser();
        if (userData) {
            return angular.fromJson(localStorage.user).isAdmin;
        }
    }

    function showUserMenu() {
        $('.userNavigation ul li').css('display', 'block');
        $('.guestNavigation').css('display', 'none');
    }

    return {
        saveUser: saveUser,
        getUser: getUser,
        getHeaders: getHeaders,
        clearHeaders: clearHeaders,
        isAdmin: isAdmin,
        isLoggedIn: isLoggedIn,
        showUserMenu: showUserMenu
    }
})
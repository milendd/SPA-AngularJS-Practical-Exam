"use strict";

app.factory('CategoriesResource', ['$resource', 'homeUrl', function ($resource, homeUrl) {
    var categoryResource = $resource(homeUrl + '/categories');

    return {
        getAll: function () {
            return categoryResource.query();
        }
    }
}]);

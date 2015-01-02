"use strict";

app.factory('TownsResource', ['$resource', 'homeUrl', function ($resource, homeUrl) {
    var townsResource = $resource(homeUrl + '/towns');

    return {
        getAll: function () {
            return townsResource.query();
        }
    }
}]);
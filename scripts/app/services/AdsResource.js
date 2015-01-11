"use strict";

app.factory('AdsResource', ['$resource', 'homeUrl', 'pageSize', function ($resource, homeUrl, pageSize) {
    var adsResource = $resource(homeUrl + '/ads', null, {
        'getAll': {
            method: 'GET'
        }
    });

    return {
        getAll: function (requestParameters) {
            return adsResource.getAll(requestParameters).$promise;
        }
    }
}]);

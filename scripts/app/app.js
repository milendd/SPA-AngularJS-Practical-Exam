"use strict";

var app = angular.module('myApp', ['ngResource'])
    .constant('homeUrl', 'http://softuni-ads.azurewebsites.net/api')
    .constant('pageSize', 8);
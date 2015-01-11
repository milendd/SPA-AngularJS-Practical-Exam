"use strict";

var app = angular.module('myApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '../../templates/advertisements.html'
            })
            .when('/login', {
                templateUrl: '../../templates/loginForm.html'
            })
            .when('/register', {
                templateUrl: '../../templates/registerForm.html'
            })
            .when('/user/ads/publish', {
                templateUrl: '../../templates/publishNewAd.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .constant('homeUrl', 'http://softuni-ads.azurewebsites.net/api')
    .constant('pageSize', 8);
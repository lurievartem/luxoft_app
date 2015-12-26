'use strict';

var app = angular.module("LuxofttestApp", [
    "ui.router",
    "restangular",
    "ngMessages"
]);

require('../components/accounts');
require('../components/grid');
require('../components/storeAccountsDialog')

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state("list",{
            url: "/",
            templateUrl: "../components/accounts/accountsListTemplate.html",
            controller: "AccountListCtrl",
            controllerAs: "accounts"
        })
        .state('list.add', {
            url: '/add',
            templateUrl: "../components/storeAccountsDialog/storeAccTemplate.html",
            controller: "StoreCtrl",
            controllerAs: 'vm'
        });
}]);

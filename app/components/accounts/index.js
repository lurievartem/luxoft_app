'use strict';

var app = angular.module('LuxofttestApp');

app.controller('AccountListCtrl', ['AccountListfactory', '$filter', require('./accountsListCtrl')]);
app.factory('AccountListfactory', ['Restangular', require('./accountsFactory')]);

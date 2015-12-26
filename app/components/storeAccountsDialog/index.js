'use strict';

var app = angular.module('LuxofttestApp');

app.controller('StoreCtrl', ['$state', 'AccountListfactory', '$scope',require('./storeAccCtrl')]);

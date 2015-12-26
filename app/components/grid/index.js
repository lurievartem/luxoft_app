'use strict';

var app = angular.module('LuxofttestApp');

app.directive('grid',[ require('./gridDirective')]);
app.filter('gridFilterValue', [ require('./gridFilterValueFilter')]);
app.filter('gridMaskedSSN', [ require('./gridMaskSSNFilter')]);
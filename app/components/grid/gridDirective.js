module.exports = function(){
    return {
        restrict: 'A',
        templateUrl: "./components/grid/gridTemplate.html",
        replace: true,
        scope: {
            filterValue: '=filter',
            order: "=orderby",
            columns: "=columns",
            data: "=data"
        },
        link: function($scope, $elements, $attrs){
            $scope.setOrderBy = function(column){
                if(!column.show || !column.sortableValue) return;

                if($scope.order.columnName == column.columnName){
                    $scope.order.asc = !$scope.order.asc;
                } else{
                    $scope.order.asc = true;
                    $scope.order.columnName = column.columnName;
                }
            };
        }
    }
};
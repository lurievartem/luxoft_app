module.exports = function (){
    return function(items, filterValue){
        if(!filterValue) return items;

        var newList = [];
        var right = false;

        check(items, true)

        function check(list, isMainObj){
            for(var i=0; i<list.length; i++){
                if(right && !isMainObj) break;

                var item =  list[i];
                if(!item) return;

                if(angular.isArray(item)){
                    check(item, false);
                } else if(angular.isObject(item)){
                    var itemObj = item.plain ? item.plain() : item; //make restangular object plain object

                    var arr = Object.keys(itemObj);
                    for(var j = 0; j < arr.length; j++){
                        check([itemObj[arr[j]]], false);
                    }
                } else{
                    if(new RegExp(filterValue).test(item)) right = true;
                }

                if(right && isMainObj){
                    right = false;
                    newList.push(item);
                    continue;
                }
            }
        }

        return newList;
    }
}
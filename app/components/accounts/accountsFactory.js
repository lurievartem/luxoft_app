module.exports = function(Restangular){
    var restAngular = Restangular.withConfig(function(Configurer){
       Configurer.setBaseUrl('http://localhost:3000/');
    });

    var accounts = restAngular.all('accounts');;

    return {
        getAccounts: function(){
            return accounts.getList();
        },
        saveAccount: function(obj){
            if(obj.put){
                return obj.put();
            } else {
                return accounts.post(obj);
            }
        },
    };
}
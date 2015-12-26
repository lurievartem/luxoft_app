module.exports = function($state, AccountListfactory, $scope){
    this.dialogTitle = 'Add';

    var modalDialog = $('#accountDialog');

    modalDialog.modal();
    modalDialog.on('hidden.bs.modal', function () {
        $state.go('list');
    });

    this.obj = {
        client: {}
    };

    this.savePurchase = function(){
        this.submitted = true;

        if (this.accountForm.$valid) {
            modalDialog.modal('hide');

            AccountListfactory.saveAccount(this.obj).then(function(){
                $scope.accounts.data.push(this.obj);
            }.bind(this), function(){});
        }
    };

}
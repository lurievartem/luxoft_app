module.exports = function (AccountListfactory, $filter){
    this.data = [];
    this.filter = "";
    this.orderBy = { columnName: 'client', sortableValue: 'client.name', asc: true};

    this.columns=[
        { columnName: 'client', name:"Client", show: true, sortableValue: 'client.name', templateUrl: './components/grid/clientTemplate.html', class: "col-md-5 col-sm-6 col-xs-6 " },
        { columnName: 'accounts', name:"Accounts", show: true, templateUrl: './components/grid/accountTemplate.html', class: 'col-md-4 col-sm-6 col-xs-6' },
        { columnName: 'notes', name:"Notes", show: true, templateUrl: './components/grid/notesTemplate.html', class: "col-md-3 hidden-sm hidden-xs hidden-small-devices" }
    ];

    AccountListfactory.getAccounts().then(function(data){
        this.data = data;
    }.bind(this));

}




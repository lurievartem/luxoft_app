module.exports = function (){
    return function(value){
        if(!value) return '';
        return 'XXX-XX-' + value.substr(7,4);
    }
}
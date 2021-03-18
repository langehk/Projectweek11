exports.formatDate = function() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
};
//Inspiration: https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd

exports.tooLate = function(loandate){
    loandate = new Date(loandate); 
    today = new Date();
    let penalty = false; 
    let days = Math.abs(loandate - today);
    days = days/(1000*60*60*24.0);
    
    if(days > 30){
        penalty = true; 
        return penalty;
    }
    else {
        return penalty;    
    }
    
};

exports.expired = function(date){
    date = new Date(date)/(1000*60*60*24.0); 
    today = new Date()/(1000*60*60*24.0);
    let expired = false; 

    if(today > date){
        expired = true; 
        return expired;
    }
    else {
        return expired;    
    }
}
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

exports.tooLate = function(loandate){
    console.log(loandate);
    loandate = new Date(loandate); 
    console.log(loandate);
    today = new Date();
    //console.log('Loandate ' + loandate + ' today ' + today);
    let penalty = false; 
    let days = Math.abs(loandate - today);
    //console.log("Days " + days);
    days = days/(1000*60*60*24.0);
    
    if(days < 30){
        penalty = true; 
        return penalty;
    }
    else {
        return penalty;    
    }
    
};
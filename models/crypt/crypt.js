const bcrypt = require('bcrypt');

exports.hash = function(){
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        return hash; 
    });
}

exports.compare = function(){
    bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
        // result == true
    });
}
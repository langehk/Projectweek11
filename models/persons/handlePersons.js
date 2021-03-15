const model = require('./person');
const mongooseWrap = require('../mongooseWrap');
const bcrypt = require('bcrypt');

exports.comparePassword = async function(req, res){
    try {
        let query = {email: req.body.email};
        let password = req.body.password;
        let personinfo = await mongooseWrap.retrieve(model.Person, query);
        
        //comparing plaintext (input) to hash value from database
        const loggedin = await bcrypt.compare(password, personinfo[0].password, function(err, result) {
            return result;
/*             if(result){
                loggedin = true; 
                console.log('Hvad gør du først');
            }
            else{
                loggedin = false; 
            } */
            //console.log('Result: ' + loggedin);
        });

        console.log(loggedin);
        return loggedin; 
        
    } catch (error) {
        console.log(error);
    }
}
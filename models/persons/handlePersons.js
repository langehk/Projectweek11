const model = require('./person');
const mongooseWrap = require('../mongooseWrap');
const bcrypt = require('bcrypt');


exports.readPerson = async function(req, res){
    try {
        let query = {email: req.body.email};
        let personinfo = await mongooseWrap.retrieve(model.Person, query);
        return personinfo;
        
    } catch (error) {
        console.log(error);
    }
}

exports.comparePassword = async function(plain, personinfo, req){
    //comparing plaintext (input) to hash value from database
    const loggedin = await bcrypt.compare(plain, personinfo[0].password);
    if(loggedin){
        req.session.authenticated = true;       // set session vars
        req.session.user = personinfo[0].firstname;  
    }

    return loggedin;
}
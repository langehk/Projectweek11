const model = require('./person');
const mongooseWrap = require('../mongooseWrap');
const bcrypt = require('bcrypt');


exports.readPassword = async function(req, res){
    try {
        let query = {email: req.body.email};
        let personinfo = await mongooseWrap.retrieve(model.Person, query);
        console.log('Password read');
        return personinfo[0].password;
        
    } catch (error) {
        console.log(error);
    }
}

exports.comparePassword = async function(plain, hash){
    //comparing plaintext (input) to hash value from database
    const loggedin = await bcrypt.compare(plain, hash);
    return loggedin;
}
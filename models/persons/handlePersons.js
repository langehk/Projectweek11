const model = require('./person');
const mongooseWrap = require('../mongooseWrap');
const crypt = require('../crypt/crypt');

exports.comparePassword = async function(req, res){
    try {
        let query = {email: req.body.email};
        let password = req.body.password;
        let cryptPassword = ""; //Hashing needs to be done
        let personinfo = await mongooseWrap.retrieve(model.Person, query);
        if(cryptPassword == personinfo[0].password){
            console.log("Oh yes");
        }
        else {
            console.log("Forget it sister");
        }
    } catch (error) {
        console.log(error);
    }
}
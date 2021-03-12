const mongoose = require("mongoose");

//Connection to mongodb server
const dbname = "library";
const constr = `mongodb://localhost:27017/${dbname}`;
const conparam = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const db = mongoose.connection;

exports.retrieve = async function (Model, query) {
    let stuff = null;
    await mongoose.connect(constr, conparam);
    db.once("open", function () { //open connection
        console.log("Connected to server by mongoose")
    });

    try {
        stuff = await Model.find(query); //find data

    } catch (err) {
        console.log(err);
    } finally {
        console.log("Found stuff with mongoose girl");
        db.close();
        return stuff;
    }
}

exports.retrieveAndSort = async function (Model, sort) {
    let stuff = null;
    await mongoose.connect(constr, conparam);
    db.once("open", function () { //open connection
        console.log("Connected to server by mongoose")
    });

    try {
        stuff = await Model.find({}, null, sort); //find data

    } catch (err) {
        console.log(err);
    } finally {
        console.log("Found stuff with mongoose girl");
        db.close();
        return stuff;
    }
}

exports.retrieveDistinct = async function (Model, query) {
    let stuff = null;
    await mongoose.connect(constr, conparam);
    db.once("open", function () { //open connection
        console.log("Connected to server by mongoose")
    });

    await Model.find().distinct(query, function (err, items) {
        stuff = items;

    });
    return stuff
}

exports.count = async function (Model, query) {
    await mongoose.connect(constr, conparam);
    let stuff = null;
    db.once("open", function () { //open connection
        console.log("Connected to server by mongoose")
    });
    
    stuff = await Model.countDocuments(query, function (err, count) {
        if (err) {
            console.log(err)
        } else {
            console.log("Count is", count)
            db.close();
        }
    });
    return stuff;
}

exports.upsert = async function (obj) {
    await mongoose.connect(constr, conparam);
    db.once("open", function () { //open connection
        console.log("Connected to server by mongoose")
    });

    try {
        await obj.save();
        console.log("Saved to db!");
        db.close();
    } catch (e) {
        console.log(e);
    }
}
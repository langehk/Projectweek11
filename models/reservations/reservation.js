const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
    pid: Number,
    bookid: Number,
    date: String
})

const Reservation = mongoose.Model("Reservation", reservationSchema, 'reservations');

exports.Reservation = Reservation; 
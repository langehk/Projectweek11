//Eventlisteners for books.pug
const handleBooks = require('../../models/books/handleBooks');
let detailButtons = document.getElementsByClassName('details');

for (let i = 0; i < detailButtons.length; i++) {
    detailButtons[i].addEventListener("click", function(){
        handleBooks.readDetails()
    })
}
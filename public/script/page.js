//BOOKS
'use strict'

import {$} from "./nQuery.js";
import {Ajax} from "./Ajax.js";

const getBooks = function(ev) {
    let req = Object.create(Ajax);
    req.init();
    console.log('getbooks');
    req.getFile("/library/books", showBooks);
};

const showBooks = function(e){
    console.log('showbooks');
    let element = $("books");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let books = JSON.parse(e.target.responseText);
    books.forEach(function(book) {
        let opt = document.createElement('p');
        
        let opttext = document.createTextNode(book.title);
        opt.appendChild(opttext);
        element.appendChild(opt);
    });

}

window.addEventListener("load", getBooks);
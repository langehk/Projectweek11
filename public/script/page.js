//BOOKS
'use strict'

import {$} from "./nQuery.js";
import {Ajax} from "./Ajax.js";

const getBooks = function(ev) {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("/library/books", showBooks);
};

const showBooks = function(e){
    
    let element = $("books");
    
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    
    let books = JSON.parse(e.target.responseText);
    
    //Iterate through all books
    books.forEach(function(book) {
        let div = document.createElement('div');
        let title = document.createTextNode(book.title + ": ");
        div.appendChild(title);
        
        //Iterate through authors 
        book.authors.forEach(function(author){
            let authortxt = document.createTextNode(`${author.firstname} ${author.middlename} ${author.lastname}, `);
            div.appendChild(authortxt);
        })

        //Create and append detailsbutton
        let buttontxt = document.createTextNode("Details");
        let button = document.createElement('button');
        button.appendChild(buttontxt);
        button.addEventListener('click', function(){
            showDetails(books, book.title);
        }); 

        //Create and append loanbutton
        let buttontxtLoan = document.createTextNode("Loan");
        let buttonLoan = document.createElement('button');
        buttonLoan.appendChild(buttontxtLoan);
        buttonLoan.addEventListener('click', function(){
            //Loan
        }); 

        //Create and append reservebutton
        let buttontxtReserve = document.createTextNode("Reserve");
        let buttonReserve = document.createElement('button');
        buttonReserve.appendChild(buttontxtReserve);
        buttonReserve.addEventListener('click', function(){
            //Reserve 
        }); 

        div.appendChild(button);
        div.appendChild(buttonLoan);
        div.appendChild(buttonReserve);
        element.appendChild(div);

        let details = document.createElement('div');
        details.setAttribute('id', book.title);
        div.appendChild(details);

    });

}

const showDetails = function(books, title){
    let book; 
    let divelement = document.getElementById(title);
    while (divelement.firstChild) {
        divelement.removeChild(divelement.firstChild);
    }
    //Searching for the title
    for (var i=0; i < books.length; i++) {
        if (books[i].title === title) {
            book = books[i];
        }
    }

    divelement.innerHTML = `Publisher: ${book.published.publisher}, Place: ${book.published.place}, Year: ${book.published.year}
    <br> Copyright: ${book.copyright}
    <br> Edition: ${book.edition}`; 

}

window.addEventListener("load", getBooks);
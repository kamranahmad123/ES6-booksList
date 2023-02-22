import { booksDisplay, searchDisplay, displayContact } from './Modules/NavModule.js';
import date from './Modules/updateDate.js';
import {
  book, Author, submit, list, listButton, addButton, contactButton,
} from './Modules/SelectionKeys.js';

window.addEventListener('load', date());
let retreivedData = JSON.parse(localStorage.getItem('books')) || [];

const bookRemover = (Data) => {
  retreivedData = retreivedData.filter((storeBook) => storeBook.Random !== Data);
  localStorage.setItem('books', JSON.stringify(retreivedData));
  window.location.reload();
};

const display = (Input) => {
  Input.forEach((element) => {
    const text = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.classList.add('title-author');
    h3.innerHTML = `"${element.Book}" by ${element.Author}`;
    const button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.onclick = () => bookRemover(element.Random);
    text.appendChild(h3);
    text.appendChild(button);
    text.classList.add('first');
    list.appendChild(text);
  });
};

const storeBooks = (book, Author) => {
  const randomNum = Math.floor(Math.random() * 1000);
  retreivedData.push({ Random: randomNum, Book: book.value, Author: Author.value });
  localStorage.setItem('books', JSON.stringify(retreivedData));
};

submit.addEventListener('click', () => {
  storeBooks(book, Author);
});

listButton.addEventListener('click', booksDisplay);
addButton.addEventListener('click', searchDisplay);
contactButton.addEventListener('click', displayContact);

display(retreivedData);

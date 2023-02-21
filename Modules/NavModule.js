const booksList = document.querySelector('.Books-list');
const searchBar = document.querySelector('.searchBar');
const contactInformation = document.querySelector('.contact-information');

const booksDisplay = () => {
  booksList.classList.remove('hidden');
  searchBar.classList.add('hidden');
  contactInformation.classList.add('hidden');
};

const searchDisplay = () => {
  searchBar.classList.remove('hidden');
  booksList.classList.add('hidden');
  contactInformation.classList.add('hidden');
};

const displayContact = () => {
  contactInformation.classList.remove('hidden');
  searchBar.classList.add('hidden');
  booksList.classList.add('hidden');
};

export {
  booksList, searchBar, contactInformation, booksDisplay, searchDisplay, displayContact,
};

window.addEventListener('load', booksDisplay);

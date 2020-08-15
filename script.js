console.log('it works');
const books = [{
        title: 'The boy in the stripped pyjamas',
        genre: 'innocent sotry',
        author: 'John boyne',
        pages: 215,
        id: Date.now(),
    },
    {
        title: 'Harry Potter and the Philosopher Stone',
        genre: 'Fantasy',
        author: 'JK Rowling',
        pages: 323,
        id: Date.now(),
    },
    {
        title: 'Pachinko',
        genre: 'Fiction',
        author: 'Min Jin Lee',
        pages: 496,
        id: Date.now(),
    },
    {
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        pages: 400,
        id: Date.now(),
    }
];

// grab the inputs
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#page');
const gnereInput = document.querySelector('#genre');
const statusInput = document.querySelector('#read-status');


//  map through the array to show the list of existing books
let spreadBook = [...books];
const bookList = document.querySelector('table'); // the table

function showList() {
    const html = spreadBook.map(book => {
        return `
        <tr id="book-lists">
          <td id="title-text">${book.title}</td>
          <td id="author-text">${book.author}</td>
          <td id="genre-text">${book.genre}</td>
          <td id="page-number">${book.pages}</td>
          <td id="read-status">
              <label for="checkbox"></label>
              <input type="checkbox" name="checkbox" id="checkbox">
          </td>
          <td id="delete"><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z" fill="#747474"/>
              </svg>
          </td> 
        </tr>
  `;
    });
    // add it to the DOM
    bookList.insertAdjacentHTML('beforeend', html.join(''));

}
showList();

// grab add button and listen for the click to add a new book
const myForm = document.querySelector('form');
const addButton = document.querySelector('#submit');
let myBook = [];
addButton.addEventListener('click', event => {
    event.preventDefault();
    //create the new object and generate in an array
    myBook = {
            title: `${titleInput.title}`,
            id: Date.now(),
            author: `${authorInput.value}`,
            genre: `${gnereInput.value}`,
            pages: `${pagesInput.value}`,
        }
        // push into the array
    spreadBook.push(myBook);
    console.log(spreadBook);
    addNewBook();
    myForm.reset();
});

// add to local storage
const saveToLocalStorage = () => {
    console.info('Store items from local storage');
    const lsItems = JSON.parse(localStorage.getItem('items'));
    console.log(lsItems);
    if (lsItems) {
        myBook.push(...lsItems);
    }
    spreadBook.dispatchEvent(new CustomEvent('itemUpdate'));
};
spreadBook.addEventListener('itemUpdate', saveToLocalStorage);


// generate the new book lists
function addNewBook() {
    // call all inputs
    const newBook = `
        <tr id="book-lists">
          <td id="title-text">${titleInput.value}</td>
          <td id="author-text">${authorInput.value}</td>
          <td id="genre-text">${gnereInput.value}</td>
          <td id="page-number">${pagesInput.value}</td>
          <td id="read-status">
              <label for="checkbox"></label>
              <input type="checkbox" name="checkbox" id="checkbox">
          </td>
          <td id="delete"><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z" fill="#747474"/>
              </svg>
          </td> 
        </tr>
  `;
    bookList.insertAdjacentHTML('beforeend', newBook);
    window.localStorage.setItem('user', JSON.stringify(newBook));
}


// grab checkbox
const checkboxes = document.querySelectorAll('#checkbox');

// function handleCheckbox() {
//     const statusInput = document.querySelector('#status');
//     if (checkboxes.checked) {
//         statusInput.textContent = 'read';
//     }
// }

// handle checkboxes
// window.addEventListener('change', event => {
//     event.preventDefault();
//     if (event.target.matches('#checkbox')) {
//         // let array = [...spreadBook]
//         if (checkboxes.checked) {
//             statusInput.value = 'read';
//         }
//     }
// });

// grab the icon delete
const iconDelete = document.querySelector('#delete');
// listen for it
window.addEventListener('click', event => {
    const myBookList = event.target.closest('#book-lists');
    if (event.target.matches('#delete')) {
        myBookList.remove();
    }
});
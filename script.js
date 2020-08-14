console.log('it works');
const books = [{
        title: 'The boy in the stripped pyjamas',
        genre: 'inoncent sotry',
        author: 'John boyne',
        pages: 215,
    },
    {
        title: 'Harry Potter and the Philosopher Stone',
        genre: 'Fantasy',
        author: 'JK Rowling',
        pages: 323,

    },
    {
        title: 'Pachinko',
        genre: 'Fiction',
        author: 'Min Jin Lee',
        pages: 496,
    },
    {
        title: 'Educated',
        author: 'Tara Westover',
        genre: 'Memoir',
        pages: 400,
    }
];

// grab the inputs
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#page');
const gnereInput = document.querySelector('#genre');


//  map through the array to show the list of existing books
const bookList = document.querySelector('table'); // the table

function showList() {
    const html = books.map(book => {
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
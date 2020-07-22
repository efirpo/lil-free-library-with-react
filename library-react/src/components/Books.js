import React from 'react';
import BookDetail from "./BookDetail";

function Books(props) {
  let listVisible;
  if (props.books) {
    listVisible = (props.books.books).map((book, index) => {
      return <BookDetail title={book.title} author={book.author} condition={book.condition} available={book.available} id={book.bookId} key={book.bookId} />
    })
  }

  return (
    <React.Fragment>
      <p>Test</p>
      {listVisible}
    </React.Fragment>
  )
}
export default Books
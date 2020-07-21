import React from 'react';

function Books(props) {
  let listVisible;
  if (props.books) {
    listVisible = (props.books.books).map((book, index) => {
      return <li>{index}. {book.title}, {book.author}</li>
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
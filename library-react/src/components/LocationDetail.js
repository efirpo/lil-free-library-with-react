import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function LocationDetail(props) {
  const [theseJoins, makeJoins] = useState(null)
  const [showDetail, showOtherDetails] = useState(false);

  useEffect(() => {
    makeJoins(props.joins.joins.filter(e => e.locationId == props.id))

  }, [])

  let joinsDetail;
  let joinsTitle;

  if (showDetail) {
    let joinIds = theseJoins.map((book) => {
      return book.bookId
    })
    let books = () => {
      return props.books.books.filter((book) => {
        for (let i = 0; i <= joinIds.length; i++) {
          if (book.bookId == joinIds[i]) {
            return book
          }
        }
      })
    }
    joinsTitle = <h3>Books Available:</h3>
    joinsDetail = books().map(book => {
      return <li>{book.title}, by {book.author}</li>
    })
  }
  return (
    <React.Fragment>
      <div onClick={() => showOtherDetails(!showDetail)}>
        <h3>{props.name}</h3>
        <p>{props.address}</p>

        {joinsTitle}
        {joinsDetail}

      </div>

    </React.Fragment>
  )

}
const mapStateToProps = state => ({
  joins: state.joins,
  books: state.books
})

export default connect(mapStateToProps)(LocationDetail)
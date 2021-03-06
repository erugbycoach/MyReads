import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



// Utilize a container component to display the home page

const Home = props => {
    return(
        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads Bookshelf</h1>
            </div>
          </div>
            <BookShelf books={props.books}
              updateBook={ props.updateBook } />
          <div className="open-search">
            <Link to="/searchbook">Add a book</Link>
          </div>
        </div>
      )
}


export default Home
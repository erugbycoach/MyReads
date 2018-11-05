import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {

    state = {
        shelfName: [
            {id: 'currentlyReading',
            title: 'Currently Reading'},
            {id: 'wantToRead',
            title: 'Want To Read'},
            {id: 'read',
            title: 'Read'}
        ]
    }

    render() {
        return(
            
            <div>
                {this.state.shelfName.map(shelf => (
                    <div key={shelf.id} className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books.filter(book => (book.shelf === shelf.id)).map(book =>
                                    <li key={book.id}>
                                        <Book 
                                            book={book}
                                            updateBook={this.props.updateBook}
                                        />
                                        
                                    </li>
                                    
                                )}
                                  
                            </ol>
                        </div>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default BookShelf

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as BooksAPI from './utils/BooksAPI';
import Book from './Book';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      shelf: {
        currentlyReading: [],
        wantToRead: [],
        read: []
      }
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      for (let i in books) {
        if (books[i].shelf === 'currentlyReading') {
          this.state.shelf.currentlyReading.push(books[i].id);
        } else if (books[i].shelf === 'wantToRead') {
          this.state.shelf.wantToRead.push(books[i].id);
        } else {
          this.state.shelf.read.push(books[i].id);
        }
      }
      // Validate the state is set correctly
      // console.log(this.state)
    })
  }

  

  
  
  render() {
    return (
      <div className="App">
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                          <Book />
                          <div className="book-title">To Kill a Mockingbird</div>
                          <div className="book-authors">Harper Lee</div>
                        
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import * as BooksAPI from './utils/BooksAPI';
import Home from './Home';
import { Route } from 'react-router-dom';
import SearchBook from './SearchBook';

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
      // Set the shelf state for each returned book
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

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      this.setState({ shelf: books});
      BooksAPI.getAll().then((book) => {
        this.setState({ books: book});
      });
    })
  }

  render() {
    return (
      <div>
        
        <Route exact path="/" render={() =>
          <Home
           books={this.state.books}
           updateBook={ this.update }
           />
        } />
        <Route path="/searchbook"  render={() =>(
        <SearchBook
         books={this.state.books }
         shelves={this.state.shelf}
         updateBook={(book, shelf) =>{
           this.update(book, shelf)
        }}
          />)}
        />
        
      </div>
    )
  }
}

export default App

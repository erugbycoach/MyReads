import React, { Component } from 'react';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf: this.props.book.shelf
        }
    }

    handleOnChange = (change) => {
        change.preventDefault();
        this.props.book.shelf = change.target.value;
        if (this.props.updateBook) {
            this.props.updateBook(this.props.book, this.props.book.shelf)
        }
    }

    render() {

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={this.state.shelf} 
                            onChange={this.handleOnChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                
                </div>
                </div>
            </div>
        )
    }

}


export default Book
import React, { Component } from 'react';
import './App.css';


// singleBook should get a book object as one of it's props
class SingleBookView extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    // need to make sure this location shim shame actually exists
    if(this.props.location.state) {
      this.state = {book:this.props.location.state.book }
    }
    else {
      this.state = {book:{name:'dunno', publish_date:'prehistory', subjects:'subjective',
      title:'god it all broke',
      openlibrary_medcover_url: "../images/lincoln-inaug-bible.jpg"
}}
    }

  }
  render(target) {
    console.log(this)
    let booksie = this.state.book;
    return (
      <div className="singleBookDiv">
        <div className="singleBookDesc">
          <h3>
            {this.state.book.title}
          </h3>
          <div>
            <span className="bookDescLabel">Author(s): </span>{this.state.book.authors}
          </div>
          <div>
            <span className="bookDescLabel">Published: </span>
            {booksie.publish_date}
          </div>
          <div>
            <span className="bookDescLabel">Subjects: </span>
            {booksie.subjects}
          </div>
          <div>
            <span className="bookDescLabel">Page Count: </span>
            {booksie.number_of_pages}
          </div>
        </div>
        <div className="singleBookCoverDiv">
          <img src={booksie.openlibrary_medcover_url}>
          </img>
        </div>
      </div>

    )
  }
}


export default SingleBookView;
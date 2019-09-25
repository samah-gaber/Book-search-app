import React from 'react';
import { connect } from 'react-redux';
import SingleBook from './SingleBook';
import Container from 'react-bootstrap/Container';

const BooksList = ({booksList}) => {
    return (
        <Container>
            {   
                booksList && booksList.length > 0 ? booksList.map(
                    book => <SingleBook key={book.id} book={book}/>
                ) : null
            }
            
        </Container>
    );
};

const mapStateToProps = state => ({
    booksList: state.books.books
});

export default connect( mapStateToProps )( BooksList );

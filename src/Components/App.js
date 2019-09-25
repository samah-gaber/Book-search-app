import React from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from './SearchBar';
import BooksList from './Booklist';

const App = () => {
    return (
        <Container>
            <div>
                <SearchBar />
                <BooksList />
            </div>
        </Container>
    )
}

export default App;

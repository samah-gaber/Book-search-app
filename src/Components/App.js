import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import SearchBar from './SearchBar';
import BooksList from './Booklist';

const App = () => {
    return (
        <Container>
            <div>
                <Header />
                <SearchBar />
                <BooksList />
            </div>
        </Container>
    )
}

export default App;

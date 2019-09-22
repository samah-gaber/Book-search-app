import React from 'react';
import { connect } from 'react-redux';
import { searchBooksSaga } from '../Redux/Actions/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class SearchBar extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            bookSearchQuery: ''
        };
    };

    onSearchInputChange = event => {
        this.setState({
            bookSearchQuery: event.target.value
        });
    };

    onSubmit = event => {
        event.preventDefault();
        const query = this.state.bookSearchQuery;
        this.props.searchBooksSaga( query );
    }

    render () {
        return (
            <Container>
                <Form onSubmit={this.onSubmit} style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Row>
                        <Col md={10}>
                            <Form.Group controlId="formBasicEmail">
                                <Row>
                                    <Col md={2}>
                                        <Form.Label>Enter book name</Form.Label>
                                    </Col>
                                    <Col md={10}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Enter book name"
                                            onChange={this.onSearchInputChange}
                                            value={this.state.bookSearchQuery}
                                            />
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Col>
                    </Row>  
                </Form>
            </Container>
        );
    };
};

export default connect(null, { searchBooksSaga })(SearchBar);
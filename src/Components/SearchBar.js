import React from 'react';
import { connect } from 'react-redux';
import { searchBooksSaga } from '../Redux/Actions/index';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


// using native form
// ==================
// class SearchBar extends React.Component {

//     constructor(props){
//         super(props);
//         this.state={
//             searchQuery: ''
//         }
//     };

//     onSubmit = event => {
//         event.preventDefault();
//         this.props.searchBooksSaga( this.state.searchQuery );
//     }

//     onInputChange = event => {
//         this.setState({
//             searchQuery: event.target.value
//         });
//     };

//     render () {
//         return (
//             <Container>
//                 <Form onSubmit={this.onSubmit} style={{marginTop: '30px', marginBottom: '30px'}}>
//                     <Row>
//                         <Col md={10}>
//                        <Form.Group controlId="formBasicEmail">
//                             <Row>
//                                 <Col md={2}>
//                                     <Form.Label>Enter book name</Form.Label>
//                                 </Col>
//                                 <Col md={10}>
//                                     <Form.Control 
//                                         type="text" 
//                                         placeholder="Enter book name"
//                                         onChange={this.onInputChange}
//                                         value={this.state.searchQuery}
//                                         />
//                                 </Col>
//                             </Row>
//                         </Form.Group>
//                         </Col>
//                         <Col md={2}>
//                             <Button variant="primary" type="submit">
//                                 Search
//                             </Button>
//                         </Col>
//                     </Row>  
//                 </Form>
//             </Container>
//         );
//     };


// };

// export default connect(null, { searchBooksSaga })(SearchBar);

// using redux form
// ====================
class SearchBar extends React.Component {

    onSubmit = ({bookSearch}) => {
        this.props.searchBooksSaga( bookSearch );
    }

    renderSearchInput = ({input}) => {
        return (
                <Form.Group controlId="formBasicEmail">
                    <Row>
                        <Col md={2}>
                            <Form.Label>Enter book name</Form.Label>
                        </Col>
                        <Col md={10}>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter book name"
                                onChange={input.onChange}
                                value={input.value}
                                />
                        </Col>
                    </Row>
                </Form.Group>
        )
    }

    render () {
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Form onSubmit={handleSubmit(this.onSubmit)} style={{marginTop: '30px', marginBottom: '30px'}}>
                    <Row>
                        <Col md={10}>
                            <Field name='bookSearch' component={this.renderSearchInput}/>
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

const reduxFormComp = reduxForm({
    form: 'SearchForm'
})(SearchBar);

export default connect(null, { searchBooksSaga })(reduxFormComp);
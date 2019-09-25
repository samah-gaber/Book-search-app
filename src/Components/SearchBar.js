import React from 'react';
import { connect } from 'react-redux';
import { searchBooksSaga } from '../Redux/Actions/index';
import { Field, reduxForm } from 'redux-form';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import background1 from '../assets/images/background1.jpg';

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
                            <Form.Control 
                                type="text" 
                                placeholder="Enter book name"
                                onChange={input.onChange}
                                value={input.value}
                                style={this.inputStyle}
                                />
                    </Row>
                </Form.Group>
        )
    }

    //style
    // =======

    formStyle = {
        backgroundImage: "url(" + background1 + ")",
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh',
    marginBottom: '50px'
    };
    
    outerRowStyle = {
        height: '100%', 
        alignItems: 'center'
    };

    innerRowStyle = {
        justifyContent: 'center'
    };

    textAlign = {
        textAlign: 'center'
    };

    justifyContent = {
        justifyContent: 'center'
    };

    labelStyle = {
        fontSize: '20px',
        marginBottom: '40px'
    };

    titleStyle = {
        color: '#a95780',
        fontWeight: 'bold',
        fontSize: '50px'
    };

    btnStyle = {
        backgroundColor: '#a95780',
        border: 'none',
        borderRadius: '0 5px 5px 0',
        padding: '7px 20px',
        marginLeft: '-100px'
    };

    inputStyle = {
        marginLeft: '90px'
    };

    render () {
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Form onSubmit={handleSubmit(this.onSubmit)} style={this.formStyle}>
                    <Row style={this.outerRowStyle}>
                        <Col md={12}>
                            <Row style={this.innerRowStyle}>
                                <Col md={6} style={this.textAlign}>
                                    <h1 style={this.titleStyle}>The Book Thief</h1>
                                    <Form.Label style={this.labelStyle}>Your favourite book is one click away</Form.Label>
                                </Col>
                            </Row>  
                            <Row style={this.justifyContent}>
                                <Col md={6}>
                                    <Field name='bookSearch' component={this.renderSearchInput}/>
                                </Col>
                                <Col md={1}>
                                    <Button style={this.btnStyle} type="submit">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
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
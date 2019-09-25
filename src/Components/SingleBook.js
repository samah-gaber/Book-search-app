import React from 'react';
import Media from 'react-bootstrap/Media';

const SignleBook = props => {
    const { volumeInfo, accessInfo, saleInfo } = props.book;
    const { title, authors, imageLinks } = volumeInfo;
    const { epub, pdf, webReaderLink } = accessInfo;
    const { buyLink } = saleInfo;

    // style 
    // ========

    const bookTitleStyle = {
        color: '#a95780'
    };

    const anchorStyle = {
        marginRight: '20px'
    }
    
    return (
        <Media style={{marginBottom: '20px'}}>
            <img
                className="mr-3"
                src={imageLinks.thumbnail ? imageLinks.thumbnail : ''}
                alt="book cover photo"
            />
            <Media.Body>
                <h5 style={bookTitleStyle}>{ title }</h5>
                <p> by 
                    {   authors ? authors.map(
                            author => <span key={author} > {author}</span>
                        ) : <span> unknown author</span> 
                    }
                </p>
                <div className='download-links'>
                    {
                        epub.isAvailable ? 
                            pdf.downloadLink ? 
                            <a href={epub.downloadLink} style={anchorStyle}>Download epub</a>:
                            <a href={epub.acsTokenLink} style={anchorStyle}>Download epub</a> :
                        null
                    }
                    {
                        pdf.isAvailable ? 
                            pdf.downloadLink ? 
                            <a href={pdf.downloadLink} style={anchorStyle}>Download pdf</a> : 
                            <a href={pdf.acsTokenLink} style={anchorStyle}>Download pdf</a> :
                         null
                    }
                    {
                        webReaderLink ? 
                        <a href={webReaderLink} style={anchorStyle}>Read Online</a>
                        : null
                    }
                    {
                        buyLink ? 
                        <a href={buyLink} style={anchorStyle}>Buy Now</a>
                        : null
                    }
                </div>
            </Media.Body>
        </Media>
    );
};

export default SignleBook;
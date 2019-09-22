import React from 'react';
import Media from 'react-bootstrap/Media';

const SignleBook = props => {
    const { volumeInfo, accessInfo, saleInfo } = props.book;
    const { title, authors, imageLinks } = volumeInfo;
    const { epub, pdf, webReaderLink } = accessInfo;
    const { buyLink } = saleInfo;
    
    return (
        <Media style={{marginBottom: '20px'}}>
            <img
                className="mr-3"
                src={imageLinks.thumbnail ? imageLinks.thumbnail : ''}
                alt="book cover photo"
            />
            <Media.Body>
                <h5>{ title }</h5>
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
                            <div><a href={epub.downloadLink} >Download epub</a></div> :
                            <div><a href={epub.acsTokenLink} >Download epub</a></div> :
                        null
                    }
                    {
                        pdf.isAvailable ? 
                            pdf.downloadLink ? 
                            <div><a href={pdf.downloadLink}>Download pdf</a></div> : 
                            <div><a href={pdf.acsTokenLink}>Download pdf</a></div> :
                         null
                    }
                    {
                        webReaderLink ? 
                        <div><a href={webReaderLink}>Read Online</a></div>
                        : null
                    }
                    {
                        buyLink ? 
                        <div><a href={buyLink}>Buy Now</a></div>
                        : null
                    }
                </div>
            </Media.Body>
        </Media>
    );
};

export default SignleBook;
import React from 'react';

import { getBookData } from '../utliity/storage';
import AllReadBook from '../AllReadBook/AllReadBook';



const BookList = () => {
  const bookRead=getBookData()
  console.log(bookRead)
    return (
     <div className='space-y-8'>

      {
        bookRead.map(book=><AllReadBook 
          book={book}
          key={book.bookId}></AllReadBook>)
       }
     </div>
    );
};

export default BookList;
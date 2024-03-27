import React from 'react';
import { getBookWishlist } from '../utliity/wishlist';
import AllReadBook from '../AllReadBook/AllReadBook';

const Wishlist = () => {
    const wishlistData=getBookWishlist()
    return (
        <div>
            {
        wishlistData.map(book=><AllReadBook 
          book={book}
          key={book.bookId}></AllReadBook>)
       }
        </div>
    );
};

export default Wishlist;
import { Typography } from '@material-tailwind/react';
import useBooksData from '../Hooks/useBooksData';
import BooKCard from './../BooKCard/BooKCard';
const BooksCard = () => {
    const{books ,loading}=useBooksData()

    
    return (
        <div className='mt-16'>
                  <Typography className='text-center' variant="h1">Books</Typography>
                 <div className='grid grid-cols-3 gap-6 '>
                 {
                    books?.map(book=><BooKCard 
                      key={book.bookId}
                      book={book}
                      ></BooKCard>)
                  }
                 </div>
        </div>
    );
};

export default BooksCard;
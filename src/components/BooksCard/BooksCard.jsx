import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

const BooksCard = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        
    },[])
    return (
        <div className='mt-16'>
                  <Typography className='text-center' variant="h1">Books</Typography>
        </div>
    );
};

export default BooksCard;
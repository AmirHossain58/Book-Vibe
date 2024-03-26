import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const BooKCard = ({book}) => {
   const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
    return (
       <Link to={`/booksDetails/${bookId}`}>
        <Card className="mt-6 ">
      <CardHeader color="" className="relative h-60 flex justify-center bg-[#eceff1] py-2">
        <img
        className='rounded-xl'
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <div className=' flex gap-10 text-green-700 font-bold'>
            <p className='bg-[#23BE0A0D] p-2 rounded-2xl '>{tags[0]}</p>
        <p className='bg-[#23BE0A0D] p-2 rounded-2xl'>{tags[1]}</p></div>
        <Typography variant="h5" color="blue-gray" className="mb-2 border-b-2 p-3 border-dashed">
          {bookName}
        </Typography>
       <p>By : {author}</p>
      </CardBody>
      <CardFooter className="pt-0">
       <div className='flex justify-between'>
        <p>{category}</p>
        <p className='flex gap-2'>{rating} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          className="w-6 h-6 cursor-pointer">
          <path fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"></path>
        </svg></p>
       </div>
      </CardFooter>
    </Card>
       </Link>
    );
};

export default BooKCard;
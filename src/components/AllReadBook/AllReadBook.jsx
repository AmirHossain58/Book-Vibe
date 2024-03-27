import React from 'react';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';
const AllReadBook = ({book}) => {


    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book
    return (
        <div>
        <Card className="w-full border max-w-[70rem] flex-col items-center lg:flex-row">
  <CardHeader
    shadow={false}
    floated={false}
    className="m-0 lg:w-1/5 shrink-0 rounded p-5 bg-[#1313130D]"
  >
    <img
      src={image}
      alt="card-image"
      className="h-full lg:w-full rounded-lg object-cover"
    />
  </CardHeader>
  <CardBody>
    <Typography variant="h4" color="blue-gray" className="mb-2">
      {bookName}
    </Typography>
    <Typography variant="h6" color="gray" className="mb-4 uppercase">
      By: {author}
    </Typography>
    <Typography variant="h4" color="blue-gray" className="mb-2">
      <div className='flex flex-col lg:flex-row justify-around gap-4'>
        <span>Tag</span>
        <span className='text-green-700'>#{tags[0]}</span>
        <span className='text-green-700'>#{tags[1]}</span>
        <span className='flex gap-2'><CiLocationOn /> Year of Publishing: {yearOfPublishing}</span>
      </div>
    </Typography>
    <Typography color="gray" className="mb-8 font-normal">
        <div className=' flex flex-col lg:flex-row items-center gap-5'>
            <span className='flex lg:items-center gap-1'><IoIosPersonAdd />Publisher: {publisher}</span>
            <span className='flex items-center gap-1'><IoBookOutline />Page {totalPages}</span>
        </div>
    </Typography>
    <div className='flex flex-col lg:flex-row gap-4'>
    <Button color='blue' variant="outlined" className="rounded-full border-0 bg-[#328EFF26]">
    Category: {category}
  </Button> 
  <Button color='orange' variant="outlined" className="rounded-full border-0 bg-[#FFAC3326]">
  Rating: {rating}
  </Button >
    <Link to={`/booksDetails/${bookId}`}>
    <Button color="green" className='rounded-full'>    View Details</Button>
    </Link>
    </div>

  </CardBody>
</Card>
    </div>
    );
};

export default AllReadBook;
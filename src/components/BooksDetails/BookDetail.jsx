import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useBooksData from './../Hooks/useBooksData';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Deatails from '../Deatails';
import { saveBookDAta } from '../utliity/storage';

const BookDetail = () => {
  const [read ,setRead]=useState(true)
  const [book,setBook]=useState({})
  const{books ,loading}=useBooksData()
  const allBook=useLoaderData()
  // console.log(allBook);
    const{id}=useParams()
    const idNum=parseInt(id)
   console.log(idNum);
    useEffect(()=>{
      if(allBook){
        // const book2=allBook.filter(book=>idNum.includes(book.bookId))
        const book2=allBook.find(b=>b.bookId===idNum)
        setBook(book2);
        console.log(book2);
      }
      console.log(book);
       
    },[idNum,allBook])
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book||{}
    const handleRead=()=>{

      const book2=allBook.find(b=>b.bookId===idNum)
      setBook(book2);
      if(read){
        saveBookDAta(book2)
        toast("Book Added to Read List");
        setRead(false)
      }else{
        toast.error("You Have Already Read this Book");
      }
    }
    const handleWishlist=()=>{
      if(read){

        toast("Book Added to WishlistList ");
      }else{
        toast.error("You Have Already Read this Book");
      }
    }
    return (
      <Card className="w-full flex-row mt-14">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-3/6 bg-[#1313130D] p-16 shrink-0 mr-12 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="black" className="mb-4 uppercase ">
        {bookName}
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
        By : {author}
        </Typography>
        <div className="divider"></div>
        <p className='text-lg font-semibold'>
        {category}
        </p>
        <div className="divider"></div>
        <Typography color="gray" className="mb-8 font-normal">Review : {review}
        <div className='flex justify-around font-bold'>
        Tag
        
        <p className='text-green-700'>#{tags}</p>
        {/* <p className='text-green-700'>#{tags}</p> */}
        </div>
        <div className="divider"></div>
        <div className='space-y-2'>
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Number of Pages: </p>
          <p className='font-bold text-black'>{totalPages}</p>
          </div>
         <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Publisher: </p>
          <p className='font-bold text-black'>{publisher}</p>
          </div>  
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Year of Publishing: </p>
          <p className='font-bold text-black'>{yearOfPublishing}</p>
          </div>
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Year of Publishing: </p>
          <p className='font-bold text-black'>{rating}</p>
          </div>
        </div>
       
        </Typography>
  
          <div className='flex gap-2'>
          <Link to={''}>
          <Button onClick={handleRead} variant="text" >
          Read
          </Button>
          </Link>
          <Link to={''}>
          <Button onClick={handleWishlist} color="blue"> Wishlist</Button>
          </Link>
          
          </div>
      </CardBody>
      <ToastContainer />
    </Card>
    );
};

export default BookDetail;
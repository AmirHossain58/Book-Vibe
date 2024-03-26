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

const BookDetail = () => {
  const [read ,setRead]=useState(true)
  const [book,setBook]=useState()
  const{books ,loading}=useBooksData()
  const allBook=useLoaderData()
  console.log(allBook);
    const{id}=useParams()
   
    useEffect(()=>{
      if(books){
        const book2=allBook.filter(book=>id.includes(book.bookId))
        setBook(book2);
        // console.log(book2);
      }
      console.log(book);
       
    },[id,books])
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book||{}
    const handleRead=()=>{


      if(read){

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
        The Catcher in the Rye
        </Typography>
        <Typography variant="h6" color="blue-gray" className="mb-2">
        By : Awlad Hossain
        </Typography>
        <p>
        Fiction
        </p>
        <Typography color="gray" className="mb-8 font-normal">Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
        <div className='flex justify-between font-bold'>
        Tag
        <p className='text-green-700'>#Young Adult</p>
        <p className='text-green-700'>#Young Adult</p>
        </div>
        <div className="divider"></div>
        <div className='space-y-2'>
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Number of Pages: </p>
          <p className='font-bold text-black'>281</p>
          </div>
         <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Number of Pages: </p>
          <p className='font-bold text-black'>281</p>
          </div>  
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Number of Pages: </p>
          <p className='font-bold text-black'>281</p>
          </div>
        <div className=' flex gap-16 '>
          <p className='text-[#131313B3]'>Number of Pages: </p>
          <p className='font-bold text-black'>281</p>
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
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
import { saveBookDAta } from '../utliity/storage';
import { saveBookWishlist } from '../utliity/wishlist';
import { useEffect, useState } from 'react';

const BookDetail = () => {
  const [read ,setRead]=useState(true)
  const [book,setBook]=useState({})
  const allBook=useLoaderData()
    const{id}=useParams()
    const idNum=parseInt(id)
    useEffect(()=>{
      if(allBook.length>0){
        const book2=allBook?.find(b=>b.bookId===idNum)
        setBook(book2);     
      }
       
    },[idNum,allBook])
    const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book||{}
    const handleRead=()=>{

      // const book2=allBook?.find(b=>b.bookId===idNum)
      // setBook(book);
      if(read){
        saveBookDAta(book)
        toast("Book Added to Read List");
        setRead(false)
      }else{
        toast.error("You Have Already Read this Book");
      }
    }
    const handleWishlist=()=>{
      // const book2=allBook?.find(b=>b.bookId===idNum)
      if(read){
          saveBookWishlist(book)
        toast("Book Added to WishlistList ");
      }else{
        toast.error("You Have Already Read this Book");
      }
    }
    return (
      <Card className="w-full flex-col lg:flex-row mt-14">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 lg:w-3/6 bg-[#1313130D] lg:p-16 shrink-0 mr-12 rounded-r-none flex justify-center items-center "
      >
        <img
          src={image}
          alt="card-image"
          className="h-full rounded-xl lg:w-full bg-cover object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="black" className="mb-4 uppercase ">
        {bookName||''}
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
        </Typography>
        <div className='flex justify-around font-bold'>
        Tag
        <p className='text-green-700'>#{tags}</p>
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
       
  
          <div className='flex gap-2'>
          <Link>
          <Button onClick={handleRead} variant="text" >
          Read
          </Button>
          </Link>
          <Link>
          <Button onClick={handleWishlist} color="blue"> Wishlist</Button>
          </Link>
          
          </div>
      </CardBody>
      <ToastContainer />
    </Card>
    );
};

export default BookDetail;
import { Button, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { GoChevronDown } from "react-icons/go";

import BookList from '../BookList/BookList';
import Wishlist from '../Wishlist/Wishlist';
import { getBookData } from '../utliity/storage';
import AllReadBook from '../AllReadBook/AllReadBook';


const ListedBooks = () => {
    const [bookRead,setBookRead]=useState([])
    const bookReadAll=getBookData()
    const[click ,setclick]=useState(false)
    const[sort ,setSort]=useState()
useEffect(()=>{

    if(bookReadAll.length>0){
        setBookRead(bookReadAll)
    }
},[])
    const handleSortBook=(sort='all')=>{
        if(sort==='all'){
            setBookRead(bookReadAll)
        }
        else if(sort==='Rating'){
            const sortByRating = bookReadAll.slice().sort((a, b) => b.rating - a.rating)
            setBookRead(sortByRating)
        }else if (sort==='Number of pages'){
            const sortByPages = bookReadAll.slice().sort((a, b) => b.totalPages - a.totalPages);
            setBookRead(sortByPages)
        }
        else if (sort==='Publisher year'){
            const sortByPublishingYear = bookReadAll.slice().sort((a, b) => b.yearOfPublishing- a.yearOfPublishing
);
            setBookRead(sortByPublishingYear)

        }
    }
    // setBookRead(bookReadAll)

    return (
        <>
        <div  className='h-[100px] flex justify-center items-center bg-[#1313130D] rounded-lg my-10'>
        <Typography className='text-center ' variant="h1">Books</Typography>
        </div>
        <div className='flex flex-col items-center justify-center  rounded-xl pb-24 relative'>
       <div> <Button color='green' className='flex gap-3 mb-2' onClick={()=>setclick(!click)}>Sort By<GoChevronDown className='text-xl' /></Button></div>
        <div className={click?'inline':'hidden'}>
            <ul className={'bg-[#1313130D] absolute space-y-2 p-2 rounded-2xl text-center text-lg text-[#131313CC]'}>
            <li onClick={()=>handleSortBook('Rating')}>Rating</li>
            <li onClick={()=>handleSortBook('Number of pages')}>Number of pages</li>
            <li onClick={()=>handleSortBook('Publisher year')}>Publisher year</li>
        </ul></div>
        </div>

        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" checked  />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
           <div className='space-y-4'>
           {
               
               bookRead?.map(book=><AllReadBook 
                 book={book}
                 key={book.bookId}></AllReadBook>)
              
           }
           </div>
                </div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist"  />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">

                {
                    <Wishlist></Wishlist>
                }
            </div>

            </div>
        </>
    );
};

export default ListedBooks;
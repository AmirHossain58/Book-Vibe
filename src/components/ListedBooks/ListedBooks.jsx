import { Button, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { Link } from 'react-router-dom';

const ListedBooks = () => {
    const[click ,setclick]=useState(false)

    return (
        <>
        <div  className='h-[100px] flex justify-center items-center bg-[#1313130D] rounded-lg my-10'>
        <Typography className='text-center ' variant="h1">Books</Typography>
        </div>
        <div className='flex flex-col items-center justify-center  rounded-xl'>
       <div> <Button color='green' className='flex gap-3' onClick={()=>setclick(!click)}>Sort By<GoChevronDown className='text-xl' /></Button></div>
        <div className={click?'inline':'hidden'}>
            <ul className={'bg-[#1313130D] p-2 rounded-2xl text-center text-[#131313CC]'}>
            <li>Rating</li>
            <li>Number of pages</li>
            <li>Publisher year</li>
        </ul></div>
        </div>

        <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

            
            </div>
        </>
    );
};

export default ListedBooks;
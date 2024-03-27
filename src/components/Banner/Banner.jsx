import React from 'react';
import { Typography } from '@material-tailwind/react';
// import { Input } from 'postcss';

import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Banner = () => {
      return ( 
          <div className='lg:h-[400px] mt-16 bg-[#1313130D] rounded-2xl gap-20 flex flex-col-reverse lg:flex-row justify-center items-center'>

             <div className=''>
             <Typography variant="h2">Books to freshen <br /> up your bookshelf</Typography><br />
             <Link to={'/listedBooks'}>
             <Button className='lg:mt-6  mb-6' color='green' variant="gradient">View The List</Button>
             </Link>
             </div>
             <div className=' w-[350px]'><img className='bg-cover bg-no-repeat rounded-2xl h-[350px] w-[450px]' src="/public/stack-various-books-table.png" alt="" /></div>
          </div>
    );
};

export default Banner;
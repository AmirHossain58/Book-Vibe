import React from 'react';
import { Typography } from '@material-tailwind/react';
// import { Input } from 'postcss';

import { Button } from "@material-tailwind/react";
const Banner = () => {
      return ( 
          <div className='h-[400px] mt-16 bg-[#1313130D] rounded-2xl gap-20 flex justify-center items-center'>

             <div className=''>
             <Typography variant="h2">Books to freshen <br /> up your bookshelf</Typography><br />
             <Button className='mt-6 ' color='green' variant="gradient">View The List</Button>
             </div>
             <div className=' w-[350px]'><img className='bg-cover bg-no-repeat rounded-2xl h-[350px] w-[450px]' src="/public/stack-various-books-table.png" alt="" /></div>
          </div>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import { getBookData } from '../utliity/storage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]




const PagesToRead = () => {
    const [book ,setBook]=useState()
    const bookRead=getBookData()
    const data =bookRead.map(b=>[{name:b.bookName, pages:b.totalPages}]) 
    const data1=[].concat(...data)
    useEffect(()=>{
        setBook(data1)
    },[])
    return (
        <div className='mt-20 h-[300px] bg-[#13131308] py-10 flex  items-center justify-center rounded-2xl'>
<ResponsiveContainer width="100%" height="100%">
<BarChart data={book}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="pages" fill="#8884d8" barSize={30} />
  </BarChart>
  </ResponsiveContainer>

        </div>
    );
};

export default PagesToRead;
import React from 'react';
import { getBookData } from '../utliity/storage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}]

const bookRead=getBookData()
const {bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=bookRead;

const data =bookRead.map(b=>[{name:b.bookName, pages:b.totalPages}]) 
const data1=[].concat(...data)
console.log(data1);
// console.log(data);



const PagesToRead = () => {

    return (
        <div className='mt-20 bg-[#13131308] py-10 flex  items-center justify-center rounded-2xl'>

<BarChart width={400} height={300} data={data1}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="pages" fill="#8884d8" barSize={30} />
  </BarChart>


        </div>
    );
};

export default PagesToRead;
import{ useEffect, useState } from 'react';

const useBooksData = () => {
    const [books ,setBooks]=useState()
    const [loading ,setLoading]=useState(true)
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            const res=await fetch('/books.json')
            const data=await res.json()
            setBooks(data)
            setLoading(false)
        }
        fetchData()
    },[])
    // console.log(books);
    return {books ,loading}
};

export default useBooksData;
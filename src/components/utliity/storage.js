const getBookData=()=>{
const storedBook=localStorage.getItem('book-details')
if(storedBook){
    return JSON.parse(storedBook)
}
return []
}


const saveBookDAta=data=>{
const storedBook=getBookData()
const exists= storedBook.find(b=>b.bookId===data.bookId)
if(!exists){
    storedBook.push(data)
    localStorage.setItem('book-details',JSON.stringify(storedBook))
}
}
export {getBookData,saveBookDAta}
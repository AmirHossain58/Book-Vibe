const getBookWishlist=()=>{
    const storedBook=localStorage.getItem('Wishlist')
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return []
    }
    
    
    const saveBookWishlist=data=>{
    const storedBook=getBookWishlist()
    const exists= storedBook.find(b=>b.bookId===data.bookId)
    if(!exists){
        storedBook.push(data)
        localStorage.setItem('Wishlist',JSON.stringify(storedBook))
    }
    }
    export {getBookWishlist,saveBookWishlist}
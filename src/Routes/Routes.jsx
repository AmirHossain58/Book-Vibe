import { createBrowserRouter } from "react-router-dom";


import Root from "../components/Root";
import Home from "../Home/Home";
import PagesPagesToRead from "../components/PagesToRead/PagesToRead";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import BooksDetails from "../components/BooksDetails/BookDetail";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      // errorElement:<ErrorPage></ErrorPage>,
      children:[
        { 
            path: "/",
            element:<Home></Home> 
        },
        { 
            path: "/listedBooks",
            element:<ListedBooks></ListedBooks> 
        },
        { 
            path: "/pagesToRead",
            element:<PagesPagesToRead></PagesPagesToRead>
        },
        { 
            path: "/booksDetails/:id",
            element:<BooksDetails></BooksDetails>,
            loader:()=>fetch('/public/books.json')
        },
        
      ]
    },
    
  ]);
  export default router
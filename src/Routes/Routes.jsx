import { createBrowserRouter } from "react-router-dom";


import Root from "../components/Root";
import Home from "../Home/Home";
import PagesPagesToRead from "../components/PagesToRead/PagesToRead";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import BooksDetails from "../components/BooksDetails/BookDetail";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ContractUs from "../components/ContractUs/ContractUs";
import Pricing from "../components/Pricing/Pricing";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path: "/pagesToRead",
            element:<PagesPagesToRead></PagesPagesToRead>
        },
        { 
            path: "/contractUs",
            element:<ContractUs></ContractUs>
        },
        { 
            path: "/pricing",
            element:<Pricing></Pricing>
        },
        { 
            path: "/booksDetails/:id",
            element:<BooksDetails></BooksDetails>,
            loader:()=>fetch('/books.json')
        },
        
      ]
    },
    
  ]);
  export default router
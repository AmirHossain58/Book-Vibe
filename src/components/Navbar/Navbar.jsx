import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from 'react-router-dom';


function NavList() {
    return (
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink to={'/'} 
          // className="flex items-center hover:text-blue-500 transition-colors"
          className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-500 font-bold underline text-xl"
                        : isPending
                        ? "pending"
                        : "flex items-center hover:text-blue-500 transition-colors"
                    }
          >
            
          Home
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink to={'/listedBooks'} 
          className={({ isActive, isPending }) =>
          isActive
            ? "text-blue-500 font-bold underline text-xl"
            : isPending
            ? "pending"
            : "flex items-center hover:text-blue-500 transition-colors"
        }
          >
          Listed Books
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink to={'/pagesToRead'} 
          className={({ isActive, isPending }) =>
          isActive
            ? "text-blue-500 font-bold underline text-xl"
            : isPending
            ? "pending"
            : "flex items-center hover:text-blue-500 transition-colors"
        }
          >
          Pages to Read
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink to={'/pricing'} 
          className={({ isActive, isPending }) =>
          isActive
            ? "text-blue-500 font-bold underline text-xl"
            : isPending
            ? "pending"
            : "flex items-center hover:text-blue-500 transition-colors"
        }
          >
          Pricing
          </NavLink>
        </Typography>
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <NavLink to={'/contractUs'} 
          className={({ isActive, isPending }) =>
          isActive
            ? "text-blue-500 font-bold underline text-xl"
            : isPending
            ? "pending"
            : "flex items-center hover:text-blue-500 transition-colors"
        }
          >
          Contact Us
          </NavLink>
        </Typography>
      </ul>
    );
  }
const NavBar = () => {
   
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto  mt-12 px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <NavLink
          as="a"
          to={'/'}
          variant="h6"
          className="mr-4 text-3xl font-bold cursor-pointer py-1.5"
        >
         Book Vibe 
        </NavLink>
        <div className="hidden lg:flex">
          <NavList />
          <div className='ml-28 space-x-3'>
          <Button color='green' size="lg">Sign In</Button>
          <Button color='blue' size="lg">Sign Up</Button>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
    )
};

export default NavBar;
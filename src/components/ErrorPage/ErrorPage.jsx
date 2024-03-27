import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-5xl'>Oops! You seem to be lost.</h1>
            <p className='text-2xl'>Here is helpful links:</p>
            <Link to='/'><Button color='green'>Home</Button></Link>
            
        </div>
        </div>
    );
};

export default ErrorPage;
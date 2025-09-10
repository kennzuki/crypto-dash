import { Link } from "react-router";

const NotFoundPage = () => {
    return ( 
        <div className="">
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-2xl font-bold'>oops! the Page was Not Found or doesnt exist</p>
            <Link to={'/'}>Back to Home page</Link>
        </div>
     );
}
 
export default NotFoundPage;
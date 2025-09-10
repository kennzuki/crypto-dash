import { Link } from "react-router";

const NotFoundPage = () => {
    return ( 
        <div className="mx-auto flex flex-col items-center justify-center h-screen space-y-6">
            <h1 className='text-6xl font-bold'>404</h1>
            <p className='text-2xl font-bold'>oops! the Page was Not Found or doesnt exist</p>
            <Link className="text-blue-500 underline" to={'/'}>Click here to go back to Home page</Link>
        </div>
     );
}
 
export default NotFoundPage;
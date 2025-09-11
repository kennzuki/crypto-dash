import { BarLoader } from "react-spinners";

const Spinner = ({ color = "blue", size = "150" }) => {
    return ( 
        <div className="">
        <BarLoader color={color} size={size} cssOverride={{ display: "block", margin: "0 auto" }} aria-label="Loading..." />
        </div>
     );
}
 
export default Spinner;
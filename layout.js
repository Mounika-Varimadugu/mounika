import React from "react";
import {Outlet,Link} from "react-router-dom";

const Form = () => {
    return(
        <>
         <nav>
             <ol>
                 <li>
                    <Link to ="/Registration">Registration</Link>
                 </li>
                 <li>
                    <Link to ="Login">Login</Link>
                 </li>
                 <li>
                    <Link to ="*">Sign up</Link>
                 </li>
                </ol>
           </nav>
           <Outlet/>
        </>
    );
}
export default Form;
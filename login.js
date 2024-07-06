import React from "react";
function Login(){
  return(
          <fieldset>
            <h2>Login Form</h2>
            <hr/>
            <div>
              <input class="email" type="text" placeholder="Email"/><br/>
              <input  class="password" type="text" placeholder="Password"/><br/>
              <input class="mobile" type="text" placeholder="contact"/><br/>
              <button>login</button>
            </div>
         </fieldset>
        );
}
export default Login;
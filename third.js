import React from "react";
import {Component} from 'react';
class RegistrationForm extends React.Component{
    render(){
        return(
        <div class="main">
          <fieldset>
            <h1>Registration Form</h1>
            <hr/>
            <div class="fields">
                 <input class="fname" type="text" placeholder="First Name"></input><br></br>
                 <input class="lname" type="text" placeholder="Last Name"></input><br></br>
                 <input class="mname" type="text" placeholder="Mother Name"></input><br></br>
                 <input class="faname" type="text" placeholder="Father Name"></input><br></br>
                 <input class="email" type="text" placeholder="Email"></input><br></br>
                 <input class="password" type="text" placeholder="Password"></input><br></br>
                  <p class="mobileno">mobileno
                        <select name="contact" id="contact">
                        <option value="+91">+91</option>
                        <option value="+82">+82</option>
                        <option value="+65">+65</option>
                        </select>
                        <input class="number" type="number"></input>
                   </p>
                   <p class="course">course
                       <select name="branch" id="branch">
                       <option value="CSE">CSE</option>
                       <option value="EEE">EEE</option>
                       <option value="AIDS">AIDS</option>
                       </select>
                   </p>
                   <p class="DATE OF JOINING">DATE OF JOINING:
                      <input type="date"></input>
                  </p>
                    <p class="DATE OF LEAVING">DATE OF LEAVING:
                   </p>
                  <p class="gender">Gender:
                   <input class="fmale" type="radio" name="gender" value="Female"/>Female
                   <input class="male" type="radio" name="gender" value="male"/>male
                  </p>
                  <p class="COLLEGE">COLLEGE:
                    <select name="COLLEGES" id="COLLEGES">
                    <option value="AITS-RAJAMPET">AITS-RAJAMPET</option>
                  <option value="AITS-KADAPA">AITS-KADAPA</option>
                  <option value="AITS-MUDDANUR">AITS-MUDDANUR</option>
                    </select>
                  </p>
                  <p>
                    <input type="file"></input>
                  </p>
                  <button class="sub" onclick="location.href='https://aitsrajampet.ac.in/about';">SUBMIT</button>
                </div>
              </fieldset>
            </div>
        );
    }
}

export default RegistrationForm;
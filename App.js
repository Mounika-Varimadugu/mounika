//import logo from './images/img.jpg'
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './signup.js';
import Login from './login.js';
import Registerform from './registerform.js';
import Form from './layout.js'; 
import './signup.css';
function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Form />}>
          <Route index element={<Registerform/>}/>
          <Route path ='login' element={<Login />}/>
          <Route path ='*' element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;

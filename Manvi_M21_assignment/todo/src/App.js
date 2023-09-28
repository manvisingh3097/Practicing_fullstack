// import logo from './logo.svg';
import { useState } from 'react';
import {Routes , Route} from "react-router-dom"
import './App.css';
import LoginForm from "./components/Login";
import ToDolist from "./components/ToDolist";
import NotFound from './components/NotFound';
import InvalidAccess from './components/InvalidAccess';

function App() {
  

  const [loginstate , setloginstate] = useState(false); 
  return (
    <div className=''>
      <Routes>
            <Route path='/ToDolist' element={<ToDolist />}/>

            <Route path="/login" element={<LoginForm />} />             

            

            <Route path="/InvalidAccess" element={<InvalidAccess />} />
            <Route path="*" element={<NotFound />} />

      </Routes>

      {/* { !loginstate && <LoginForm  updateState={setloginstate}/>}
      { loginstate &&  <ToDolist/>} */}
    </div>
  );
}

export default App;

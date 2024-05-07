import './App.css';
import SignUpPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage'; 
import MainPage1 from './component/pages/MainPage1';
import MainPage2 from './component/pages/MainPage2';
import MainPage3 from './component/pages/MainPage3';
import SelectPage from './component/pages/SelectPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import BasicTodo from './component/todos/BasicTodo';

function App() {
  const [nameArr, setNameArr] = useState([]);
  const [idArr, setIdArr] = useState([]);
  const [pwArr, setPwArr] = useState([]);
  const [emailArr, setEmailArr] = useState([]);

  return(
    <BrowserRouter>
      <Routes>

        <Route 
        path='/login' 
        element={<LoginPage 
          idArr={idArr} 
          pwArr={pwArr} 
          />}
        />

        <Route 
        path='/signUp' 
        element={<SignUpPage 
          nameArr={nameArr} 
          idArr={idArr} 
          pwArr={pwArr} 
          emailArr={emailArr}
          setNameArr={setNameArr}
          setIdArr={setIdArr}
          setPwArr={setPwArr}
          setEmailArr={setEmailArr}
        />}
        />

        <Route path='/' element={<SelectPage/>}/>
        <Route path='/main2' element={<MainPage2/>}/>
        <Route path='/main3' element={<MainPage3/>}/>
        <Route path='/selectPage' element={<SelectPage/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;

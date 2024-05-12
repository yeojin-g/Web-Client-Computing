import './App.css';
import '../src/component/font.css';
import SignUpPage from './component/pages/SignupPage';
import LoginPage from './component/pages/LoginPage'; 
import MainPage1 from './component/pages/MainPage1';
import MainPage3 from './component/pages/MainPage3';
import InfoPage from './component/pages/InfoPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [nameArr, setNameArr] = useState([]);
  const [idArr, setIdArr] = useState([]);
  const [pwArr, setPwArr] = useState([]);
  const [emailArr, setEmailArr] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  return(
    <BrowserRouter>
      <Routes>

        <Route 
        path='/login' 
        element={<LoginPage 
          idArr={idArr} 
          pwArr={pwArr} 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
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

        <Route path='/' element={<MainPage1/>}/>
        <Route path='/main1' element={<MainPage1/>}/>
        <Route path='/main3' element={<MainPage3/>}/>
        <Route path='/info' element={<InfoPage
        nameArr={nameArr}
        idArr={idArr}
        pwArr={pwArr}
        emailArr={emailArr}
        setPwArr={setPwArr}
        currentUser={currentUser}
        />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

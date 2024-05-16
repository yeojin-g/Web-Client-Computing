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
  const [currentUser, setCurrentUser] = useState([]);

  return(
    <BrowserRouter>
      <Routes>
        <Route 
        path='/login' 
        element={<LoginPage 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />}
        />

        <Route 
        path='/signUp' 
         element={<SignUpPage 
        />}
        />

        <Route path='/' element={<MainPage1/>}/>
        <Route path='/main1' element={<MainPage1/>}/>
        <Route path='/main3' element={<MainPage3 currentUser={currentUser}/>}/>
        <Route path='/info' element={<InfoPage
        currentUser={currentUser}
        />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

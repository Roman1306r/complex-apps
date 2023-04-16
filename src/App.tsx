import './App.css';
import { useState } from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ErrorPage from './components/common/404/404';
import Password from './components/Password/Password';
import Products from "./components/Product/Products";
import BMI from "./components/BMI/BMI";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";
import TicTacToe from './components/TTT/TTT';




function App() {

  const [theme, setTheme] = useState('App')
  const [isLight, setIsLight] = useState(false)



  const changeThemeApp = () => {
    if(theme === 'App') {
      setTheme('App light')
      setIsLight(true)
    } else {
      setTheme('App')
      setIsLight(false)
    } 
  }






  return (
    <HashRouter>
      <div className={theme}>
        <Header changeThemeApp={changeThemeApp} isLight={isLight} />
        <Routes>
          <Route path='*' element={<ErrorPage  />} />
          <Route path='/' element={<Navigate to={'todolist'} />} />
          <Route path='todolist' element={<Main  />} />
          <Route path='password' element={<Password />} />
          <Route path='products' element={<Products />} />
          <Route path='bmi' element={<BMI />} />
          <Route path='timer' element={<Timer />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='tictac' element={<TicTacToe />} />
        </Routes>
      </div>
    </HashRouter>
  );
}






export default App;

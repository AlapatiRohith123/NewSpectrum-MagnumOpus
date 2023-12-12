import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav1';
import Nav2 from './components/Nav2';
import Nav3 from './components/Nav3';
import Sign_up from './components/Sign_up';
import Login_as from './components/Login_as';
import Login from './components/Login';
import Student from './components/Student';
import { Route, Routes, Router} from 'react-router-dom';
import UX from './components/UX';
import Tst from './components/Tst';
import UX2 from './components/UX2';
import Entrepreneur from './components/Entrepreneur';
import Post_problem from './components/Post_problem';
import My_ideas from './components/My_ideas';
import Business from './components/Business';
import Problems from './components/Problems';
import My_problems from './components/My_problems';
import Business_ideas from './components/Business_ideas';
import My_problems2 from './components/My_problems2';
import ProblemsHome from './components/ProblemsHome';
import Navbar from './components/Navbar';
// import { value1 } from './components/Entrepreneur';
import Home from './components/Home';
import Navbar2 from './components/Navbar2';
import NavbarEnt from './components/NavbarEnt';
import NavbarStu from './components/NavbarStu';
import { useEffect, useState } from 'react';
import FullProblemStu from './components/FullProblemStu';

function App() {
  const [who,changeWho]=useState(()=>{
    return localStorage.getItem("who");
  }
  );
  //var mailId=null;
  let HomeTrigger = <><Navbar2/><Home/></>;
  let SignupTrigger=<Sign_up/>;
  let LoginTrigger=<Login who={who} changeWho={changeWho}/>;
  // Use a switch statement or if-else logic to determine the element
  switch (who) {
    case 'Student':
      HomeTrigger = (
        <>
          <NavbarStu/>
          <ProblemsHome />
        </>
      );
      SignupTrigger = (
        <>
          <NavbarStu/>
          <ProblemsHome />
        </>
      );
      LoginTrigger = (
        <>
          <NavbarStu/>
          <ProblemsHome />
        </>
      );
      break;
    case 'Entrepreneur':
      HomeTrigger = (
        <>
          <NavbarEnt/>
          <ProblemsHome/>
        </>
      );
      SignupTrigger = (
        <>
          <NavbarEnt/>
          <ProblemsHome/>
        </>
      );
      LoginTrigger = (
        <>
          <NavbarEnt/>
          <ProblemsHome/>
        </>
      );
      break;
  }
  console.log(who);
  //console.log(typeof HomeTrigger);
  return (
    <Routes>
      <Route path='/' element={HomeTrigger} />
      <Route path='Signup' element={SignupTrigger}/>
      <Route path='Login' element={LoginTrigger}/>
      {/* <Route path='Login_as' element={<Login_as/>} /> */}
      <Route path='Student' element={<><NavbarStu/><ProblemsHome/></>} />
      <Route path='My_ideas' element={<><NavbarStu/><My_problems2/></>} />
      <Route path='Business' element={<><NavbarStu/><Business/></>} />
      <Route path='FullProblemStu' element={<><NavbarStu/><FullProblemStu/></>} />
      {/* <Route path='Problems' element={<><NavbarStu/><ProblemsHome/></>} /> */}
      <Route path='UX' element={<><Navbar/><UX/></>} />
      <Route path='Entrepreneur' element={<><NavbarEnt/><ProblemsHome/></>} />
      <Route path='Post_problem' element={<><NavbarEnt/><Post_problem/></>} />
      <Route path='My_problems' element={<><NavbarEnt/><My_problems2/></>} />
      <Route path='Business_ideas' element={<><NavbarEnt/><Business_ideas/></>} />
    </Routes>
  );
}

export default App;

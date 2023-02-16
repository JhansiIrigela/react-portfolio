import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About'
import Pnf from './components/Pnf';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <Menu />

    <Routes>
    <Route path={"/"}  element={<Home/>}/>
    <Route path={"/about"}  element={<About/>}/>
    <Route path={"/resume"}  element={<Resume/>}/>
    <Route path={"/projects"}  element={<Projects/>}/>
    <Route path={"/contact"}  element={<Contact/>}/>
    <Route path={"/*"}  element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>

    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import Content from './pages/content';
import Project1 from './pages/project1';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    // <div className="App">
    //   <HomePage/>
    //   {/* <Content/> */}
    //   {/* <Project1/> */}
    // </div>
    <Routes>
      
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/content' element={<Content/>}></Route>
      <Route path='/project1' element={<Project1/>}></Route>
    </Routes>
  );
}

export default App;

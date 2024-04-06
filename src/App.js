import './App.css';
import { Routes, Route } from "react-router-dom"
import Signin from './components/Signin'
import Main from './components/Main'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin/>}/>
      <Route path="login" element={ <Signin/> } />
      <Route path="home" element={ <Main/> } />
    </Routes>
  );
}

export default App;

import logo from './logo.svg';
import './css/style.css'
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import { Route, Routes } from 'react-router-dom';
import Display from './components/Display/Display';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Display/>}></Route>
        <Route path='/home' element={<Display/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

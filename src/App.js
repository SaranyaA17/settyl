import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './Component/Pages/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import TableChild from './Component/Pages/Child/TableChild';
import Chart from './Component/Pages/Chart/Chart';
import Form from './Component/Pages/Form/Form';
import Home from './Component/Pages/Home/Home';

function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: 'url(https://img.freepik.com/premium-vector/abstract-blue-vector-background-design-brochure-website-flyer-geometric-blue-wallpaper-certificate-presentation-landing-page_181182-34645.jpg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
    }}>
      <div className='app-1'>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Table' element={<TableChild/>}/>
        <Route path='/Chart' element={<Chart/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

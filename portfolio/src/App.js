import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { About, Contact, Home, Projects } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

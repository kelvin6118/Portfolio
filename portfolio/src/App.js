import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { About, Contact, Home, FpProjects } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/futureproof_projects' element={<FpProjects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

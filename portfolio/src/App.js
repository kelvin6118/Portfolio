import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

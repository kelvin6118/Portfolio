import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { About, Contact, Home, Projects} from './pages';
import useContentful from './useContentful';

function App() {
  const [companies, setCompanies] = useState();
  const {getCompanies} = useContentful();

  useEffect(()=>{
    getCompanies().then(
      (response)=>{
        setCompanies(response);
        console.log(response);
      }
    )
  },[])

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          {companies? companies.map((company)=>{
            const path = company.fields.name.toLowerCase();
            return <Route path={`/project/${path}`} element={<Projects company={company.fields.name}/>}/>
          }):false}
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;

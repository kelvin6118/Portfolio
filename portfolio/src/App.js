import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components';
import { About, Contact, Home, Projects} from './pages';
import useContentful from './useContentful';

function App() {
  const [companies, setCompanies] = useState();
  const [skills, setSkills] = useState()
  const {getCompanies} = useContentful();
  const {getSkills} = useContentful();

  useEffect(()=>{
    getCompanies().then(
      (res)=>{
        setCompanies(res);
      }
    )

    getSkills().then(
      (res) => {
        setSkills(res);
      }
    )
  },[])

  return (
    <div className="App">
      <NavBar />
      <main id='main-container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About skills={skills}/>}/>
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

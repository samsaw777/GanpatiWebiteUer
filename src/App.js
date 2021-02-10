import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom'
import AboutUs from './Website/AboutUs'
import {AuthProvider} from './context/Authcontext'
import ShaduGanpati from './Website/ShaduGanpati'
import PaperGanpati from './Website/PaperGanpati'
import RedGanpati from './Website/RedSoil'
function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path='/' component={AboutUs}/>
        <Route exact path='/shaduganpati' component={ShaduGanpati}/>
  <Route exact path='/paperganpati' component={PaperGanpati}/>
  <Route exact path='/redganpati' component={RedGanpati}/>
      </Switch>
    </AuthProvider>
  );
}

export default App;

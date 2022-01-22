
import React  from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Header from './components/Header';
import About from './pages/about';
import Addedit from './pages/addedit';
import Home from './pages/home';
import View from './pages/view';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <ToastContainer/>
          <Switch>
            <Route exact path="/"  component ={ Home }/>
            <Route  exact path="/add" component ={Addedit}/>
              <Route  exact path="/update/:id" component ={Addedit}/>
            <Route  exact path="/view/:id" component ={View}/>
            <Route  exact path="/about" component ={About}/>

          </Switch>
        </div>
     </BrowserRouter>
  );
}

export default App;

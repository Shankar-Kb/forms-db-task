import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import './App.css';

function App() {

  return (
    <div className="app-box">
    <Router>
        
        <Switch>

            <Route exact path='/step-one' render = {(props) => {
                return (
                    <StepOne {...props} />
                )
            }} />
            <Route exact path='/step-two' render = {(props) => {
                return (
                    <StepTwo {...props} />
                )
            }} />
            <Route exact path='/step-three' render = {(props) => {
                return (
                    <StepThree {...props} />
                )
            }} />
            <Route exact path='/' render = {(props) => {
                return (
                    <HomePage {...props} />
                );
            }} />
            
        </Switch>
        
    </Router>
    </div>
);
  
}

export default App;
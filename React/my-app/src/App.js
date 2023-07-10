import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import MoveToPage from './MoveToPage';
import './index.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setCurrentStep('2/2');
  };

  const handleBack = () => {
    setSelectedOption('');
    setCurrentStep('1/2');
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h3><b>Choose Service</b></h3>
          <p>Step {currentStep}</p>
        </header>
        <Switch>
          <Route exact path="/">
            <MainPage options={['Anti Wrinkle Treatment', 'Dermal Fillers', 'Secret RF', 'HArmonyCA','Profhilo','Facials','Sclerotherapy']} onSelect={handleOptionSelect} />
          </Route>
          <Route path="/option">
            <MoveToPage selectedOption={selectedOption} onBack={handleBack} />
          </Route>
        </Switch>
      </div>
    <footer className='footer'>
        <span className='logo'>Powered By</span><img src="./images/logo.jpg" alt="Logo" style={{ width: '60px', height: 'auto', bottom:'0',  margin: '-9px',}} />
      </footer>
    </Router>
  );
};

export default App;

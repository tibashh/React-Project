import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ options, onSelect }) => {
  return (
    <div class="container">
        <div className='body'>
            <div className="table">
                <ul className="optionsList">
                    {options.map((option, index) => (
                    <li  key={index}>
                        <Link style={{ textDecoration: 'none',color:'black'}}className='optionsB' to="/option" onClick={() => onSelect(option)}>
                        {option}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div> 
            <br/>
            <div className='note'>
            <p >Not sure about consultation type? Please, call <span className='number'>02037959063</span></p>
            </div>
        </div>
    </div>
  );
};

export default MainPage;

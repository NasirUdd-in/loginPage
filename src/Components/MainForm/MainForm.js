import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import bgImage from '../images/Group 312.png';
import './MainForm.css';

const MainForm = () => {
    return (
        <div>
            <div className='container'>
                <div className='itemOne'>
                 <img src={bgImage} className="bgImage" alt="Background Img"></img>
                </div>
                <div className='itemTwo'>
                <LoginForm></LoginForm>
                </div>
            </div>
            
        </div>
    );
};

export default MainForm;
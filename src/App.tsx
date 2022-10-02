import React from 'react';
import background from './assets/Background.png';
import illustration from './assets/Illustration.svg';
import mixoneLogo from './assets/Logo.svg';
import instaIcon from './assets/Icon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <img src={background} className="background" alt="background" />
        <div className='leftSide'>
          <img className='mixoneLogo' src={mixoneLogo} alt="mixoneLogo"  />
          <div className='comSoon'>Coming soon...</div>
          <div className='additional-info'>Follow us on Instagram to keep in touch with us</div>
          <button className='appButton'><img className='miniIcon'  src={instaIcon} alt="instaIcon"  /> <span className='appText'>@mixoneapp</span></button>
          
        </div>
        <div className='divIllust'>
          <img src={illustration} className="illustration" alt="illustration" />
        </div>
        
        
     
    </div>
  );
}

export default App;

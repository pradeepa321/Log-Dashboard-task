import React from 'react'
import './App.css';
import SideMenu from './Menu/sideMenu';
import ShowLogs from './displayLogs/showLogs';

function App() {
  return (
    <div className='section'>
        <div className='container'>
            <div className='row'>
                <div className='side-menu'>
                    <SideMenu />
                </div>
                <div className='show-logs'>
                    <ShowLogs />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

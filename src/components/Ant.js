// This component represents an individual ant on the screen. It will handle ant animation and interaction.
import React from 'react';

const Ant = () => {
    const antStyle = {
      position: 'relative',
      width: '40px',
      height: '40px',
      backgroundImage: 'url("http://www.clker.com/cliparts/0/5/2/d/11954389722123324306Andy_-_ant.svg.med.png")', 
      backgroundSize: '65%', 
      backgroundRepeat: 'no-repeat',
      backgroundPostision: 'center',
      animation: 'moveAnt 5s linear infinite',
    };
  
    return (
      <div style={antStyle}>
        {/* No need for additional content */}
      </div>
    );
  };

export default Ant;


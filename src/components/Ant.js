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
      backgroundPostision: 'center'
    };
  
    return (
      <div style={antStyle}>
        {/* No need for additional content */}
      </div>
    );
  };

export default Ant;

//const Ant = () => {
    //     return (
    //       <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
    //         {/* Ant body */}
    //         <ellipse cx="40" cy="40" rx="20" ry="30" fill="brown" />
      
    //         {/* Ant legs */}
    //         <line x1="30" y1="40" x2="20" y2="60" stroke="brown" strokeWidth="3" />
    //         <line x1="40" y1="40" x2="30" y2="60" stroke="brown" strokeWidth="3" />
    //         <line x1="50" y1="40" x2="40" y2="60" stroke="brown" strokeWidth="3" />
    //         <line x1="35" y1="70" x2="25" y2="75" stroke="brown" strokeWidth="3" />
    //         <line x1="45" y1="70" x2="35" y2="75" stroke="brown" strokeWidth="3" />
    //         <line x1="55" y1="70" x2="45" y2="75" stroke="brown" strokeWidth="3" />
      
    //         {/* Ant head */}
    //         <circle cx="40" cy="25" r="15" fill="brown" />
      
    //         {/* Antennae */}
    //         <line x1="35" y1="25" x2="30" y2="15" stroke="black" strokeWidth="2" />
    //         <line x1="45" y1="25" x2="50" y2="15" stroke="black" strokeWidth="2" />
      
    //         {/* Eyes */}
    //         <circle cx="35" cy="20" r="2" fill="black" />
    //         <circle cx="45" cy="20" r="2" fill="black" />
    //       </svg>
    //     );
    //   };
import React from 'react';

function Parents(props) {
  const cardstyle = {
    backgroundColor: "pink",
    padding: "10px",
    borderRadius: "10px",
    margin: "3px", 
    width: "300px", 
    height: "300px", 
    display: "inline-block", 
    verticalAlign: "top",
  };

  const handleViewClick = () => {
    
  };

  return (
    <div style={cardstyle}>
      <div>school name: {props.schoolname}</div>
      <div>school location: {props.schoollocation}</div>
      <div>school image: <img src={props.imageUrl} alt={props.schoolname} style={{ width: '150px', height: '150px' }} /></div>
      <button onClick={handleViewClick}>View</button>
    </div>
  );
}

export default Parents;
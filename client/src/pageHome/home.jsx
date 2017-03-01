import React from 'react';
import { Link } from 'react-router';

require ('../styles/home.css');

// ===============================================
// CSS Stylying
const flexboxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh'
}
const titleStyle = {
  fontSize: 72,
}
const subTitleStyle = {
  fontSize: 30,
  color: '#969393',
  marginTop: 0,
}
// ===============================================

const Home = (props) => (
  <div style={flexboxStyle}>
    <div className='text-center'>
      <img src='./spqr-murmillo-2.jpg'/>
      <h1 style={titleStyle}>Murmillo</h1>
      <h1 style={subTitleStyle}>Realtime Coding Challenge</h1>
      <Link to='/signup' className='btn btn-info btn-lg'>Start</Link>
    </div>
  </div>
);

export default Home;

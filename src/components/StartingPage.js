import React from 'react';
import { Link } from 'react-router-dom';

export const StartingPage = () => {
  return (
    <div>
      <div>
        <h1>Name</h1>
        <p>The best mechanic</p>
      </div>
      <div>
        <Link to="/about"><button type="button">About</button></Link>

        <Link to="/price"><button type="button">Price and Contact</button></Link>

        <Link to="/projects"><button type="button">My Projects</button></Link>
      </div>
    </div>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../assets/projects.json'

export const ProjectsPage = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button
            type="button">
                Go Back
          </button>
        </Link>
        <h1>My Projects</h1>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <div>
              <h1>{item.title}</h1>
              <p>Problem: {item.problem}</p>
              <p>How I fixed it: {item.fix}</p>
              <p>For this project, I used these tools {item.tools}</p>
              <p>The total cost
                for this fix is {item.price}.
                This includes all these service {item.price_detail}
              </p>
            </div>
            <div>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
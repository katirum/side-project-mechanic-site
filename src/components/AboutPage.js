import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button
            type="button">
                Go Back
          </button>
        </Link>
        <img src="http://placekitten.com/200/300" alt="bild" />
      </div>
      <div>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime repellat.
        </p>
      </div>
    </div>
  )
}
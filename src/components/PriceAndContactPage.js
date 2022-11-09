import React from 'react';
import { Link } from 'react-router-dom';

export const PriceContact = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <button
            type="button">
            Go back
          </button>
        </Link>
      </div>
      <div>
        <h1>Price</h1>
        <p>Sed ut perspiciatis unde omnis iste
            natus error sit voluptatem accusantium
            doloremque laudantium, totam re
            aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi
            architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem
            sequi nesciunt. Neque porro quisquam
            est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
      <div>
        <h1>Contact Me</h1>
        <p>Phone</p>
        <p>Email</p>
        <p>Location</p>
      </div>
    </div>
  )
}
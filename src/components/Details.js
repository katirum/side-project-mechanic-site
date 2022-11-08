import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { pokemonName } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, [pokemonName])

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>
            Go Back
      </button>
      <h2>Pokemon name: {details.name}</h2>
      <img alt="img" src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} />
    </div>
  )
}

export default Details;
import React, { useEffect, useState } from 'react';

const StackGraph = () => {

  const [country, setCountry] = useState({
    hits: {
      hits: []
    }
  });

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

  const fetchCountry = () => {
    fetch(CORSURL + `http://egollas.com/api.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setCountry(data)
    })
    .catch(error => console.log('Error: ', error))
  }
  console.log(country)

  useEffect(() => {
    fetchCountry()
  }, [])

  return (
    <p>Stack Graph Component</p>
  )
};

export default StackGraph


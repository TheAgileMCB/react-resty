import React from 'react';
//import App from './../../app.js';

export default function ResultsList (props) {
  if (props.loading) {
    return (
      <h2>Loading.....</h2>
    );
  }

  return (
    <>
      <h2>Result Count: {props.results.length}</h2>
      <ul>
        {props.results.map((result, index) => (
          <li key={index}>
            {result.name}
          </li>
        ))}
      </ul>
    </>
  );
}
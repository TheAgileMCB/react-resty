import React from 'react';

export default function ResultsList (props) {
//   if (props.loading) {
//     return (
//       <h2>Loading.....</h2>
//     );
//   }

  return (
    <>
      <h2>Result Count: {props.results.length}</h2>
      <ul>
        {props.results.map((result, storeId) => (
          <li key={storeId}>
            {result.name}
          </li>
        ))}
      </ul>
    </>
  );
}
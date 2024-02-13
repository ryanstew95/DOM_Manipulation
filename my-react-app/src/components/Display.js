import React from 'react';

const Results = ({ result }) => {
  return (
    <div>
      <h2>Results:</h2>
      <ul>
        {result.results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;

import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((professor) => (
          <li key={professor.email}>
            <p><b>Professor Name: </b>{professor.name}</p>
            <p><b>Email: </b>{professor.email}</p>
            <p><b>University: </b>{professor.university}</p>
            <p><b>Research Interests: </b>{professor.researchInterest}</p>
            <p><b>SDG Focus: </b>{professor.sdgFocus.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

import React, { useState, useEffect } from 'react';
import SearchResults from './SearchResults';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    fetch('/output.json')
      .then((response) => response.json())
      .then((data) => setProfessors(data.professors))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

  const handleSearch = () => {
    const filteredProfessors = professors.filter((professor) =>
      professor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professor.sdgFocus.includes(searchTerm) || 
      professor.researchInterest.includes(searchTerm) ||
      professor.sdgFocus.includes(searchTerm.toString())
    );

    setSearchResults(filteredProfessors);
  };

  return (
    <div>
      <input
      style={{ width: '300px' }} 
        type="text"
        placeholder="Search by professor or SDG or Research interest."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <SearchResults results={searchResults} />
    </div>
  );
};

export default SearchComponent;

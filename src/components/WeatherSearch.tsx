import { useState } from 'react';
import styled from '@emotion/styled';
import useWeatherStore from '../store/weatherStore'; // Import your Zustand store

// Styled component for the search input field
const SearchInput = styled.input`
  width: calc(100% - 70px); /* Adjust width to make space for the button */
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 25px; /* Rounded corners */
  font-size: 1rem;
  outline: none; /* Remove outline on focus */
  margin-right: 10px; /* Space between input and button */
`;

// Styled component for the search button
const SearchButton = styled.button`
  background-color: #007bff; /* Blue background */
  color: white; /* White text/icon */
  border: none;
  border-radius: 50%; /* Make it a circle */
  padding: 12px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease; /* Smooth transition on hover */

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

// Styled component for the container of search bar and button
const SearchContainer = styled.div`
  display: flex; /* Use flexbox to align input and button */
  justify-content: center;
  margin-bottom: 25px;
`;

const WeatherSearch = () => {
  const [inputValue, setInputValue] = useState(''); // State to hold the current input value
  const setCity = useWeatherStore((state) => state.setCity); // Get the setCity action from the store

  const handleSearch = () => {
    if (inputValue.trim()) {
      // Only search if input is not empty
      setCity(inputValue.trim()); // Update the city in the Zustand store
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Trigger search on Enter key press
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Enter city name..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update local state on change
        onKeyPress={handleKeyPress} // Listen for Enter key
      />
      <SearchButton onClick={handleSearch}>
        {/* You would typically use an icon library here, e.g., Font Awesome */}
        🔍 {/* Unicode magnifying glass for simplicity */}
      </SearchButton>
    </SearchContainer>
  );
};

export default WeatherSearch;

import styled from '@emotion/styled';

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const WeatherSearch = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default WeatherSearch;

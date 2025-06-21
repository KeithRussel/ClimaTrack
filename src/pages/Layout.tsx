import { Outlet } from 'react-router'; // Outlet renders the content of the current nested route
import styled from '@emotion/styled'; // For styling React components

// Styled component for a wrapper div with a fixed maximum width
const Wrapper = styled.div`
  margin: auto; /* Centers the content horizontally */
  width: 800px; /* Sets a fixed width for the content area */
  padding: 20px; /* Add some padding for better aesthetics */
  box-sizing: border-box; /* Include padding in the width calculation */
`;

const Layout = () => {
  return (
    <Wrapper>
      {/* Outlet will render the component for the matched child route (e.g., Homepage) */}
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

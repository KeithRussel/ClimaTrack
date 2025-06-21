import { Outlet } from 'react-router';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  /* margin: auto; No longer needed as #root will handle centering */
  width: 800px;
  padding: 20px;
  box-sizing: border-box;
  /* Add max-width for responsiveness on smaller screens */
  max-width: 95%; /* Adjust as needed, ensures it's not too wide on small devices */
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

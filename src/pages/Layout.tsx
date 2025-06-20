import { Outlet } from 'react-router';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: auto;
  width: 800px;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Layout;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #cacaca;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #333333;
  font-weight: 500;
  &.active {
    color: orangered;
    /* background-color: orangered; */
  }
`;

import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  display: inline-block;
  font-size: 24px;
  color: #0056b3;
  margin-bottom: 20px; // Upravte hodnotu podle potřeby
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 4px;
    background: #0056b3;
  }
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

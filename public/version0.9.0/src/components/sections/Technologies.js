import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';

const TechnologiesContainer = styled.div`
  background-color: #ececec;
  padding: 20px;
  margin-bottom: 20px;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start; // toto zajistí, že položky začnou zleva a budou pokračovat doprava
`;

const TechnologyBadge = styled.span`
  background-color: #fff;
  padding: 8px 16px;
  border-radius: 15px;
  border: 2px solid #0056b3;
  color: #0056b3;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Technologies = ({ technologies }) => {
  return (
    <TechnologiesContainer>
      <Title>Technologies</Title>
      <TechnologiesList>
        {technologies.map((tech, index) => (
          <TechnologyBadge key={index}>{tech}</TechnologyBadge>
        ))}
      </TechnologiesList>
    </TechnologiesContainer>
  );
};

export default Technologies;

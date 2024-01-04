import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';

const LanguagesContainer = styled.div`
  background-color: #ececec;
  padding: 20px;
  margin-bottom: 20px;
`;

const Languages = ({ languages }) => {
  return (
    <LanguagesContainer>
      <Title>Languages</Title>
      {Object.entries(languages).map(([language, proficiency], index) => (
        <p key={index}>{language}: {proficiency}</p>
      ))}
    </LanguagesContainer>
  );
};

export default Languages;

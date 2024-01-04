import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';

const EducationContainer = styled.div`
  background-color: #ececec;
  padding: 20px;
  margin-bottom: 20px;
`;

const Education = ({ education }) => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      {education.map((edu, index) => (
        <div key={index}>
          <h3>{edu.institution}</h3>
          <p>{edu.fieldOfStudy} ({edu.years})</p>
        </div>
      ))}
    </EducationContainer>
  );
};

export default Education;

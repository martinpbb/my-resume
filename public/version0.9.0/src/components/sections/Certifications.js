import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';

const CertificationsContainer = styled.div`
  background-color: #ececec;
  padding: 20px;
  margin-bottom: 20px;
`;

const Certifications = ({ certifications }) => {
  return (
    <CertificationsContainer>
      <Title>Certification</Title>
      {certifications.map((certification, index) => (
        <p key={index}>{certification}</p>
      ))}
    </CertificationsContainer>
  );
};

export default Certifications;

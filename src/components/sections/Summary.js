import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import { FaUserTie, FaTools } from 'react-icons/fa';

const SummarySection = styled.section`
  padding: 20px;
  background: #f8f8f8;
  border-left: 5px solid #0056b3;
  margin: 10px 0;
`;

const SectionTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  color: #0056b3;
  margin-top: 0px; // Přidává prostor nad každým nadpisem
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 10px 0 20px; // Přidává prostor nad a pod každým odstavcem
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Summary = ({ summary }) => {
  return (
    <SummarySection>
      <Title>About me</Title>
      <SectionTitle>
        <IconWrapper><FaUserTie /></IconWrapper>
        Personality
      </SectionTitle>
      <Paragraph>{summary.personality}</Paragraph>
      <SectionTitle>
        <IconWrapper><FaTools /></IconWrapper>
        Testing & Automation
      </SectionTitle>
      <Paragraph>{summary.testingAutomation}</Paragraph>
    </SummarySection>
  );
};

export default Summary;

import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';

// Definice stylizovaného komponentu
const SkillsSection = styled.section`
  /* sem přidáte své CSS */
  padding: 20px;
  background: #f8f8f8;
`;

const SkillList = styled.ul`
  list-style-type: none;
  /* další styly */
`;

const SkillItem = styled.li`
  padding: 5px 0;
  /* další styly */
`;

const Skills = ({ skills }) => {
    return (
        <SkillsSection>
            <Title>Skills</Title>
            <SkillList>
                {skills.map((skill, index) => (
                    <SkillItem key={index}>{skill}</SkillItem>
                ))}
            </SkillList>
        </SkillsSection>
    );
};

export default Skills;

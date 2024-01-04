import React from 'react';
import styled from 'styled-components';
import Title from '../common/Title';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  background-color: #ececec;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectItem = styled.div`
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-left: 4px solid #5cb85c;
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
  color: #004a7c;
`;

const CompanyName = styled.h4`
  margin-bottom: 5px;
  font-weight: normal;
  color: #555;
  color: #007bff;
`;

const ProjectMeta = styled.div`
  display: flex;
  align-items: center;
  font-style: italic;
  color: #666;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.ul`
  padding-left: 20px;
`;

const DescriptionItem = styled.li`
  margin-bottom: 5px;
  &:before {
    content: "• ";
    color: black;
  }
`;

const Icon = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer>
            <Title>Projects</Title>
            {projects.map((project, index) => (
                <ProjectItem key={index}>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <CompanyName>{project.company}</CompanyName>
                    <ProjectMeta>
                        <Icon><FaCalendarAlt /></Icon> {project.period}
                        <span style={{ padding: '0 20px' }}></span>
                        <Icon><FaMapMarkerAlt /></Icon> {project.location}
                    </ProjectMeta>
                    <ProjectDescription>
                        {Array.isArray(project.description) ? (
                            project.description.map((desc, descIndex) => (
                                <DescriptionItem key={descIndex}>
                                    {desc.startsWith('- ') ? desc.replace('- ', '') : desc}
                                </DescriptionItem>
                            ))
                        ) : (
                            // Pokud description není pole, zobrazí se pouze jako jedna položka
                            <DescriptionItem>
                                {project.description.startsWith('- ') ? project.description.replace('- ', '') : project.description}
                            </DescriptionItem>
                        )}
                    </ProjectDescription>

                </ProjectItem>
            ))}
        </ProjectsContainer>
    );
};

export default Projects;

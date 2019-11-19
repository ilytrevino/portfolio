import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';

const ProjectName = styled('h1')`
  color: white;
  margin: 0 10px;
  margin-top: 20px;
`;

const Tags = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
  margin-top: 20px;
`;

const Tag = styled('p')`
  background: #35ca8e;
  height: 20px;
  display: flex;
  font-size: 17px;
  padding: 5px 10px;
  margin: 0 5px;
  color: #1e5164;
`;

const Project = (props) => {
  return(
    <React.Fragment>
      <Flex flexDirection="column" margin="20px">
        <a href={props.link} target="_blank">
          <img className="cover" src={props.src} />
        </a>
        <ProjectName>{props.projectName}</ProjectName>
        <Tags>
          {
            props.tags.map((e, index) => (
              <Tag key={e}>{e}</Tag>))
          }
        </Tags>
      </Flex>
    </React.Fragment>
  )
}

export default Project;

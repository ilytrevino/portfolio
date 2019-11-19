import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';
import Project from './Project.jsx';

const Portfolio = () => {
  return(
    <React.Fragment>
      <Flex
        marginBottom="20px"
        id="portfolio"
        flexDirection="column"
        min-height="100vh"
      >
        <div id="wrap">
          <span id="projects">Projects</span>
        </div>
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Project
            projectName="Data Lovers | Laba news"
            src="/labanews.jpg"
            link="https://ilytrevino.github.io/GDL002-data-lovers/src/"
            tags={["HTML", "JavaScript", "CSS"]}
          />
          <Project
            projectName="Veggie Happy | Social Network"
            src="/veggie.jpg"
            link="https://veggiehappy-c15fa.web.app/"
            tags={["JavaScript", "Firebase"]}
            />
          <Project
            projectName="Weather App"
            src="/weather.jpg"
            link="https://trevino-weather-application.herokuapp.com/"
            tags={["JavaScript", "NodeJS", "API's"]}/>
        </Flex>
      </Flex>
    </React.Fragment>
  )
}

export default Portfolio;

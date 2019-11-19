import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';

const AboutMe = () => {
  return(
    <React.Fragment>
      <Flex
        id="about"
        height="100vh"
        flexDirection="row"
        backgroundColor="#0c0d18"
        opacity="70%"
        padding="30px"
      >
        <Flex flex={2}>
          <Text margin="auto" className="aboutText" fontSize={30} pb={1}>
            Hello! I'm a Front-End Developer graduated from {" "}
            <a  className="laboratoria" href="https://www.laboratoria.la/" target="_blank">Laboratoria</a>.
            <li></li>I have a deep passion for baking, videogames, movies and technology,
            and I consider myself a very creative person. I enjoy getting out of
            my comfort zone and learning from the people around me, and I've
            found that nothing satisfies me more than meeting new people, solving
            problems and pushing myself to be better.
          </Text>
        </Flex>
        <Flex flex={1}>

        </Flex>
      </Flex>
    </React.Fragment>
  )
}

export default AboutMe;

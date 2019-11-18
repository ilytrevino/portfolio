import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Heading, Text, Image } from 'rebass';
import Me from '../img/me.jpg';

const Layout = styled(Flex)({
  backgroundColor: "#2b2b2b",
  height: "100vh"
});

const Welcome = () => (
  <React.Fragment>
    <Layout>
      <Flex
        flexDirection="column"
        color="white"
        m={5}
        >
        <Text fontSize={30} pb={1} pt={5}>
          Hello
        </Text>
        <Heading
          fontSize={35} pb={1}>
          I'm Ily Treviño
        </Heading>
        <Text fontSize={25} pb={2}>
          Front-end developer
        </Text>
      </Flex>
      <Flex>
        <img className="me" src={Me}/>
      </Flex>
    </Layout>
  </React.Fragment>
);

export default Welcome;

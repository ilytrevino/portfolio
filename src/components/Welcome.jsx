import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';
import Navigation from './Navigation.jsx';

const Layout = styled(Flex)({
  height: "100vh"
});

const Welcome = () => (
  <React.Fragment>
    <Layout id="home">
      <Flex
        flexDirection="column"
        color="white"
        m="20vh 5vw"
        flex={1}
        >
        <Text fontSize={30} pb={1} pt={5}>
          Hello
        </Text>
        <Heading
          fontSize={35} pb={1}>
          I'm Ily Treviño
        </Heading>
        <Text fontSize={30} pb={1}>
          Front-end developer
        </Text>
      </Flex>
      <Navigation />
    </Layout>
  </React.Fragment>
);

export default Welcome;

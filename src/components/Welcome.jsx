import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';

const Layout = styled(Flex)({
  height: "100vh"
});

const Welcome = () => (
  <React.Fragment>
    <Layout>
      <Flex
        flexDirection="column"
        color="white"
        m="20vh 5vw"
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
      <Flex>

      </Flex>
    </Layout>
  </React.Fragment>
);

export default Welcome;

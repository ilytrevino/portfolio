import React from 'react';
import styled from 'styled-components';
import { Flex, Heading, Text } from 'rebass';

const ContactIcon = styled('a')`

`;

const IconImage = styled('img')`
  width: 70px;
  height: 70px;
  margin: auto 10px;
`;

const Contact = () => {
  return(
    <React.Fragment>
      <Flex
        flexDirection="column"
        id="contact"
        height="40vh"
        color="white"
        backgroundColor="#0c0d18"
      >
        <div id="wrap">
          <span>Contact</span>
        </div>
        <div >
          <a href="https://github.com/ilytrevino" target="_blank">
            <IconImage className="grow" src="/git.png" />
          </a>
          <a href="https://www.linkedin.com/in/ilytrevino/" target="_blank">
            <IconImage className="grow" src="/in.png" />
          </a>
          <a href="mailto:ily,trevino@live.com?subject=Subject&body=message%20goes%20here" target="_blank">
            <IconImage className="grow" src="/email.png" />
          </a>
        </div>
      </Flex>
    </React.Fragment>
  )
}

export default Contact;

import React from "react";
import styled from "styled-components";
import Terminal from "../terminal";

interface Props {
  Type: React.ComponentType;
  inputs?: number;
}

const Gate = ({ Type, inputs = 2 }: Props) => {
  return (
    <Container>
      <Inputs>
        {[...Array(inputs)].map((_, index) => (
          <Terminal key={index} type="input" />
        ))}
      </Inputs>
      <Type />
      <Output>
        <Terminal type="output" />
      </Output>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Output = styled.div`
  display: flex;
  align-items: center;
`;

export default Gate;

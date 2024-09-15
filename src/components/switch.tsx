import { useState } from "react";
import styled from "styled-components";
import Terminal from "./terminal";

interface Props {
  type: "input" | "output";
}

const Switch = ({ type }: Props) => {
  const [state, setState] = useState(false);

  return (
    <Container type={type}>
      <Button onClick={() => type === "input" && setState(!state)}>
        {state ? 1 : 0}
      </Button>
      <Terminal type={type === "input" ? "output" : "input"} />
    </Container>
  );
};

const Container = styled.div<{ type: "input" | "output" }>`
  display: flex;
  flex-direction: ${(props) =>
    props.type === "input" ? "row" : "row-reverse"};
  align-items: center;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export default Switch;

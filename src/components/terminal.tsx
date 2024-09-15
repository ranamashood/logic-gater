import styled from "styled-components";
import Connector from "./connector";

interface Props {
  type: "input" | "output";
}

const Terminal = ({ type }: Props) => {
  return (
    <Container>
      <Connector type={type} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: black;
  width: 40px;
  height: 2px;
`;

export default Terminal;

import styled from "styled-components";

interface Props {
  type: "input" | "output";
}

const Connector = ({ type }: Props) => {
  return <Container type={type} />;
};

const Container = styled.div<{ type: "input" | "output" }>`
  position: absolute;
  background-color: black;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  left: ${(props) => (props.type === "input" ? 0 : "100%")};
  transform: translate(-50%, -50%);
`;

export default Connector;

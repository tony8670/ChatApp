import { Container, Avatar, Title } from "@mantine/core";
import styled from "styled-components";

const ChatHead = ({ bg, name, status, time, img = null }) => {
  return (
    <Con style={{ backgroundColor: bg }}>
      <Avatar radius="xl" src={img} />
      <div>
        <Title style={{ color: "#F3F3F9" }} order={4}>
          {name || "Dolphin Roy"}
        </Title>
        <p style={{ color: "#999BB3" }}>{status || "call ended"}</p>
      </div>
      <p style={{ color: "#999BB3" }}>{time || "9:27pm"}</p>
    </Con>
  );
};

const Con = styled(Container)`
  margin: 5px 0;
  height: 72px;
  border-radius: 10px;
  width: 95%;
  display: grid;
  grid-template-columns: 20% 40% auto;
  place-items: center;
`;

const Tit = styled(Title)`
  color: red;
`;

export default ChatHead;

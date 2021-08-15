import styled from "styled-components";
import { Avatar, Container, Title } from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
const ChatSection = () => {
  return (
    <Sidebar>
      <Con>
        <Name>
          <Avatar radius="xl" />
          <Title style={{ color: "#F3F3F9" }} order={4}>
            Dolphin Roy
          </Title>
        </Name>
        <BsThreeDots size={25} color={"whitesmoke"} />
      </Con>
      <Chat></Chat> 
      <InputWrapper>
        <Text placeholder="type your message" />
      </InputWrapper>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: #1c1c2a;
  border-right: 1px solid;
  border-right-color: #252531;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Con = styled(Container)`
  border-bottom: 2px solid;
  height: 64px;
  border-bottom-color: #252531;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const Chat = styled(Container)`
  height: auto;
`;
const InputWrapper = styled.div``;   

const Name = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  cursor: pointer;
`;


const Text = styled.input`
  width: 100%;
  padding: 20px 250px;   
  background: none;
  border-radius: 15px;
  color: white;
  border-color: #885ed9;
  outline: none;   
  font-size: 20px;
`;

export default ChatSection;

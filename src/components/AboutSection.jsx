import { Avatar, Title } from "@mantine/core";
import styled from "styled-components";
import { BiPhoneCall, BiMessageDots } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";
const AboutSection = () => {
  return (
    <Sidebar>
      <Avawrap>
        <Avatar radius="xl" size={90} />
        <Title style={{ margin: "10px 0", color: "whitesmoke" }} order={4}>
          Dolphin Roy
        </Title>
        <div style={{ display: "flex", margin: "30px 0" }}>
          <IconWrapper>
            <BiPhoneCall size={30} color={"#999BB3"} />
          </IconWrapper>
          <IconWrapper>
            <BiMessageDots size={30} color={"#999BB3"} />
          </IconWrapper>
          <IconWrapper>
            <HiOutlineMail size={30} color={"#999BB3"} />
          </IconWrapper>
          <IconWrapper>
            <BsThreeDots size={30} color={"#999BB3"} />
          </IconWrapper>
        </div>
      </Avawrap>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: #1a1825;
  display: grid;
  grid-template-rows: 40% 30% auto;
  place-items: center;
  border-right: 1px solid;
  border-right-color: #252531;
`;

const Avawrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: #999bb3;
`;

const IconWrapper = styled.div`
  width: 50px;
  display: grid;
  place-items: center;
  height: 50px;
  border-radius: 10px;
  background-color: #252531;
  margin-left: 10px;
`;
export default AboutSection;

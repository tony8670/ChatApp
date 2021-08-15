import {useContext} from 'react'
import styled from "styled-components";
import { Avatar, Container } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { IoMdAnalytics, IoMdSettings } from "react-icons/io";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Appbar = () => {
  const [user, loading] = useAuthState(auth);
  return (
    <Sidebar>
      <Con>
        <Avatar src={user.photoURL} color="black" radius="xl" />
        <h3
          style={{ fontSize: "16px", fontFamily: "bold", color: "whitesmoke" }}
        >
          { user.displayName }
        </h3>
      </Con>
      <IconWrapper>
        <IconContainer>
          <BsSearch />
          <p>Search</p>
        </IconContainer>
        <IconContainer>
          <TiContacts />
          <p>Contacts</p>
        </IconContainer>
        <IconContainer>
          <IoMdAnalytics />
          <p>Analytics</p>
        </IconContainer>
        <IconContainer>
          <IoMdSettings />
          <p>Settings</p>
        </IconContainer>
      </IconWrapper>
    </Sidebar>
  );
};

const Sidebar = styled.div`
  background-color: #1c1c2a;
  border-right: 1px solid;
  border-right-color: #252531;
`;

const Con = styled(Container)`
  margin: 30px;
  display: grid;
  grid-template-columns: 20px 75%;
  cursor: pointer;
  place-items: center;
`;

const IconWrapper = styled(Container)`
  margin: 20px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 50px 75%;
  cursor: pointer;
  font-size: 16px;
  color: whitesmoke;
  align-items: center;
`;

export default Appbar;

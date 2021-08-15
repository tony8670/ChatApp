import { useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import AboutSection from "./components/AboutSection";
import Appbar from "./components/Appbar";
import ChatSection from "./components/ChatSection";
import Loader from "./components/Loader";
import Login from "./components/Login";
import MessageBar from "./components/MessageBar";
import { auth } from "./utils/firebase";
import "./styles.css";

export default function App() {
  const [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <Content>
        <Loader />
      </Content>
    );
  if (user) {
    return (
      <Container>
        <Appbar />
        <MessageBar />
        <ChatSection />
        <AboutSection />
      </Container>
    );
  } else {
    return (
      <NotloggedIn>
        you are not Logged in
        <Login />
      </NotloggedIn>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 350px auto 250px;
`;

const NotloggedIn = styled.div`
  text-align: center;
  margin: 20px auto;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;

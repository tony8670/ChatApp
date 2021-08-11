import styled from "styled-components";
import AboutSection from "./components/AboutSection";
import Appbar from "./components/Appbar";
import ChatSection from "./components/ChatSection";
import MessageBar from "./components/MessageBar";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <Appbar />
      <MessageBar />
      <ChatSection />
      <AboutSection />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px 350px auto 250px;
`;

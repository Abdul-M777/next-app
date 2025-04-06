import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to our service!</Preview>
      <Tailwind>
        <Body className="bg-white" style={body}>
          <Container style={{ padding: "20px", backgroundColor: "#ffffff" }}>
            <Text style={headring}>Hello {name}</Text>
            <Link href="https://abdulmuaz.com">www.abdulmuaz.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  backgroundColor: "#fff",
};

const headring: CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#333",
};

export default WelcomeTemplate;

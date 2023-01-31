/*
 * Filename: /home/tanzim/WorkStation/cactus-world-front/pages/registration.jsx
 * Path: /home/tanzim/WorkStation/cactus-world-front
 * Created Date: Tuesday, January 31st 2023, 8:53:47 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Button, Container, styled, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FormContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: 10,
  boxShadow: "0px 0px 10px #00000029",
  width: "40%",
});

const ButtonSpan = styled("span")({
  margin: "6px",
  width: "100%",
  cursor: "pointer",
  color: "blue",
  "&:hover": {
    textDecoration: "underline",
  },
});

const TextContainer = styled(Container)({
  width: "50%",
  padding: "32px",
});

const Heading = styled("h1")({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: "32px",
});

const SubHeading = styled("h2")({
  fontSize: 18,
  marginBottom: "32px",
});

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // your registration logic here
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextContainer>
        <Heading>Welcome to the Registration Page</Heading>
        <SubHeading>
          Please enter your email, username and password to proceed
        </SubHeading>
      </TextContainer>

      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            style={{ margin: "16px", width: "100%" }}
          />

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            style={{ margin: "16px", width: "100%" }}
          />

          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            style={{ margin: "16px", width: "100%" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
            style={{ margin: "16px", width: "100%" }}
          >
            {isLoading ? "Loading..." : "Register"}
          </Button>
          <span style={{ margin: "16px", width: "100%" }}>
            Already have an account?{" "}
            <ButtonSpan onClick={() => router.push("/login")}>Login</ButtonSpan>
          </span>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;

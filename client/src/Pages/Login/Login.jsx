import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import NavLink from "react-bootstrap/esm/NavLink";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [validated] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    console.log("The username value on login is:", value);
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoginData({ username: "", password: "" });
    console.log(
      "The login info has been submitted.  Current login data in state:",
      loginData
    );
  };

  return (
    <Container component="main" maxWidth="xs" className="login-form">
      {/* <CssBaseline /> */}
      <div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <Form >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                className="login-field"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="login-field"
              />
            </Grid>
          </Grid>
          <Button
            onSubmit={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink href="/signup" variant="body2" className="login-link">
                Don't have an account? Sign-Up
              </NavLink>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

export default Login;

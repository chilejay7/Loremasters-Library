import { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NavLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Login.css";

import { createUser } from "../../Utils/API";

export default function SignUp() {
  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    checkbox: false,
  });

  const handleChange = (evt) => {
    const { name, value, type, checked } = evt.target;

    const newValue = type === "checkbox" ? checked : value;

    setUserSignupData({ ...userSignupData, [name]: newValue });
    console.log(userSignupData);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await createUser(userSignupData);

      if (!response.ok) {
        throw new Error(
          "Soemthing went wrong.  Please submit your information and try again."
        );
      }

      const { token, user } = await response.json();
      console.log(user, token);
      // Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    console.log(
      "Thank you. Your information has been submitted.  An account will be created using the infomration provided."
    );

    setUserSignupData({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      checkbox: false,
    });
  };

  return (
    <Container component="main" maxWidth="xs" className="login-form">
      {/* <CssBaseline /> */}
      <div>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                className="login-field"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                className="login-field"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className="login-field"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                className="login-field"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className="login-field"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    // value="allowEmails"
                    type="checkbox"
                    color="primary"
                    name="checkbox"
                    id="checkbox"
                    checked={userSignupData.checkbox}
                    onChange={handleChange}
                  />
                }
                label="I would like to receive updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-button"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink href="/login" variant="body2" className="login-link">
                Already have an account? Sign-in
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </Container>
  );
}

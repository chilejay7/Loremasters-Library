import NavLink from "react-bootstrap/esm/NavLink";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Login.css";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink href="/signup" variant="body2">
                Don't have an account? Sign-Up
              </NavLink>
            </Grid>
          </Grid>
        </form>
        
      </div>
      <Box mt={5}></Box>
    </Container>
  );
};

export default Login;

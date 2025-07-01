import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 1,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email, Username or Mobile"
          name="identifier"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Log In
        </Button>
      </Container>
    </Box>
  );
};

export default Login;

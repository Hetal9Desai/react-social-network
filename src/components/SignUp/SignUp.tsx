import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";

const Signup: React.FC = () => {
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
          Signup
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          name="fullName"
        />
        <TextField fullWidth margin="normal" label="Username" name="username" />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mobile Number"
          name="mobileNumber"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Sign Up
        </Button>
      </Container>
    </Box>
  );
};

export default Signup;

// login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; // Import the auth module
import logo from "./images/logo.png";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link,
} from "@mui/material";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError(""); // Clear any previous errors
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      // Redirect or perform further actions after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #f7f9fc, #eef3f8)",
      }}
    >
      <Box
        textAlign="center"
        mb={4}
        sx={{
          marginBottom: "60px",
        }}
      >
        <img
          src={logo}
          alt="Roundrush Logo"
          style={{
            width: "186px",
            height: "28px",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#4C84FF",
            textTransform: "uppercase",
            letterSpacing: 2,
            fontSize: "14px",
            lineHeight: "2",
            marginTop: "8px",
            textAlign: "center",
          }}
        >
          The Optimized Workflow
          <br />
          Out of the Box
        </Typography>
      </Box>

      <Container
        maxWidth="sm"
        sx={{
          boxShadow: 3,
          padding: 4,
          backgroundColor: "#fff",
          borderRadius: 2,
          width: "550px",
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "#333",
            textAlign: "center",
          }}
        >
          Login
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Inserisci la tua email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: "80%",
              "& .MuiInputBase-input": {
                paddingBottom: "1px",
                height: "30px",
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              width: "80%",
              "& .MuiInputBase-input": {
                paddingBottom: "1px",
                height: "30px",
              },
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              width: "80%",
              backgroundColor: "#007bff",
              color: "#fff",
              mt: 2,
              height: "56px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
            }}
          >
            Login
          </Button>

          <Box
            display="flex"
            justifyContent="space-between"
            mt={2}
            sx={{
              width: "80%",
              fontSize: "0.875rem",
            }}
          >
            <Link href="#" underline="none" sx={{ color: "#007bff" }}>
              I forgot my password
            </Link>
            <Link href="/signup" underline="none" sx={{ color: "#007bff" }}>
              I don’t have an account
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;

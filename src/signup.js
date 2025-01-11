import React, { useState } from "react";
import logo from "./images/logo.png";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";

const SignupPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 0.5);
  };

  const handleNextForm = () => {
    setStep(2);
  };

  const labelStyles = {
    color: "#808080",
    marginBottom: 1,
    display: "block",
    marginLeft: { xs: "5%", sm: "20%" }, // Responsive margin
  };

  const inputStyles = {
    width: { xs: "90%", sm: "60%" }, // Adjust width responsively
    marginBottom: 2,
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
        padding: { xs: 2, sm: 4 },
      }}
    >
      <Box textAlign="center" mb={4}>
        <img
          src={logo}
          alt="Roundrush Logo"
          style={{
            width: "150px",
            height: "auto",
          }}
        />
      </Box>

      <Container
        maxWidth="sm"
        sx={{
          boxShadow: 3,
          padding: { xs: 3, sm: 4 },
          backgroundColor: "#fff",
          borderRadius: 2,
          width: { xs: "100%", sm: "550px" },
        }}
      >
        {/* Step 1 */}
        {step === 1 && (
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "#000",
                marginBottom: "8px",
              }}
            >
              Sign Up
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                marginBottom: "24px",
              }}
            >
              Let’s validate your email first
            </Typography>
            <TextField
              fullWidth
              placeholder="Insert your email"
              variant="outlined"
              type="email"
              id="email-input"
              InputProps={{
                sx: {
                  height: "48px",
                },
              }}
              sx={{
                marginBottom: 2,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleNext}
              sx={{
                backgroundColor: "#2979FF",
                color: "#fff",
                height: "48px",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1A5DCC",
                },
              }}
            >
              Next
            </Button>
          </Box>
        )}

        {/* Step 1.5 */}
        {step === 1.5 && (
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#000",
                textAlign: "center",
              }}
            >
              Additional Information
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                textAlign: "center",
                mb: 3,
              }}
            >
              Please fill out the following details
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your full name"
              id="full-name"
              sx={{
                marginBottom: 2,
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your phone number"
              id="phone-number"
              sx={{
                marginBottom: 2,
              }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={handleNextForm}
              sx={{
                backgroundColor: "#2979FF",
                color: "#fff",
                height: "48px",
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#1A5DCC",
                },
              }}
            >
              Next
            </Button>
          </Box>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <Box>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 1,
                color: "#000",
                textAlign: "center",
              }}
            >
              Sign up
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "14px",
                color: "#6B7280",
                textAlign: "center",
                mb: 3,
              }}
            >
              Create your company space
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="body2" sx={labelStyles}>
                  Company Name
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="company-name-input"
                    placeholder="Lasting Dynamics"
                    InputProps={{
                      sx: { height: 40 },
                    }}
                    sx={inputStyles}
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={labelStyles}>
                  Your space will be
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="space-name-input"
                    placeholder="lastingdynamics7"
                    InputProps={{
                      sx: { height: 40 },
                    }}
                    sx={inputStyles}
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={labelStyles}>
                  Industry Type
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Select
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    id="industry-type-select"
                    sx={{
                      ...inputStyles,
                      height: 40,
                    }}
                  >
                    <MenuItem value="" disabled>
                      Industry type
                    </MenuItem>
                    <MenuItem value="tech">Tech</MenuItem>
                    <MenuItem value="finance">Finance</MenuItem>
                    <MenuItem value="healthcare">Healthcare</MenuItem>
                  </Select>
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" sx={labelStyles}>
                  Company Size
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Select
                    fullWidth
                    displayEmpty
                    defaultValue=""
                    id="company-size-select"
                    sx={{
                      ...inputStyles,
                      height: 40,
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select a size...
                    </MenuItem>
                    <MenuItem value="small">1-10 Employees</MenuItem>
                    <MenuItem value="medium">11-50 Employees</MenuItem>
                    <MenuItem value="large">51+ Employees</MenuItem>
                  </Select>
                </Box>
              </Box>

              <Box
                sx={{
                  width: "60%",
                  margin: "0 auto",
                }}
              >
                <FormControlLabel
                  control={<Checkbox id="terms-checkbox" />}
                  label="Accetto le Condizioni di utilizzo e Informativa sulla Privacy"
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: "0.875rem",
                      color: "#6B7280",
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "60%",
                    margin: "0 auto",
                    backgroundColor: "#29C293",
                    color: "#fff",
                    height: "56px",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "#25A583",
                    },
                  }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default SignupPage;

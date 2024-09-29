import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button, TextField } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.loading("Redirecting to bot...", { id: "redirect" });

    try {
      setTimeout(() => {
        toast.dismiss("redirect");
        navigate("/bot"); // Directly navigate to the bot page when button is clicked
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Unable to enter bot", { id: "redirect" });
    }
  };

  return (
    <Box width={"100%"} height={"100vh"} display="flex">
      {/* Left Side - Signup Form */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        padding={4}
        sx={{
          backgroundColor: "white",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            margin: "auto",
            padding: "30px",
            boxShadow: "10px 10px 20px #000",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              textAlign="center"
              padding={2}
              fontWeight={600}
              color="black"
            >
              You Are Not Alone!
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              paddingBottom={2}
              color="black"
            >
              Sign in with your ASU account
            </Typography>

            {/* Input fields with updated styles */}
            <TextField
              variant="outlined"
              name="email"
              label="Email Address"
              fullWidth
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                marginBottom: 2,
                backgroundColor: "#f7f7f7",
                borderRadius: 1,
                input: {
                  color: "black",
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f0a000",
                  },
                },
              }}
            />

            <TextField
              variant="outlined"
              name="password"
              label="Password"
              type="password"
              fullWidth
              InputLabelProps={{
                style: { color: "black" },
              }}
              sx={{
                marginBottom: 2,
                backgroundColor: "#f7f7f7",
                borderRadius: 1,
                input: {
                  color: "black",
                  "&::placeholder": {
                    color: "black",
                    opacity: 1,
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#d3d3d3",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#f0a000",
                  },
                },
              }}
            />

            {/* Updated LOGIN Button */}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  fontSize: "18px",
                  borderRadius: "25px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#eab308",
                    transform: "translateY(-2px)",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
                endIcon={<IoIosLogIn />}
              >
                LOGIN
              </Button>
            </Box>

            {/* New 'Go Back' Button */}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => navigate(-1)} // Navigates back to the previous page
                sx={{
                  backgroundColor: "#ffffff",
                  color: "black",
                  fontWeight: "bold",
                  padding: "12px 24px",
                  fontSize: "18px",
                  borderRadius: "25px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                  ":hover": {
                    backgroundColor: "#eab308",
                    transform: "translateY(-2px)",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Go Back
              </Button>
            </Box>
          </Box>
        </form>
      </Box>

      {/* Right Side - Image */}
      <img
        src="sparkycartoon.png"
        alt="ASU Mascot"
        style={{
          maxHeight: "130%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Signup;

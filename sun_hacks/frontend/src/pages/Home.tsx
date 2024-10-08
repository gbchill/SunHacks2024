import { Box, useMediaQuery, useTheme, Typography, Button } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Header />
      <Box
        width={"100%"}
        height={"100%"}
        sx={{
      
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "20px", // Added padding for overall layout
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            mt: 3,
            padding: "20px", // Added padding for inner content
          }}
        >
          <Box>
            <TypingAnim />
          </Box>

          {/* More Compact Description Under the Typing Animation */}
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              color: "#ffffff",
              maxWidth: "80%",
              mt: 4, // Adjusted margin-top for more padding
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
          <p className="text-center text-base md:text-lg lg:text-xl max-w-lg mx-auto leading-normal">
           SparkConnect provides a safe space for university students to connect, find mental health resources, and chat with peers or our AI "Spark Bot." Your well-being matters.
        </p>


          </Typography>

          {/* Try Now Button */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              onClick={() => window.location.href = '/login'}
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
              Try Now
            </Button>
          </Box>

          {/* Image or Illustration Section */}
          <Box sx={{ display: "flex", mx: "auto", padding: "20px" }}>
                    <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "-5px -5px 105px #ffffff",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
              border: "1px solid black", // Added black border
            }}
          />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;

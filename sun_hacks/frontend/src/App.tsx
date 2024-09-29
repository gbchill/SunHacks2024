import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";
import { Box } from "@mui/material";
import Bot from "./pages/Bot";
import Chat from "./pages/Chat";

function App() {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #c184b8, #e6c08e)", // Apply the same gradient
        minHeight: "100vh", // Ensure it covers the full height
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ flex: 1, width: "100%", display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bot" element={<Bot />} /> 
          <Route path="/chat" element={<Chat />} />{/* Make Bot route always accessible */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;

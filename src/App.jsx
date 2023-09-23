import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import {
  Feed,
  Navbar,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:"#000"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;

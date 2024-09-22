import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

interface SearchAppBarProps {
  searchQuery: string; // The current search query
  setSearchQuery: (query: string) => void; // Function to update the search query
}

export default function SearchAppBar({
  searchQuery,
  setSearchQuery,
}: SearchAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-gray-600">
        <Toolbar className="flex flex-row justify-between items-center">
          <Typography variant="h6">S F P</Typography>

          <Box sx={{ position: "relative" }}>
            <InputBase
              placeholder="Search a country..."
              className="relative text-black rounded-md"
              value={searchQuery} // Bind the input value to searchQuery
              onChange={(e) => {
                // Only update if the input value changes
                const value = e.target.value;
                setSearchQuery(value);
              }} // Update search query on input change
              sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: "4px",
                padding: "0 8px",
                marginRight: "8px",
                width: "200px",
              }}
            />
            <button className="absolute right-2 text-black">
              <SearchIcon />
            </button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

"use client";
import { Country } from "@/typs/getFlagType";
import React, { useEffect, useState } from "react";
import SortCountries from "./SortCountries"; // Import the SortCountries component
import SearchAppBar from "./SearchAppBar"; // Import the SearchAppBar component
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Flagged() {
  const [flag, setFlag] = useState<Country[]>([]); // Initialize as an empty array
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state

  // Fetching data
  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        if (!res.ok) {
          console.error("failed to fetch data");
          return;
        }
        const data = await res.json();
        setFlag(data); // Set fetched data
      } catch (error) {
        console.error(error);
      }
    };
    fetchFlags();
  }, []);

  // Filter flags based on search query
  const filteredFlags = flag.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg-gray-600">
          <Toolbar className="flex flex-row justify-between item-center">
            <SearchAppBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <div className="container mx-auto">
        <div>
          <h1>Country Flags</h1>
          <div className="grid grid-cols-4 gap-8">
            {/* Use the SortCountries component to sort and display the flags */}
            {filteredFlags.length > 0 ? (
              <SortCountries countries={filteredFlags} />
            ) : (
              <Typography>No countries found</Typography> // Display message if no countries match
            )}
          </div>
        </div>
      </div>
    </>
  );
}

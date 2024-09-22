// SortCountries.tsx
import React from "react";
import FlagCard from "./FlagCard"; // Ensure correct import path
import { Country } from "@/typs/getFlagType"; // Adjust import path as necessary

interface SortCountriesProps {
  countries: Country[];
}

const SortCountries: React.FC<SortCountriesProps> = ({ countries }) => {
  // Sort the countries alphabetically by their common name
  const sortedCountries = [...countries].sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  return (
    <>
      {sortedCountries.map((country) => (
        <FlagCard
          key={country.cca3} // Using cca3 as a unique key
          src={country.flags.svg} // Accessing the flag URL
          title={country.name.common} // Country name
          population={country.population} // Population
          region={country.region} // Region
          capital={country.capital} // Capital (array)
        />
      ))}
    </>
  );
};

export default SortCountries;

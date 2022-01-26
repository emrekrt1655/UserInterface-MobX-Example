import React, { FC } from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Search: FC<Props> = ({ setSearchTerm, searchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default Search;

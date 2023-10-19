"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="col-md-5">
      <Input
        id="text"
        value={""}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={"Enter your search here..."}
        className="p-md-4 "
      />
    </div>
  );
};

export default Search;

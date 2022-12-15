import React, { useState } from "react";
import List from "./List";

function Search({ locations }) {
   const [searchField, setSearchField] = useState("");

  let filtered = locations
  filtered=locations.filter((entry) => {
    return entry.location.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Search ..."
              onChange={(e) =>  setSearchField(e.target.value)}
            />
          </div>
          <List locations={filtered} />
      </div>
  
  );
}

export default Search;





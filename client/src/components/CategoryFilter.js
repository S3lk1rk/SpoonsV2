import React, { useState, useEffect } from "react";
import MenuItems from "./MenuItems";

function Search(params) {
  const details = params.details
  const [searchField, setSearchField] = useState("");
  const [filterDairy, setFilterDairy] = useState(false);
  const [filterGluten, setFilterGluten] = useState(false);
  const [filterNuts, setFilterNuts] = useState(false);
  const [displayData, setDisplayData] = useState("");

  const filtered = details.filter((entry) => {
    return entry.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const dairyData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Dairy")
    })

  }
  const glutenData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Gluten")
    })

  }
  const nutsData = (data) => {
    return data.filter((entry) => {
      return !entry.allergens.includes("Nuts")
    })

  }

  

  let result = filtered

  useEffect(() => {
    if (!filterDairy && !filterGluten && !filterNuts) {
      setDisplayData(filtered)
    }

    else {

      if (filterDairy) {
        result = dairyData(result)
      }
      if (filterGluten) {
        result = glutenData(result)
      }
      if (filterNuts) {
        result = nutsData(result)
      }
      setDisplayData(result)
    }
  }, [searchField, filterDairy, filterGluten, filterNuts])


  return (
    <div>
      <div> <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        onChange={(e) => setSearchField(e.target.value)}
      /> </div>

      <div> <label> Dairy </label> <input type="checkbox" value={filterDairy} onClick={() => setFilterDairy(!filterDairy)}/></div>
      <div> <label> Gluten </label> <input type="checkbox" value={filterGluten} onClick={() => setFilterGluten(!filterGluten)}/></div>
      <div> <label> Nuts </label> <input type="checkbox" value={filterNuts} onClick={() => setFilterNuts(!filterNuts)}/></div>

      {displayData && <>
        {params.type === "recipe" && <MenuItems type={"recipe"} items={displayData} />}
        {params.type === "shopping" && <MenuItems type={"shopping"} items={displayData} />}
        {params.type === "menu" && <MenuItems type={"menu"} items={displayData} />}
      </>}
    </div>


  );



}
export default Search;

import React, { useState } from "react";
import MenuItems from "./MenuItems";
function Search({ details }) {
    const [searchField, setSearchField] = useState("");
    const filtered = details.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
        <div>
            <div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search ..."
                    onChange={(e) => setSearchField(e.target.value)}
                />
            </div>
            <MenuItems items={filtered} />
        </div>
        
    );
}
export default Search;

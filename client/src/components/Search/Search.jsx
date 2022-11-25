import { useState } from "react";
import "./Search.css";
const Search = ({ setDisplayArray, valuesArray, courses, teachers }) => {
  const [input, setInput] = useState("");
  const [searchType, setSearchType] = useState("all");
  const handleDropdownChange = (e) => {
    const { value } = e.target;
    setSearchType(value);

    const newArray =
      value === "all"
        ? [...valuesArray]
        : value === "teachers"
        ? [...teachers]
        : [...courses];

    setDisplayArray(
      newArray.filter((card) =>
        input === ""
          ? true
          : card.username !== undefined
          ? card?.username?.toLowerCase().includes(input.toLowerCase())
          : card?.name?.toLowerCase().includes(input.toLowerCase())
      )
    );
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setInput(value);

    setDisplayArray(
      valuesArray
        .filter((card) =>
          card.username !== undefined
            ? card?.username?.toLowerCase().includes(value.toLowerCase())
            : card?.name?.toLowerCase().includes(value.toLowerCase())
        )
        .filter((card) =>
          searchType === "teachers"
            ? teachers.includes(card)
            : searchType === "courses"
            ? courses.includes(card)
            : true
        )
    );
  };

  return (
    <div className="browse-search">
      <h2>Search</h2>
      <form className="search-bar">
        <select
          name="search_type"
          id="search-type"
          value={searchType}
          onChange={handleDropdownChange}
        >
          <option value="all">All</option>
          <option value="teachers">Teachers</option>
          <option value="courses">Courses</option>
        </select>
        <input type="text" value={input} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default Search;

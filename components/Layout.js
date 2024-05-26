import Card from "@/components/Card";
import Navbar from "./Navbar";
import { useState } from "react";
import { Skelton } from "./CardSkelton";

const Layout = ({ heroes, str, agi, int, uni, loading }) => {
  const [activeFilter, setActiveFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterByLocalizedName = (hero) => {
    return hero.localized_name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  };

  let filteredHeroes;
  let title;
  let fontColor;
  switch (activeFilter) {
    case "str":
      filteredHeroes = str.filter(filterByLocalizedName);
      title = "Strength Heroes";
      fontColor = "text-red-500";
      break;
    case "agi":
      filteredHeroes = agi.filter(filterByLocalizedName);
      title = "Agility Heroes";
      fontColor = "text-green-400";
      break;
    case "int":
      filteredHeroes = int.filter(filterByLocalizedName);
      title = "Intelligence Heroes";
      fontColor = "text-sky-400";
      break;
    case "uni":
      filteredHeroes = uni.filter(filterByLocalizedName);
      title = "Universal Heroes";
      fontColor = "text-yellow-400";
      break;
    case "all":
    default:
      filteredHeroes = heroes.filter(filterByLocalizedName);
      title = "All Heroes";
      break;
  }

  return (
    <div className="">
      <Navbar
        onFilterChange={handleFilterChange}
        searchValue={searchValue}
        handleSearchChange={handleSearchChange}
      />

      <div className="text-center font-semibold text-xl py-3 sticky top-14 z-30 overflow-x-hidden backdrop-blur-sm   bg-white/30 ">
        <h1 className={fontColor}>{title}</h1>
      </div>

      <Card heroes={filteredHeroes} />
      {loading && <Skelton />}
    </div>
  );
};

export default Layout;

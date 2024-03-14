import Card from "@/components/Card";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ heroes, str, agi, int, uni }) => {
  const [activeFilter, setActiveFilter] = useState("");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  let filteredHeroes;
  let title;
  let fontColor;
  switch (activeFilter) {
    case "str":
      filteredHeroes = str;
      title = "Strength Heroes";
      fontColor = "text-red-500";
      break;
    case "agi":
      filteredHeroes = agi;
      title = "Agility Heroes";
      fontColor = "text-green-400";
      break;
    case "int":
      filteredHeroes = int;
      title = "Intelligence Heroes";
      fontColor = "text-sky-400";
      break;
    case "uni":
      filteredHeroes = uni;
      title = "Universal Heroes";
      fontColor = "text-yellow-400";
      break;
    case "all":
    default:
      filteredHeroes = heroes;
      title = "All Heroes";
      break;
  }

  return (
    <div className="">
      <Navbar onFilterChange={handleFilterChange} />

      <div className="text-center font-semibold text-xl py-3 sticky top-14 z-30 overflow-x-hidden backdrop-blur-sm   bg-white/30 ">
        <h1 className={fontColor}>{title}</h1>
      </div>

      <Card heroes={filteredHeroes} />
    </div>
  );
};

export default Layout;

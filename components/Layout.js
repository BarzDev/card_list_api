import Card from "@/components/Card";
import Navbar from "./Navbar";
import { useState } from "react";

const Layout = ({ heroes, str, agi, int, uni }) => {
  const [activeFilter, setActiveFilter] = useState("");
  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Filter heroes based on the active filter
  const filteredHeroes =
    activeFilter === "str"
      ? str
      : activeFilter === "agi"
        ? agi
        : activeFilter === "int"
          ? int
          : activeFilter === "uni"
            ? uni
            : activeFilter === "all"
              ? heroes
              : heroes;

  return (
    <div className="">
      <Navbar onFilterChange={handleFilterChange} />
      <Card heroes={filteredHeroes} />
    </div>
  );
};

export default Layout;

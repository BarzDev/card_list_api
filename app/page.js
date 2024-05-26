"use client";
import { useEffect, useState } from "react";
import dotaApi from "./api";
import Layout from "@/components/Layout";

export default function Home() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHero = async () => {
    const response = await dotaApi.get();
    const data = await response.data;
    setHeroes(data);
    setLoading(false);
  };

  const sortedHeroes = heroes.sort((a, b) =>
    a.localized_name.localeCompare(b.localized_name)
  );
  const filterStr = heroes.filter((hero) => hero.primary_attr === "str");
  const filterAgi = heroes.filter((hero) => hero.primary_attr === "agi");
  const filterInt = heroes.filter((hero) => hero.primary_attr === "int");
  const filterUni = heroes.filter((hero) => hero.primary_attr === "all");

  useEffect(() => {
    fetchHero();
  }, []);
  return (
    <main className="">
      <Layout
        heroes={sortedHeroes}
        str={filterStr}
        agi={filterAgi}
        int={filterInt}
        uni={filterUni}
        loading={loading}
      />
    </main>
  );
}

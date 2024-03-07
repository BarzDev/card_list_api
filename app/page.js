"use client";
import { useEffect, useState } from "react";
import dotaApi from "./api";
import Layout from "@/components/Layout";

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  const fetchHero = async () => {
    const response = await dotaApi.get();
    const data = await response.data;
    setHeroes(data);
  };

  useEffect(() => {
    fetchHero();
  }, []);
  return (
    <main className="">
      <Layout heroes={heroes} />
    </main>
  );
}

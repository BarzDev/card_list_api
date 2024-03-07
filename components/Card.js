"use client";
import Card_imgHero from "./Card_hero-img";
import HeroBar from "./Card_img-heroBar";
import HeroAttribute from "./Card_hero-Attribute";
import HeroStats from "./Card_hero-stats";
import { useState } from "react";
import Modal from "./Card-modal";

const Card = ({ heroes }) => {
  const [selectedHero, setSelectedHero] = useState(null);

  const handleOpenModal = (hero) => {
    document.getElementById("my_modal").showModal();
    setSelectedHero(hero);
    console.log(hero);
  };

  const sortedHeroes = heroes.sort((a, b) =>
    a.localized_name.localeCompare(b.localized_name)
  );
  return (
    <div className="flex gap-4 flex-wrap justify-center container">
      {sortedHeroes.map((hero) => (
        <div
          key={hero.id}
          className="card card-compact w-80 bg-base-100 shadow-xl border-2 "
        >
          <div className="img-hero">
            <Card_imgHero hero={hero} />
          </div>
          <HeroBar hero={hero} />

          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title"> {hero.localized_name}</h2>
              <HeroAttribute hero={hero} />
            </div>
            <div>
              <HeroStats hero={hero} />
            </div>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary text-white"
                onClick={() => handleOpenModal(hero)}
              >
                Match Review
              </button>
            </div>
          </div>
        </div>
      ))}

      <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
        <Modal hero={selectedHero} />
      </dialog>
    </div>
  );
};

export default Card;

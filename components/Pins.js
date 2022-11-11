import React from "react";
import Card from "./Card";
import card1 from "../assets/card1.jpg";
import cla22 from "../assets/cla22.jpg";
import p911 from "../assets/911.jpg";
import usur from "../assets/urus.jpg";
import cclass from "../assets/cclass.avif";
import mclaren from "../assets/mclaren620.avif";
import amg from "../assets/amg.avif";
import amg1 from "../assets/amg1.avif";

const Pins = () => {
  const cards = [
    { image: cclass, username: "Ai Jean" },

    { image: usur, username: "Ai Jean" },
    { image: mclaren, username: "Ai Jean" },
    { image: p911, username: "Ai Jean" },
    { image: cla22, username: "My new car" },

    { image: amg, username: "My new car" },

    { image: amg1, username: "My new car" },
    { image: p911, username: "Ai Jean" },
    { image: usur, username: "Ai Jean" },
    { image: cclass, username: "Ai Jean" },
    { image: amg1, username: "Ai Jean" },
    { image: mclaren, username: "Ai Jean" },

    { image: amg, username: "My new car" },

    { image: cla22, username: "My new car" },
    { image: card1, username: "Ai Jean" },
    { image: p911, username: "Ai Jean" },
    { image: cclass, username: "Ai Jean" },
    { image: amg1, username: "Ai Jean" },
    { image: mclaren, username: "Ai Jean" },
    { image: card1, username: "Ai Jean" },
    { image: amg, username: "My new car" },
  ];
  return (
    <div className="w-full ">
      <div className="  max-w-[90vw] mx-auto columns:1  xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 mt-4   ">
        {cards.map((card) => (
          <Card image={card.image} />
        ))}
      </div>
    </div>
  );
};

export default Pins;

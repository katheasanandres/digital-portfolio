import React from "react";

import craft1Img from "../images/craft1.jpg";
import craft2Img from "../images/craft2.jpg";
import craft3Img from "../images/craft3.jpg";
import craft4Img from "../images/craft4.jpg";
import craft5Img from "../images/craft5.jpg";
import craft6Img from "../images/craft6.jpg";
import catCallistoImg from "../images/calli.jpg";
import catNanaImg from "../images/nana.jpg";
import gameMinecraftImg from "../images/minecraft.png";
import gameUndertaleDeltaruneImg from "../images/undertale.jpg";
import animeNeverlandImg from "../images/tpn.jpg";
import animeDungeonMeshiImg from "../images/dunmeshi.jpg";
import animeHaikyuuImg from "../images/haikyuu.jpg";
import animeAssClassImg from "../images/assclass.jpg";
import favMovieImg from "../images/little women.jpg";
import favShowImg from "../images/anne.jpg";

function Extras() {
  const categories = [
    {
      title: "♡ My Crafts",
      columns: 2,
      items: [
        {
          name: "Craft #1",
          caption: "Minecraft cake box gift I painted for my friend for his birthday! (˶ ᵔ ᵕ ᵔ ˶)",
          image: craft1Img,
        },
        {
          name: "Craft #2",
          caption: "A bracelet I made for myself ( •̯́ ₃ •̯̀)",
          image: craft2Img,
        },
        {
          name: "Craft #3",
          caption: "A bracelet I made for my cousin, I made it for her birthday (づ ᴗ _ᴗ)づ♡",
          image: craft3Img,
        },
        {
          name: "Craft #4",
          caption: "A happy birthday card I made for my friend. The cake slice can be slid out to reveal a birthday message inside (•̀ ᗜ •́ )",
          image: craft4Img,
        },
        {
          name: "Craft #5",
          caption: "A small keychain I made for my friend >ᴗ<",
          image: craft5Img,
        },
        {
          name: "Craft #6",
          caption: "A bracelet I made for my friend (๑ᵔ⤙ᵔ๑)",
          image: craft6Img,
        },
      ],
    },
    {
      title: "♡ My Cats",
      columns: 2,
      items: [
        {
          name: "Callisto",
          caption: "My oldest baby, she's nonchant and loves to eat",
          image: catCallistoImg,
        },
        {
          name: "Nana",
          caption:
            "My youngest baby, she's playful and hates being carried for long periods of time",
          image: catNanaImg,
        },
      ],
    },
    {
      title: "♡ Favorite Games",
      columns: 2,
      items: [
        {
          name: "Minecraft",
          caption:
            "I've been playing since 2014, I really enjoy building pretty things and exploring! also my favorite minecraft youtubers to watch back then were Aphmau, LDShadowLady, and ItsFunneh ♡⸜(˶˃ ᵕ ˂˶)⸝♡",
          image: gameMinecraftImg,
        },
        {
          name: "Undertale and Deltarune",
          caption:
            "I love sans, I've been a sans fangirl since 2016 #noshame. Also I love ralsei!! I especially like the music in both games too <3 (specifically Lost Girl, Raise Up Your Bat, and Spider Dance)",
          image: gameUndertaleDeltaruneImg,
        },
      ],
    },
    {
      title: "♡ Favorite Animes/Mangas",
      columns: 2,
      items: [
        {
          name: "The Promised Neverland",
          caption:
            "My top favorite anime, I love the story and the characters. I only like season 1 of the anime, I recommend reading the manga if you want to know the ACTUAL story (goldy pond arc was so robbed from the anime)",
          image: animeNeverlandImg,
        },
        {
          name: "Delicious in Dungeon",
          caption:
            "Both the anime and manga are so amazing. I adore the story and the artwork. The worldbuilding is so perfect as well!",
          image: animeDungeonMeshiImg,
        },
        {
          name: "Haikyuu",
          caption:
            "One of the first animes I watched. I absolutely love the training arc as well, the relationship and drive of the characters to succeed is what made me love this anime. I have a soft spot for Hinata and Kenma (⸝⸝´꒳`⸝⸝)",
          image: animeHaikyuuImg,
        },
        {
          name: "Assassination Classroom",
          caption:
            "Two Words: Koro Sensei. I didn't expect such a silly anime could make me cry so much with its ending.",
          image: animeAssClassImg,
        },
      ],
    },
    {
      title: "♡ Favorite Movie",
      columns: 1,
      items: [
        {
          name: "Little Women",
          caption:
            "Whenever people mistake this story as a tragic love story between Jo and Laurie, I get so mad. This story is about the March sisters and their journey to find themselves and their place in the world, not some sappy love story (˶ ｰ̀ ⤙ｰ́ ˶)",
          image: favMovieImg,
        },
      ],
    },
    {
      title: "♡ Favorite Show",
      columns: 1,
      items: [
        {
          name: "Anne with an E",
          caption:
            "The most PERFECT show I've ever watched. The cinematography is absolutely breathtaking, while the story is inspiring. I love the characters (specifically Anne and Diana ( •̯́ ₃ •̯̀) ) and the story so much, I wish there was a season 4 (◞ _◟)",
          image: favShowImg,
        },
      ],
    },
  ];

  return (
    <div className="extras-section">
      <p className="section-intro">
        Some of the things I actually enjoy (˵ •̀ ᴗ - ˵ ) ✧
      </p>

      {/* Photo Galleries */}
      {categories.map((category) => (
        <div className="extras-category" key={category.title}>
          <h3>{category.title}</h3>

          <div
            className={`extras-gallery ${
              category.columns === 1 ? "extras-gallery--single" : ""
            }`}
          >
            {category.items.map((item, idx) => (
              <div className="extras-card" key={idx}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="extras-card__img"
                  />
                ) : (
                  <div className="extras-card__placeholder">
                    <span>[ Insert {item.name} Photo ]</span>
                  </div>
                )}

                <div className="extras-card__info">
                  <span className="extras-card__title">{item.name}</span>
                  {item.caption && (
                    <span className="extras-card__caption">{item.caption}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Extras;
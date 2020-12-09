import React, { useState } from "react";
import "./styles.css";

var database = {
  Action: [
    {
      name: "One Piece",
      rating: "9/10",
      description:
        "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named One Piece. ",
      image:
        "https://images.template.net/wp-content/uploads/2015/11/09210347/One-Piece-Luffy-Wanted-Wall-Poster.jpg?width=600"
    },

    {
      name: "Baki",
      rating: "8/10",
      description:
        "The protagonist, Baki Hanma, trains with an intense focus to become strong enough to surpass his father, Yujiro Hanma, the strongest fighter in the world.",
      image:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F04%2Fnetflix-baki-season-2-opening-watch-000.jpg?fit=max&cbr=1&q=90&w=750&h=500"
    },
    {
      name: "Dragon Ball Z",
      rating: "8.5/10",
      description:
        "After learning that he is from another planet, a warrior named Goku and his friends are prompted to defend it from an onslaught of extraterrestrial enemies.",
      image:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1450926267-b45d7dd4f60c8c4b46aac37185305d4d.jpeg"
    }
  ],

  Thriller: [
    {
      name: "The Future Diary",
      rating: "8 / 10",
      description:
        "A young man competes with people around the world for a chance to become the succesor of God, with a diary that is able to tell the future.",
      image:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1477101183-68dd86608bdb80fe74bdb6ae6c63629e.jpeg"
    },

    {
      name: "Death Parade",
      rating: "8 / 10",
      description:
        "After death, humans go to either heaven or hell. But for some, at the instant of their death, they arrive at the Quindecim, a bar attended by the mysterious white-haired Decim.",
      image:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1477101262-67e64868d9f281b63d8fd8255048e530.jpeg"
    },
    {
      name: "Rainbow",
      rating: "8.5 / 10",
      description:
        " The anime follows the story of seven teenagers locked in a reformatory, waiting for a ray of light in a daily hell of suffering and humiliation, focusing especially on how they faced the life once regained freedom.",
      image:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1481523814-3be0d6b9e24487323db73f5a746221d9.png"
    }
  ],

  Drama: [
    {
      name: "A Silent Voice",
      rating: "7 / 10",
      description:
        "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption.",
      image:
        "https://imgix.ranker.com/user_node_img/4269/85374645/original/a-silent-voice-photo-u12?fit=crop&fm=pjpg&q=60&w=650&dpr=2"
    },

    {
      name: "Clannad",
      rating: "9 / 10",
      description:
        "A high school student who cares little about school or others meets a lonely girl who had to repeat a year while all her friends finished high school. He decides to hang out with her and soon meets more friendly students.",
      image:
        "https://imgix.ranker.com/user_node_img/1141/22800459/original/clannad-photo-u22?fit=crop&fm=pjpg&q=60&w=650&dpr=2"
    }
  ],

  Mystery: [
    {
      name: "Death Note",
      rating: "10/10",
      description:
        "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
      image:
        "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY268_CR1,0,182,268_AL__QL50.jpg"
    },

    {
      name: "Detective Conan",
      rating: "8/10",
      description:
        "The cases of a detective whose physical age was chemically reversed to that of a prepubescent boy but must hide his true mental development.",
      image:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1463851090-b6e49361b137620a71f26f5f32983ef8.jpeg"
    }
  ]
};

var databaseArray = Object.keys(database);

export default function App() {
  const [animeGenre, setAnimeGenre] = useState(database.Action);
  function btnClickHandler(genre) {
    var series = database[genre];
    setAnimeGenre(series);
  }

  function outputHandler(details) {
    var name = details.name;
    var rating = details.rating;
    var imageUrl = details.image;
    var desc = details.description;
    var obj = (
      <li key={details}>
        <img className="animeposters"src={imageUrl} alt="poster" />
        <div>
          <h3>{name}</h3>
          <p>{desc}</p>
          <p style={{ fontWeight: "bold" }}>{rating}</p>
        </div>
      </li>
    );
    return obj;
  }

  return (
    <div className="App">
      <div className="header">
        <h1><span>📺</span> An<span style={{color:"blue"}}>i</span>me T<span style={{color:"blue"}}>i</span>me</h1>
        <p>Showing you the list of best anime of all time.</p>
        </div>
        <div>
          <ul className="genrelist">
          {databaseArray.map((genre) => {
            return (
              <li className="genreList" key={genre}>
                <button onClick={() => btnClickHandler(genre)}>{genre}</button>
              </li>
            );
          })}
        </ul>
      </div>

      <hr />

      <ul className="outputlist">
        {animeGenre.map((series) => {
          return outputHandler(series);
        })}
      </ul>

      <footer>
              <a href="https://github.com/DanishOnGit" target="_blank">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/733/733609.svg"
                  alt="icon"
                  className="social-icon"
                ></img>
              </a>
        </footer>
    </div>
  );
}

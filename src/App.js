import React, { useState } from "react";
import "./styles.css";

const booksDB = {
  Adventure: [
    {
      name: "Into thin Air",
      author: "Jon Krakauer",
      rating: "4.7/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/41En+22fdwL._SX328_BO1,204,203,200_.jpg",
      descri:
        "Jon Krakauer's Into Thin Air is the true story of a 24-hour period on Everest, when members of three separate expeditions were caught in a storm and faced a battle against hurricane-force winds, exposure, and the effects of altitude, which ended in the worst single-season death toll in the peak's history."
    },
    {
      name: "Treasure Island",
      author: "Robert Louis Stevenson ",
      rating: "4.3/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51o32OuKYZL._SX321_BO1,204,203,200_.jpg",
      descri:
        "Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all."
    },
    {
      name: "The Island of Adventure ",
      author: "Enid Blyton",
      rating: "4.7/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51mxCyZtWkL._SX328_BO1,204,203,200_.jpg",
      descri:
        "The Island of Adventure is the first thrilling instalment in the Adventure series by Enid Blyton, one of the best-loved children's writers of all time."
    }
  ],
  Classics: [
    {
      name: "Animal Farm",
      author: " George Orwell",
      rating: "4.6/5",
      photo: "https://m.media-amazon.com/images/I/814+V60C40L._AC_UY218_.jpg",
      descri:
        "When the oppressed animals of Manor Farm defeat their master, Mr. Jones and take over the farm for themselves, they envisage it to be the beginning of independence and abundance."
    },
    {
      name: "Wuthering Heights",
      author: "Emily Brontë ",
      rating: "4.4/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51Rya-JOOXL._SX321_BO1,204,203,200_.jpg",
      descri:
        "In this epic story of love, envy, betrayal and revenge, Heathcliff and Catherine come together in a romance that destroys them and those around them."
    },

    {
      name: "Pride & Prejudice",
      author: "Jane Austen ",
      rating: "4.5/5",
      photo: "https://m.media-amazon.com/images/I/91NO9Uv9RIL._AC_UY218_.jpg",
      descri:
        "When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man. He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance!"
    }
  ],

  Fantasy: [
    {
      name: "The Ship of Secrets ",
      author: " Geronimo Stilton",
      rating: "4.6/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51r-Oic1bLL._SX319_BO1,204,203,200_.jpg",
      descri:
        "I, Geronimo Stilton, was called to the Kingdom of Fantasy for the tenth time! A fairy princess had called me there. She needed my help: The most powerful and dangerous wizard in the realm wanted to capture her -- and conquer the entire kingdom!"
    },
    {
      name: "The Island od Dragons ",
      author: "Geronimo Stilton ",
      rating: "4.6/5",
      photo: "https://m.media-amazon.com/images/I/81qF+3CtgeL._AC_UY218_.jpg",
      descri:
        "Geronimo Stilton, traveled on the wings of the Dragon of Fortune back to the Kingdom of Fantasy! He was called there by his friend Blossom, Queen of the Fairies, who needed my help."
    },
    {
      name: "Talons of Power",
      author: "Tui T. Sutherland",
      rating: "4.9/5",
      photo:
        "https://images-na.ssl-images-amazon.com/images/I/51nnaJV5m2L._SX338_BO1,204,203,200_.jpg",
      descri:
        "The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!"
    }
  ]
};

export default function App() {
  let books = Object.keys(booksDB);

  const [selectedBook, setSelectedBook] = useState("Adventure");
  function bookClickHandler(book) {
    setSelectedBook(book);
  }

  return (
    <div className="App">
      <h1 className="awesome">My Favourite's</h1>
      {books.map(function (book) {
        return (
          <button
            className="genres"
            onClick={() => bookClickHandler(book)}
            key={book}
          >
            {book}
          </button>
        );
      })}

      <ul>
        {booksDB[selectedBook].map(function (book) {
          return (
            <div className="out" key={book.name}>
              <img className="img" src={book.photo} alt="Book" />

              <div className="text-right">
                <div className="title-text">Title: {book.name}</div>
                <div className="author">Author: {book.author}</div>
                <div className="rating">Rating: {book.rating}</div>

                <div className="gist">
                  <strong>Description: </strong>
                  {book.descri}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

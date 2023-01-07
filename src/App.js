import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "❤️": "Red Heart",
  "🥹": "Face Holding Back Tears",
  "🫠": "Melting Face",
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥰": "Smiling Face with Hearts",
  "🥺": "Pleading Face",
  "🥲": "Smiling Face with Tear",
  "😍": "Smiling Face with Heart-Eyes",
  "👍": "Thumbs Up",
  "😀": "Grinning Face",
  "🙃": "Upside-Down Face",
  "😘": "Face Blowing a Kiss",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>!!Inside Outt!!</h1>
      <h3>emoji meaning finder</h3>
      <input onChange={changeHandler} placeholder="enter your emoji" />
      <div id="output">{meaning}</div>
      <h3> emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji} {""}
          </span>
        );
      })}

      <div id="about"></div>
    </div>
  );
}

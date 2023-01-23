import memesData from "../src/memesData"
import { useState } from 'react'

export default function Meme() {

  const [memeImage, setMeme] = useState("")

  function getRandomMeme() {
    const memesArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    setMeme(memesArr[randomNumber].url)
 
  }


  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text"/>
        <input className="form--input" type="text" placeholder="Bottom Text"/>
        <button onClick={getRandomMeme} className="form--button">Get a new meme image 🏞️</button>
        <img src={memeImage} className="form--image" />
      </div>
    </main>
  )
}
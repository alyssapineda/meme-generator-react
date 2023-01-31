import memesData from "../src/memesData"
import { useState } from 'react'

export default function Meme() {


  // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")  
  const [memeImage, setMeme] = useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages,setAllMemeImages] = useState(memesData)

  function getRandomMeme() {
    const memesArr = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    // setMemeImage(memesArr[randomNumber].url)
    const url = memesArr[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }))
 
  }


  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text"/>
        <input className="form--input" type="text" placeholder="Bottom Text"/>
        <button onClick={getRandomMeme} className="form--button">Get a new meme image 🏞️</button>
        <img src={memeImage.randomImage} className="form--image" />
      </div>
    </main>
  )
}
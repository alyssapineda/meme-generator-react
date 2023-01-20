import memesData from "../src/memesData"

export default function Meme() {
      /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */

  function getRandomMeme() {
    const memesArr = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    const url = memesArr[randomNumber].url
    console.log(url)
  }


  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text"/>
        <input className="form--input" type="text" placeholder="Bottom Text"/>
        <button onClick={getRandomMeme} className="form--button">Get a new meme image 🏞️</button>
        {/* <img src={url} className="form--image" /> */}
      </div>
    </main>
  )
}
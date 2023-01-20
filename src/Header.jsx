import headerLogo from './assets/troll_face.png'

export default function Header() {
  return (
    <header>
      <img src={headerLogo} className="header--logo"/>
      <h2 className="header--title">Meme Generator</h2>
      <h3 className="header--description">React Course - Project 3</h3>
    </header>
  )
}
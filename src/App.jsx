import { useState } from 'react'
import './App.css'
import Produit from './components/produit/produit'
import data from "./data.json"
let bgVideo = "https://media.rolex.com/video/upload/c_limit,w_2880/f_auto:video/q_auto:eco/v1/rolexcom/new-watches/2025/hub/videos/autoplay/cover/rolex-watches-new-watches-2025-cover-autoplay"

function App() {
  return (
    <>
      <nav>
        <h1 className='shopTitle'>E-Shopy</h1>
        <div className='divNav'>
          <div className='divSolde'>
            <span className='monSoldeTexte'>Mon Solde : </span>
            <span className='monSoldeNombre'>0$</span>
          </div>
          <div className='divMonCompte'>
            <button className='monCompteBtn'>Mon Compte</button>
          </div>
        </div>
      </nav>
      <header>
        <video src={bgVideo} muted autoPlay loop></video>
      </header>
      <main>
        <div className="catalogue">
        {data.map(element => (
          <Produit key={element.id} id={element.id} title={element.title} description={element.description} image={element.image} prix={element.prix} />
        ))}
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

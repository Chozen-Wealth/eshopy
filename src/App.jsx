import { useEffect, useState } from 'react'
import './App.css'
import Produit from './components/produit/produit'
import data from "./data.json"
import Panier from './components/panier/panier'
let bgVideo = "https://media.rolex.com/video/upload/c_limit,w_2880/f_auto:video/q_auto:eco/v1/rolexcom/new-watches/2025/hub/videos/autoplay/cover/rolex-watches-new-watches-2025-cover-autoplay"

function App() {

  const [solde, setSolde] = useState(35000)
  const [panier, setPanier] = useState([])
  const [panierOuvert, setPanierOuvert] = useState(false)
  const [stocks, setStocks] = useState(()=> {

  })
  const [total, setTotal] = useState(0)



  return (
    <>
      <nav>
        <h1 className='shopTitle'>E-Shopy</h1>
        <div className='divNav'>
          <div className='divSolde'>
            <span className='monSoldeTexte'>Solde : </span>
            <span className='monSoldeNombre'>{solde.toLocaleString("fr-FR")}$</span>
          </div>
          <div className='divMonCompte'>
            <button className='monCompteBtn'>Mon Compte</button>
            <button className={`panierBtn ${panierOuvert === false ? "" : "ouvert"}`} onClick={()=>{setPanierOuvert(!panierOuvert)}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></button>
          </div>
        </div>
        <Panier total={total} setTotal={setTotal} data={data} panier={panier} setPanier={setPanier} panierOuvert={panierOuvert} setPanierOuvert={setPanierOuvert} />
      </nav>
      <header>
        <video src={bgVideo} muted autoPlay loop></video>
      </header>
      <main>
        <div className='catalogueTitre'>
          <span>Catalogue</span>
        </div>
        <div className="catalogue">
        {data.map(element => (
          <Produit total={total} setTotal={setTotal} panier={panier} setPanier={setPanier} solde={solde} setSolde={setSolde} key={element.id} id={element.id} title={element.title} description={element.description} image={element.image} prix={element.prix} stock={element.stock} />
        ))}
        </div>
      </main>
      <footer>
        <p>&copy; Copyright - E-Shopy 2025</p>
      </footer>
    </>
  )
}

export default App

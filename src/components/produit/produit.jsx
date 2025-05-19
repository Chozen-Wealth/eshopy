import { useEffect, useState } from "react"
import "./produit.css"

export default function Produit({total,setTotal, panier, setPanier, solde, setSolde, id, title, description, prix, image, stock}){

    const [stockActuel, setStockActuel] = useState(stock)

    const HandleClick = ()=>{
        if (solde > prix) {
            setSolde(solde - prix)
            setStockActuel(stockActuel - 1)
            setTotal(total + prix)
            const articleExistant = panier.find(item => item.id === id)
            if (articleExistant) {
                const panierMisAJour = panier.map(item => 
                    item.id === id ? {...item, quantity: item.quantity + 1} : item
                )
                setPanier(panierMisAJour)
            }
            else {
                setPanier([...panier,{title: title, prix: prix, quantity: 1, image: image, id: id}])
            }
        }
        else {
            return(
                console.log("Vous n'avez pas assez de solde.")
            )
        }
    }
    useEffect(()=>{
        console.log(`Panier mis à jour : ${JSON.stringify(panier)}`)
    }, [panier])
    

    return(
        <>
            <div className="produit">
                <div className="produitImg">
                    <img src={image} alt="" />
                </div>
                <div className="produitInfos">
                    <span className="produitTitre">{title}</span>
                    <span className="produitDescription">{description}</span>
                    <span className="produitPrix">prix : {prix.toLocaleString("fr-FR")}€</span>
                    <div className="divAcheterPrix">
                        <span className="produitStock">{stockActuel} {stockActuel > 1 ? "restants": "restant"}</span>
                        {stockActuel === 0 || solde < prix ? (<button className="produitBtn" disabled>Acheter</button>) : <button className="produitBtn" onClick={HandleClick}>Acheter</button> }
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState } from "react"
import "./panier.css"
import ContenuPanier from "../contenuPanier/contenuPanier"

export default function Panier({total, setTotal, data, panier, setPanier, panierOuvert, setPanierOuvert}){


    return(
        <>
        {panierOuvert && (
            <div className="panier">
                <div className="divPanier">
                <span>Mon Panier</span>
                <div className="panierProduit">
                    {panier.map(article => (
                        <ContenuPanier key={article.id} id={article.id} title={article.title} prix={article.prix} image={article.image} quantity={article.quantity} setPanier={setPanier} />
                    ))}
                </div>
                </div>
                <div className="totalPanier">
                    <div className="totalPanierTop">
                        <span>Total :</span>
                        <span>{total.toLocaleString("fr-FR")}€</span>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
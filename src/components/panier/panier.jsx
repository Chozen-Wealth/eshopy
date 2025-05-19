import { useState } from "react"
import "./panier.css"
import ContenuPanier from "../contenuPanier/contenuPanier"

export default function Panier({total, setTotal, data, panier, setPanier, panierOuvert, setPanierOuvert, solde, setSolde, stocks, setStocks}){


    return(
        <>
            <div className={`panier ${panierOuvert === true ? "open": ""}`}>
                <span>Mon Panier</span>
                <div className="divPanier">
                <div className="panierProduit">
                    {panier.map(article => (
                        <ContenuPanier stocks={stocks} setStocks={setStocks} solde={solde} setSolde={setSolde} total={total} setTotal={setTotal} key={article.id} id={article.id} title={article.title} prix={article.prix} image={article.image} quantity={article.quantity} setPanier={setPanier} stock={article.stock} />
                    ))}
                </div>
                </div>
                <div className="totalPanier">
                    <div className="totalPanierTop">
                        <span>Total :</span>
                        <span>{total.toLocaleString("fr-FR")}€</span>
                    </div>
                    <div className="totalPanierBot">
                        <button className="btnCheckout">Finaliser l'achat</button>
                    </div>
                </div>
            </div>
        </>
    )
}
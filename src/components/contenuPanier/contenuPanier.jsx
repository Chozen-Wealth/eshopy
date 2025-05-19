import { useState } from "react"
import "./contenuPanier.css"

export default function ContenuPanier({id, image, title, quantity, prix, setPanier, total, setTotal, solde, setSolde, stock, stocks, setStocks}){

    const HandleClickSupp = ()=> {
        setPanier(prevPanier => 
            prevPanier.map(article =>
                article.id === id ? {...article, quantity: article.quantity -1} : article).filter(article => article.quantity > 0)
        )
        setTotal(prev => prev - prix)
        setSolde(prev => prev + prix)
        setStocks(prev => ({...prev, [id]: prev[id] + 1}))
    }

    return(
        <>
            <div className="articlePanier">
                <div className="divImgPanier">
                    <img className="imgPanier" src={image} alt="" />
                </div>
                <div className="panierTxtPrix">
                    <span className="txtPanier">{title}</span>
                    <span className="prixPanier">{prix.toLocaleString("fr-FR")}€</span>
                </div>
                <span className="quantityPanier">{quantity}</span>
                <svg onClick={()=> HandleClickSupp()} className="btnPanierSupp" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
        </>
    )
}
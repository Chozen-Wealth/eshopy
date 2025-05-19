import "./panier.css"

export default function Panier({panier, setPanier, panierOuvert, setPanierOuvert}){
    return(
        <>
        {panierOuvert && (
            <div className="panier">
                <span>Mon Panier</span>
                <div className="divPanier">
                    {panier.map(article => (
                        <div className="panierProduit" key={article.id}>
                            <div className="divImgPanier">
                                <img className="imgPanier" src={article.image} alt="" />
                            </div>
                            <div className="panierTxtPrix">
                                <span className="txtPanier">{article.title}</span>
                                <span className="prixPanier">{article.prix.toLocaleString("fr-FR")}€</span>
                            </div>
                            <span className="quantityPanier">{article.quantity}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}
        </>
    )
}
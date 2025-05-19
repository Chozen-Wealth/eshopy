import "./produit.css"

export default function Produit({id, title, description, prix, image}){
    return(
        <>
            <div className="produit">
                <div className="produitImg">
                    <img src={image} alt="" />
                </div>
                <div className="produitInfos">
                    <span className="produitTitre">{title}</span>
                    <span className="produitDescription">{description}</span>
                    <span className="produitDescription">prix : {prix}€</span>
                    <button className="produitBtn">Acheter</button>
                </div>
            </div>
        </>
    )
}
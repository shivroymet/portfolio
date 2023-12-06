import "./Card.css"

export function Card({number}) {
    const cardNumber = "card" + number[0];
    const cardNameImage = number[1]+"-special-image";
    const cardNameCaption= "text-center area-image-special-"+number[1]
    return <li className="card-list" id={cardNumber}>
        <div className={cardNameCaption}>
            <div className={cardNameImage}>
            </div>
        </div>
    </li>
}
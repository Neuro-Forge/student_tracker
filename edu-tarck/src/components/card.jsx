export default function Card({title, description, actionText, onAction, className}){
    return(
        <div className={className || "card"}>
            <h1>{title}</h1>
            <p>{description}</p>
            <button onClick={onAction}>{actionText}</button>
        </div>
    )
}


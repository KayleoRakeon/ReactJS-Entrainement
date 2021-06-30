const Appartement = ({ key, nom, photo, prix, note, dispo }) => (
    <div className="appart">
        <img src={photo} />
        <h2>
            <svg width="20" height="20">
                <circle cy="10" cx="10" r="10" fill={dispo ? "green" : "red"}></circle>
            </svg>
            <span>{nom}</span>
        </h2>
        <p><b>{prix}€</b> par nuit</p>
        <p>{new Array(note).fill('⭐️')}</p>
    </div>
)

export default Appartement
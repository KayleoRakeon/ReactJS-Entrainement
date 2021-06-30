const Appartement = ({ key, nom, photo, prix, note, dispo }) => (
    <div>
        <img src={photo} />
        <h2>
            <svg width="20" height="20">
                <circle cy="10" cx="10" r="10" fill={dispo ? "green" : "red"}></circle>
            </svg>
            {nom}
        </h2>
        <p>{prix}€ par nuit</p>
        <p>{new Array(note).fill('⭐️')}</p>
    </div>
)

export default Appartement
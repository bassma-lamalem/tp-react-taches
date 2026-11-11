import { useState } from 'react'

function Compteur() {
    const [valeur, setValeur] = useState(0)

    return (
        <>
            <p className="valeur-compteur">{valeur}</p>
            <div className="ligne">
                {/* À compléter : boutons −1, +1 et « Remettre à zéro » */}
            </div>
        </>
    )
}

export default Compteur
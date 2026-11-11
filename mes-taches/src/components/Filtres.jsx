function Filtres({ filtre, onChanger }) {
    const options = [
        { valeur: 'toutes', libelle: 'Toutes' },
        { valeur: 'actives', libelle: 'À faire' },
        { valeur: 'terminees', libelle: 'Terminées' }
    ]

    return (
        <div className="ligne">
            {options.map((opt) => (
                <button
                    key={opt.valeur}
                    className={filtre === opt.valeur ? 'actif' : ''}
                    onClick={() => onChanger(opt.valeur)}
                >
                    {opt.libelle}
                </button>
            ))}
        </div>
    )
}

export default Filtres
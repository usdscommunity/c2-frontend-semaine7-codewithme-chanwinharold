import {useState} from 'react';

function useCount(count=1) {
    const [compteur, setCompteur] = useState(count)

    const handleIncrement = () => {
        setCompteur(v => v+1)
    }
    const handleDecrement = () => {
        setCompteur(v => (v <= 0) ? 0 : v-1)
    }

    return [compteur, handleIncrement, handleDecrement]
}

export default useCount;
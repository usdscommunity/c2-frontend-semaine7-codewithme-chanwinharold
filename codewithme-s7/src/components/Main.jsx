import Dessert from "./Dessert.jsx";

import {useEffect, useState} from "react";

function Main() {
    const [Data, setData] = useState(null)

    // useEffect(() => {
    //     fetch("/data.json")
    //         .then(response => response.json())
    //             .then(resData => setData(resData))
    //             .catch(error => console.log("Échec lors de la conversion des données", error))
    //         .catch(error => console.log("Échec lors de la récupération des données", error))
    // }, []);

    useEffect( () => {
        const handleFetch = async () => {
            try {
                const res = await fetch("/data.json")
                const resData = await res.json()
                setData(resData)
            } catch (error) {
                console.log("Échec lors de la récupération des données", error)
            }
        }
        handleFetch()
    }, []);

    return Data ? (
        <div className="max-w-[975px] w-fit">
            <h1 className="flex text-primary-rose-900 font-bold text-4xl mb-8">Desserts</h1>
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    Data.map(({image, category, name, price}) => (
                        <Dessert
                            key={name}
                            mobileUrl={image.mobile}
                            TabletUrl={image.tablet}
                            DesktopUrl={image.desktop}
                            category={category}
                            name={name}
                            price={price}
                        />
                    ))
                }
            </div>
        </div>
    ) : <p>Loading data...</p>;
}

export default Main;
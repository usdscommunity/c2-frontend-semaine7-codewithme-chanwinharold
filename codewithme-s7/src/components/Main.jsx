import Dessert from "./Dessert.jsx";

import {data} from "../data/data.js"

function Main() {

    // useEffect(() => {
    //     fetch(data)
    //         .then(response => response.json())
    //             .then(resData => setData(resData))
    //             .catch(error => console.log("Échec lors de la conversion des données", error))
    //         .catch(error => console.log("Échec lors de la récupération des données", error))
    // }, []);

    // useEffect( async function() {
    //     try {
    //         const res = await fetch('../data/data.js')
    //         const resData = await res.json()
    //         setData(resData)
    //     } catch (error) {
    //         console.log("Échec lors de la récupération des données", error)
    //     }
    // }, [])

    const image = data[0].image.mobile

    return (
        <div className="m-10">
            <h1 className="text-primary-rose-900 font-bold text-4xl mb-8">Desserts</h1>
            <div className="flex flex-wrap gap-5 ">
                {
                    data.map((dessert) => (
                        <Dessert
                            key={dessert.name}
                            mobileUrl={image}
                            TabletUrl={dessert.image.tablet}
                            DesktopUrl={dessert.image.desktop}
                            category={dessert.category}
                            name={dessert.name}
                            price={dessert.price}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Main;
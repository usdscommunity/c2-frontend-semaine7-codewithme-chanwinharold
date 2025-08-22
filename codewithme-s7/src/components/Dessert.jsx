import Button from "./Button.jsx";

function Dessert({mobileUrl, TabletUrl, DesktopUrl, category, name, price}) {

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center">
                <picture>
                    <source srcSet={TabletUrl} media="(min-width: 650px)" />
                    <source srcSet={DesktopUrl} media="(min-width: 1024px)" />
                    <img className="w-70 h-70 object-cover rounded-lg" src={mobileUrl} alt="" />
                </picture>
                <Button />
            </div>
            <div className="flex flex-col">
                <span className="text-primary-rose-500">{category}</span>
                <strong className="text-primary-rose-900 text-lg font-semibold">{name}</strong>
                <span className="text-primary-red font-medium">${price.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default Dessert
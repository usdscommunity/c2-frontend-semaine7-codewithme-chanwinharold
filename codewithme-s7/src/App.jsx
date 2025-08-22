import './assets/styles/App.css';
import Main from "./components/Main.jsx";
import Cart from "./components/Cart.jsx";

function App() {

    return (
        <div className="m-10 flex justify-center max-sm:flex-wrap max-sm:gap-12">
            <Main />
            <Cart />
        </div>
    )
}

export default App

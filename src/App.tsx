import style from "./App.module.css";
import Cards from "./components/Cards/Cards.tsx";
import Header from "./components/Header/Header.tsx";
import RadioSelect from "./components/RadioSelect/RadioSelect.tsx";
import Filters from "./components/Filters/Filters.tsx";

function App() {

    return (
        <>
            <Header/>
            <main className={style.MainLayout}>
                <Filters />
                <div className={style.Layout}>
                    <RadioSelect/>
                    <Cards/>
                </div>
            </main>

        </>
    )
}

export default App

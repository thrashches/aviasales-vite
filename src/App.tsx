import style from "./App.module.css";
import Cards from "./components/Cards/Cards.tsx";
import Header from "./components/Header/Header.tsx";
import RadioSelect from "./components/RadioSelect/RadioSelect.tsx";
import Filters from "./components/Filters/Filters.tsx";
import Button from "./components/Button/Button.tsx";
import {Provider} from "react-redux";
import {store} from "./store";


function App() {

    return (
        <Provider store={store}>
            <Header/>
            <main className={style.MainLayout}>
                <Filters />
                <div className={style.Layout}>
                    <RadioSelect/>
                    <Cards/>
                    <Button/>
                </div>
            </main>

        </Provider>
    )
}

export default App

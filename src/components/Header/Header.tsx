import siteLogo from "../../assets/img/SiteLogo.svg";
import style from "./Header.module.css";

export  default function Header () {
    return (
        <header className={style.Header}>
            <img className={style.Header__logo} src={siteLogo} alt={""}/>
            <h1 className={style.Header__text}>Поиск авиабилетов</h1>
        </header>
    )
}
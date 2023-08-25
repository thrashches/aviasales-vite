import style from "./RouteCard.module.css";
import victoryLogo from "../../assets/img/logos/victory.svg";


export default function RouteCard() {
    return (
        <div className={style.RouteCard}>
            <div className={style.RouteCard__header}>
                <div className={style.alignLeft}>
                    <p className={style.price}>21 500 Р</p>
                </div>
                <div className={style.alignRight}>
                    <img className={style.CompanyLogo} src={victoryLogo} alt={"Победа"}/>
                </div>
            </div>
            <div className={style.RouteCard__body}>
                <div className={style.col}>
                    <p className={style.SmallHeader}>SVO - LED </p>
                    <p className={style.cell}>12:00 - 16:30</p>
                </div>
                <div className={style.col}>
                    <p className={style.SmallHeader}>В пути</p>
                    <p className={style.cell}>4 ч 30 мин</p>
                </div>
                <div className={style.col}>
                    <p className={style.SmallHeader}>Пересадки</p>
                    <p className={style.cell}>1 пересадка</p>
                </div>
            </div>
        </div>
    );
}
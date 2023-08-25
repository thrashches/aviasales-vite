import style from "./Cards.module.css";
import RouteCard from "../RouteCard/RouteCard.tsx";

export default function Cards() {
    return (
        <div className={style.Cards}>
            <RouteCard/>
            <RouteCard/>
            <RouteCard/>
        </div>

    );
}
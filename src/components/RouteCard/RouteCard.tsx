import style from "./RouteCard.module.css";
import victoryLogo from "../../assets/img/logos/victory.svg";
import s7Logo from "../../assets/img/logos/s7.svg";
import redWingsLogo from "../../assets/img/logos/red-wings.svg";
import {Ticket} from "../../mockData/types.ts";
import {formatTime} from "../../utils";


type RouteCardProps = {
    ticket: Ticket
}

const companies: {[key: string]: {name: string, logo: string, alt: string}} = {
    victory: {
        name: 'victory',
        logo: victoryLogo,
        alt: "Победа",
    },
    redWings: {
        name: 'redWings',
        logo: redWingsLogo,
        alt: "Red Wings",
    },
    S7: {
        name: 'S7',
        logo: s7Logo,
        alt: "S7",
    },
}

export default function RouteCard(props: RouteCardProps) {
    const {ticket} = props;

    return (
        <div className={style.RouteCard}>
            <div className={style.RouteCard__header}>
                <div className={style.alignLeft}>
                    <p className={style.price}>{ticket.price} Р</p>
                </div>
                <div className={style.alignRight}>
                    <img
                        className={style.CompanyLogo}
                        src={companies[ticket.company].logo}
                        alt={companies[ticket.company].alt}/>
                </div>
            </div>
            <div className={style.RouteCard__body}>
                <div className={style.col}>
                    <p className={style.SmallHeader}>{ticket.from} - {ticket.to} </p>
                    <p className={style.cell}>{ticket.time.startTime} - {ticket.time.endTime}</p>
                </div>
                <div className={style.col}>
                    <p className={style.SmallHeader}>В пути</p>
                    <p className={style.cell}>{formatTime(ticket.duration)}</p>
                </div>
                <div className={style.col}>
                    <p className={style.SmallHeader}>Пересадки</p>
                    {
                        ticket.connectionAmount === 0 ?
                            <p className={style.cell}>Без пересадок</p> :
                            <p className={style.cell}>
                                {ticket.connectionAmount} {ticket.connectionAmount === 1 ? "пересадка" : "пересадки"}
                            </p>
                    }
                </div>
            </div>
        </div>
    );
}
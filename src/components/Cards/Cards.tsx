import style from "./Cards.module.css";
import RouteCard from "../RouteCard/RouteCard.tsx";
import {useSelector} from "react-redux";
import {ITicketState} from "../../store/ticketSlice.ts";

export default function Cards() {
    const tickets = useSelector((state: ITicketState) => state.tickets.tickets);

    return (
        <div className={style.Cards}>
            {tickets.map((ticket) => (
                <RouteCard key={ticket.id} ticket={ticket}/>
            ))}

        </div>

    );
}
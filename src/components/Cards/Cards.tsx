import style from "./Cards.module.css";
import RouteCard from "../RouteCard/RouteCard.tsx";
import {useSelector, useDispatch} from "react-redux";
import {filterTickets, ITicketState} from "../../store/ticketSlice.ts";
import {IFilterState} from "../../store/filterSlice.ts";
import {useEffect} from "react";


export default function Cards() {
    // Список рейсов/билетов
    const tickets = useSelector((state: ITicketState) => state.tickets.tickets);
    const filtered = useSelector((state: ITicketState) => state.tickets.filtered);
    const shown = useSelector((state: ITicketState) => state.tickets.shown);
    const changes = useSelector((state: IFilterState) => state.filter.changes);
    const company = useSelector((state: IFilterState) => state.filter.company);
    const criteria = useSelector((state: IFilterState) => state.filter.criteria);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTickets({changes, company, criteria}));
    }, [changes, company, criteria, dispatch]);

    return (
        <div className={style.Cards}>
            {tickets.filter((ticket) => filtered.includes(ticket.id)).slice(0, shown).map((ticket) => (
                <RouteCard key={ticket.id} ticket={ticket}/>
            ))}

        </div>

    );
}
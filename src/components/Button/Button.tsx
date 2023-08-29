import style from "./Button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {ITicketState, loadMore} from "../../store/ticketSlice.ts";

export default function Button() {
    // Кнопка "Загрузить еще"
    const filtered = useSelector((state: ITicketState) => state.tickets.filtered);
    const shown = useSelector((state: ITicketState) => state.tickets.shown);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(loadMore());
    }

    return (
        <>
            {
                filtered.length > shown ?
                    <button className={style.Button} onClick={handleClick}>Загрузить еще</button> :
                    <></>
            }
        </>
    )
}
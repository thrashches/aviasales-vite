import style from "./RadioSelect.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SyntheticEvent} from "react";
import {setCriteria, IFilterState} from "../../store/filterSlice";

export default function RadioSelect() {
    const criteria = useSelector((state: IFilterState) => state.filter.criteria);
    const dispatch = useDispatch();
    const handleRadioChange = (e: SyntheticEvent) => {
        dispatch(setCriteria({value: e.currentTarget.value}));
    }

    return (
        <div className={style.RadioSelect}>
            <label htmlFor={"cheapest"}
                   className={style.RadioSelect__item}>
                <input className={style.RadioSelect__input} type="radio"
                       name={"criteria"}
                       value={"cheapest"} id={"cheapest"}
                       onChange={handleRadioChange}
                       checked={criteria.value === "cheapest"}
                />
                Самый дешевый</label>
            <label htmlFor={"fastest"}
                   className={style.RadioSelect__item}>
                <input className={style.RadioSelect__input} type="radio"
                       name={"criteria"}
                       value={"fastest"} id={"fastest"}
                       onChange={handleRadioChange}
                       checked={criteria.value === "fastest"}
                />
                Самый быстрый</label>
            <label htmlFor={"optimal"}
                   className={style.RadioSelect__item}>
                <input className={style.RadioSelect__input} type="radio"
                       name={"criteria"}
                       value={"optimal"} id={"optimal"}
                       onChange={handleRadioChange}
                       checked={criteria.value === "optimal"}
                />
                Самый оптимальный</label>
        </div>
    )
}
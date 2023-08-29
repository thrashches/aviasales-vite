import style from "./RadioSelect.module.css";
import {useDispatch, useSelector} from "react-redux";
import {SyntheticEvent} from "react";
import {setCriteria, IFilterState} from "../../store/filterSlice";

export default function RadioSelect() {
    const criteria = useSelector((state: IFilterState) => state.filter.criteria);
    const dispatch = useDispatch();
    const handleRadioChange = (e: SyntheticEvent) => {
        dispatch(setCriteria({value: (e.currentTarget as HTMLFormElement).value}));
    }

    return (
        <div className={style.RadioSelect}>
            <input className={style.RadioSelect__input} type="radio"
                   name={"criteria"}
                   value={"cheapest"} id={"cheapest"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "cheapest"}
            />
            <label htmlFor={"cheapest"}
                   className={style.RadioSelect__item}>

                Самый дешевый</label>
            <input className={style.RadioSelect__input} type="radio"
                   name={"criteria"}
                   value={"fastest"} id={"fastest"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "fastest"}
            />
            <label htmlFor={"fastest"}
                   className={style.RadioSelect__item}>

                Самый быстрый</label>
            <input className={style.RadioSelect__input} type="radio"
                   name={"criteria"}
                   value={"optimal"} id={"optimal"}
                   onChange={handleRadioChange}
                   checked={criteria.value === "optimal"}
            />
            <label htmlFor={"optimal"}
                   className={style.RadioSelect__item}>

                Самый оптимальный</label>
        </div>
    )
}
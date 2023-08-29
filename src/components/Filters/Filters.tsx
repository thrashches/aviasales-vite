import style from "./Filters.module.css";
import {SyntheticEvent} from "react";
import {setFilter, IFilterState, setCompany} from "../../store/filterSlice.ts";
import {useDispatch, useSelector} from "react-redux";

export default function Filters() {
    // Боковая панель фильтров
    const changes = useSelector((state: IFilterState) => state.filter.changes);
    const company = useSelector((state: IFilterState) => state.filter.company);
    const dispatch = useDispatch();

    const handleCheckboxChange = (e: SyntheticEvent) => {
        dispatch(setFilter({
            value: Number((e.currentTarget as HTMLFormElement).value),
            selected: (e.currentTarget as HTMLFormElement).checked
        }));
    };

    const handleRadioChange = (e: SyntheticEvent) => {
        dispatch(setCompany({value: (e.currentTarget as HTMLFormElement).value, selected: true}));
    }

    return (
        <div className={style.Filters__wrapper}>
            <div className={style.Filters}>
                <h4 className={style.Block__header}>Количество пересадок</h4>
                <div className={style.Filters__items}>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'nonStop'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={0} id={'nonStop'}
                                   checked={changes[0].selected}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            Без пересадок
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'1Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={1} id={'1Change'}
                                   checked={changes[1].selected}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            1 пересадка
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'2Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={2} id={'2Change'}
                                   checked={changes[2].selected}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            2 пересадки
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'3Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={3} id={'3Change'}
                                   checked={changes[3].selected}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            3 пересадки
                        </label>
                    </div>
                </div>
            </div>
            <div className={style.Filters}>
                <h4 className={style.Block__header}>Компании</h4>
                <div className={style.Filters__items}>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'victory'}>
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'victory'}
                                   checked={company.value === 'victory'}
                                   onChange={handleRadioChange}
                                   id={'victory'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Победа
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'redWings'}>
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'redWings'}
                                   checked={company.value === 'redWings'}
                                   onChange={handleRadioChange}
                                   id={'redWings'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Red Wings
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'S7'}>
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'S7'}
                                   checked={company.value === 'S7'}
                                   onChange={handleRadioChange}
                                   id={'S7'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            S7 Airlines
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
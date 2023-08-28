import style from "./Filters.module.css";
import {SyntheticEvent} from "react";

export default function Filters() {
    const handleCheckboxChange = (e: SyntheticEvent) => {
        console.log(e);
    }

    return (
        <div className={style.Filters__wrapper}>
            <div className={style.Filters}>
                <h4 className={style.Block__header}>Количество пересадок</h4>
                <div className={style.Filters__items}>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'nonStop'}>
                            <input className={style.CheckboxHidden} type="checkbox" checked={true} id={'nonStop'}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            Без пересадок
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'1Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'1'} id={'1Change'}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            1 пересадка
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'2Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'2'} id={'2Change'}
                                   onChange={handleCheckboxChange}/>
                            <span className={style.CheckboxFake}/>
                            2 пересадки
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'3Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'3'} id={'3Change'}
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
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'0'}
                                   id={'victory'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Победа
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'redWings'}>
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'1'}
                                   id={'redWings'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Red Wings
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'S7'}>
                            <input className={style.CheckboxHidden} name={'company'} type="radio" value={'2'}
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
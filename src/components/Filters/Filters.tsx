import style from "./Filters.module.css";

export default function Filters() {
    return (
        <div className={style.Filters__wrapper}>
            <div className={style.Filters}>
                <h4 className={style.Block__header}>Количество пересадок</h4>
                <div className={style.Filters__items}>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'nonStop'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'0'} id={'nonStop'}/>
                            <span className={style.CheckboxFake}/>
                            Без пересадок
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'1Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'1'} id={'1Change'}/>
                            <span className={style.CheckboxFake}/>
                            1 пересадка
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'2Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'2'} id={'2Change'}/>
                            <span className={style.CheckboxFake}/>
                            2 пересадки
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'3Change'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'3'} id={'3Change'}/>
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
                            <input className={style.CheckboxHidden} type="checkbox" value={'0'} id={'victory'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Победа
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'redWings'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'1'} id={'redWings'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            Red Wings
                        </label>
                    </div>
                    <div className={style.Filters__items__item}>
                        <label className={style.CheckboxLabel} htmlFor={'S7'}>
                            <input className={style.CheckboxHidden} type="checkbox" value={'2'} id={'S7'}/>
                            <span className={style.CheckboxFakeRadio}/>
                            S7 Airlines
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
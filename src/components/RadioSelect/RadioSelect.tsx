import style from "./RadioSelect.module.css";

export default function RadioSelect() {
    return (
        <div className={style.RadioSelect}>
            <div className={`${style.RadioSelect__item} ${style.active}`}>Самый дешевый</div>
            <div className={style.RadioSelect__item}>Самый быстрый</div>
            <div className={style.RadioSelect__item}>Самый оптимальный</div>
        </div>
    )
}
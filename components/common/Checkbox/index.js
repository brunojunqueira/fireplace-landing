import style from './checkbox.module.scss'

const Checkbox = (props) => {

    const handleCheck = (e) => {
        props.onToggleCheck(e.target.checked);
    }

    return(
        <div className={style.content}>
            <input
                name={props.name}
                id={props.name}
                type='checkbox'
                defaultChecked={false}
                onChange={handleCheck}
                className={style.content__checkbox}
            />
            <label
                htmlFor={props.name}
                className={style.content__label}
            >
                {props.label ?? ''}
            </label>
        </div>
    )
}

export default Checkbox;
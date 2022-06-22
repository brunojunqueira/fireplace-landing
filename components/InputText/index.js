import style from './input.module.scss';

export function InputText({ label, name, ...rest }) {
    return (
        <div className={style.inputContainer}>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} {...rest} />
        </div>        
    );
}
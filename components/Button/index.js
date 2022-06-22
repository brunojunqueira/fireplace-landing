import style from './button.module.scss';

export function Button({ children, ...rest }) {
    return (
        <button className={style.buttonContent} {...rest}>
            { children }
        </button>
    );
}